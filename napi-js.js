'use strict';
var
    LANGUAGE = require('./languages'),
    fs = require("promised-io/fs"),
    http = require("http"),
    assert = require('assert'),
    glob = require('globby'),
    _ = require('lodash'),
    Q = require('q'),
    path = require('path'),
    querystring = require('querystring'),
    xml2js = require('xml2js'),
    md5pf = require('md5-part-file');

/**
 * Checking if provided language exists in available languages. Default lang: PL
 * @param  {string} language Language
 * @return {string}          Language
 */
function checkLanguage(language) {
    for (var id in LANGUAGE) {
        if (LANGUAGE[id] === language) {
            return true;
        }
    }
    return false;
}
/**
 * Check the provided options object
 * @param  {object} options Options object
 * @return {object}          Options object
 */
function checkOptions(options) {
    var o = (!options) ? {} : options;
    o.caseSensitive = _.isArray(o.files) ? false : true;
    o.files = _.isArray(o.files) ? o.files : ['*.mkv', '*.avi', '*.mp4'];
    o.language = checkLanguage(o.language) ? o.language : LANGUAGE.POLISH;
    o.verbose = options.verbose ? true : false;
    return o;
}

/**
 * Returns hash of the provided file
 * @param  {string} file File name
 * @return {promise}      promise
 */
function getHash(file) {
    var deffered = Q.defer();
    md5pf(file, 0, 10485760, function (err, hash) {
        if (err) {
            deferred.reject('Something went wrong during md5 hash calculation for file ' + file);
        } else {
            deffered.resolve({
                file: file,
                hash: hash
            });
        }
    });
    return deffered.promise;
}

/**
 * Creates napiprojekt HTTP-request
 * @param  {object} options      Options
 * @param  {object} fileWithHash Object wtih filename and hash
 * @return {promise}              promise
 */
function getHttpRequest(options, fileWithHash) {
    var deffered = Q.defer();
    var postData = querystring.stringify({
        'downloaded_subtitles_lang': options.language,
        'downloaded_subtitles_txt': '1',
        'client_ver': '1.0',
        'downloaded_subtitles_id': fileWithHash.hash,
        'client': 'AutoMove',
        'mode': '1'
    });

    var postOptions = {
        host: 'www.napiprojekt.pl',
        port: '80',
        path: '/api/api-napiprojekt3.php',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
        }
    };

    var req = http.request(postOptions, function (res) {
        processResponse(fileWithHash, deffered, res);
    });
    req.on('error', function (e) {
        deferred.reject(e);
    })
    req.write(postData)
    req.end();

    return deffered.promise;
}

/**
 * Process the napiprojekt HTTP-request response
 * @param  {object} fileWithHash Object wtih filename and hash
 * @param  {deffered} deffered     HTTP request deffered
 * @param  {object} res          HTTP request response object
 */
function processResponse(fileWithHash, deffered, res) {
    res.setEncoding('utf-8');
    var responseString = '';
    res.on('data', function (data) {
        deffered.notify('.');
        responseString += data;
    });
    res.on('end', function () {
        fileWithHash.responseString = responseString;
        deffered.resolve(fileWithHash);
    });
}

/**
 * Transforms XML response to JSON, saves the subtitles and then
 * returns subtitles file name.
 * @param  {object} response Napiprojekt response
 * @return {promise}          promise
 */
function getJSONFromXML(response) {
    var deffered = Q.defer();
    xml2js.parseString(response.responseString, function (err, result) {
        if (err) {
            return deffered.reject(err);
        }
        if (result.result) {
            if (result.result.subtitles) {
                if (result.result.subtitles.length === 1) {
                    var subsFileName = path.join(
                        path.dirname(response.file),
                        path.basename(response.file, path.extname(response.file)) + '.txt'
                    );
                    deffered.notify('Saving file: ' + subsFileName);
                    var file = fs.createWriteStream(subsFileName);
                    var subs = result.result.subtitles[0];

                    var b = new Buffer(subs.content[0], 'base64');
                    file.write(b.toString('UTF-8'));
                    file.on('error', function (err) {
                        deffered.reject(err);
                    });
                    file.on('finish', function () {
                        deffered.notify('File saved successfully.');
                        file.close(function () {
                            deffered.resolve(subsFileName);
                        });
                    });
                    file.end();
                } else {
                    deffered.notify('Wrong number of subtitles.');
                    deffered.resolve();
                }
            } else {
                deffered.notify('No subtitles in reponse.');
                deffered.resolve();
            }
        } else {
            deffered.notify('No response.');
            deffered.resolve();
        }
    });
    return deffered.promise;
}

/**
 * Downloads subtitle for provided files. Main function.
 * @param  {object} options Options
 * @return {promise}         promise
 */
function downloadSubtitles(options) {
    var o = checkOptions(options);
    var finalDeffer = Q.defer();
    var d = Q.defer();
    Q.fcall(function () {
            glob(o.files, {
                    nocase: o.caseSensitive
                })
                .then(function (files) {
                    d.resolve(files);
                }, function (err) {
                    d.reject(err);
                });
            return d.promise;
        })
        .then(function (files) {
            if (options.verbose)
                console.info('Available files: ', files);
            var p = [];
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                p.push(getHash(file));
            }
            if (p.length == 0) {
                finalDeffer.resolve([]);
            }
            return Q.all(p);
        })
        .then(function (filesWithHash) {
            var p = [];
            for (var i = 0; i < filesWithHash.length; i++) {
                var fileWithHash = filesWithHash[i];
                if (options.verbose)
                    console.log('Downloading subtitles for file ', fileWithHash.file);
                p.push(getHttpRequest(o, fileWithHash));
            }
            if (p.length == 0) {
                finalDeffer.resolve([]);
            }
            return Q.all(p);
        })
        .progress(function (progress) {
            // console.log(progress.value);
            finalDeffer.notify(progress);
        })
        .then(function (results) {
            var p = [];
            for (var i = 0; i < results.length; i++) {
                var fileWithHashAndContent = results[i];
                p.push(getJSONFromXML(fileWithHashAndContent));
            }
            if (p.length == 0) {
                finalDeffer.resolve([]);
            }
            return Q.all(p);
        })
        .then(function (subFileNames) {
            subFileNames = _.remove(subFileNames, undefined);
            if (options.verbose)
                for (var i = 0; i < subFileNames.length; i++) {
                    console.log('Subtitles downloaded: ', subFileNames[i]);
                }
            finalDeffer.resolve(subFileNames);
        })
        .catch(function (err) {
            console.error(err);
            finalDeffer.reject(err);
        });
    return finalDeffer.promise;
}

module.exports = downloadSubtitles;
