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

function checkLanguage(language) {
    for (var id in LANGUAGE) {
        if (LANGUAGE[id] === language) {
            return true;
        }
    }
    return false;
}

function checkOptions(options) {
    var o = (!options) ? {} : options;
    o.caseSensitive = _.isArray(o.files) ? false : true;
    o.files = _.isArray(o.files) ? o.files : ['*.mkv', '*.avi', '*.mp4'];
    o.language = checkLanguage(o.language) ? o.language : LANGUAGE.POLISH;
    return o;
}

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

function getHttpRequest(options, fileWithHash) {
    console.log('Downloading subtitles for file ', fileWithHash.file);
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
                    deffered.reject('Wrong number of subtitles.');
                }
            } else {
                deffered.reject('No subtitles in reponse.');
            }
        } else {
            deffered.reject('No response.');
        }
    });
    return deffered.promise;
}

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
            console.info('Movie files: ', files);
            var p = [];
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                p.push(getHash(file));
            }
            if(p.length == 0) {
              finalDeffer.resolve([]);
            }
            return Q.all(p);
        })
        .then(function (filesWithHash) {
            var p = [];
            for (var i = 0; i < filesWithHash.length; i++) {
                var fileWithHash = filesWithHash[i];
                p.push(getHttpRequest(o, fileWithHash));
            }
            if(p.length == 0) {
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
            if(p.length == 0) {
              finalDeffer.resolve([]);
            }
            return Q.all(p);
        })
        .then(function (subFileNames) {
            finalDeffer.resolve(subFileNames);
        })
        .catch(function (err) {
            finalDeffer.reject(err);
        });
    return finalDeffer.promise;
}

module.exports = downloadSubtitles;
