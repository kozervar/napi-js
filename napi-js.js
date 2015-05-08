'use strict';

var querystring = require('querystring'),
    http = require('http'),
    fs = require('fs'),
    path = require('path'),
    md5pf = require('md5-part-file'),
    xml2js = require('xml2js'),
    Q = require('q');

var LANGUAGE = {
    POLISH: 'PL',
    ENGLISH: 'EN'
};

function downloadSubtitles(fileName, language) {
    var deferred = Q.defer();

    if (!fileName) {
        deferred.reject('File name is missing');
        return deferred.promise;
    }
    if (!language) {
        deferred.reject('Language is missing');
        return deferred.promise;
    }

    fs.stat(fileName, function (err) {
        if (err) {
            if (err.code === 'ENOENT') {
                deferred.reject('Such a file does not exist.');
            } else {
                deferred.reject(err);
            }
        } else {
            deferred.notify('Generating hash for file ' + fileName);
            md5pf(fileName, 0, 10485760, function (err, hash) {
                if (err) {
                    deferred.reject('Something went wrong during md5 hash calculation of partial file.');
                } else {
                    deferred.notify('Hash: ' + hash);

                    var post_data = querystring.stringify({
                        'downloaded_subtitles_lang': language,
                        'downloaded_subtitles_txt': '1',
                        'client_ver': '1.0',
                        'downloaded_subtitles_id': hash,
                        'client': 'AutoMove',
                        'mode': '1'
                    });

                    var post_options = {
                        host: 'www.napiprojekt.pl',
                        port: '80',
                        path: '/api/api-napiprojekt3.php',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Content-Length': post_data.length
                        }
                    };
                    var req = http.request(post_options, function (res) {
                        res.setEncoding('utf-8');
                        deferred.notify('Response from server received');
                        deferred.notify('Downloading...');

                        var responseString = '';
                        res.on('data', function (data) {
                            deferred.notify(data.length);
                            responseString += data;
                        });
                        res.on('end', function () {
                            deferred.notify('Downloaded.');
                            deferred.notify('Parsing response to JSON.');
                            xml2js.parseString(responseString, function (err, result) {
                                deferred.notify('Response parsed.');
                                if (err) {
                                    return deferred.reject(err);
                                }
                                if (result.result) {
                                    if (result.result.subtitles) {
                                        if (result.result.subtitles.length === 1) {

                                            var subsFileName = path.join(
                                                path.dirname(fileName),
                                                path.basename(fileName, path.extname(fileName)) + '.txt'
                                            );
                                            deferred.notify('Saving file ' + subsFileName);
                                            var file = fs.createWriteStream(subsFileName);
                                            var subs = result.result.subtitles[0];

                                            var b = new Buffer(subs.content[0], 'base64');
                                            file.write(b.toString('UTF-8'));
                                            file.on('error', function (err) {
                                                deferred.reject(err);
                                            });
                                            file.on('finish', function () {
                                                deferred.notify('File saved successfully');
                                                file.close(function () {
                                                    deferred.resolve(subsFileName);
                                                });
                                            });
                                            file.end();
                                        } else {
                                            deferred.reject('Wrong number of subtitles');
                                        }
                                    } else {
                                        deferred.reject('No subtitles in result');
                                    }
                                } else {
                                    deferred.reject('No result');
                                }
                            });
                        });
                    });

                    req.on('error', function (e) {
                        deferred.reject(e);
                    });

                    req.write(post_data);
                    req.end();

                }
            });
        }
    });

    return deferred.promise;
}

module.exports.LANGUAGE = LANGUAGE;
module.exports.downloadSubtitles = downloadSubtitles;
