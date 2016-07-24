/**
 * Created by kozervar on 2016-07-19.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./utils');

/**
 * Generate MD5 partial hash for provided files
 * @param {NapijsOptions} options
 * @param files
 * @returns {Promise}
 */
var generateFileHashes = function generateFileHashes(options, files) {
    if (options.verbose) {
        _utils.logger.info('Generating files hash...');
    }
    if (files.length === 0) _utils.logger.info('No files found!');else if (options.verbose) {
        _utils.logger.info('Files found: ');
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var file = _step.value;

                _utils.logger.info(file);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }

    var promises = [];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = files[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var file = _step2.value;

            promises.push((0, _utils.hash)(file));
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return Promise.all(promises);
};
/**
 * Check if files exist. If --save flag is on then rename existing file
 * @param {NapijsOptions} options
 * @param fileWithHashes
 * @returns {Promise}
 */
var checkSubtitleFiles = function checkSubtitleFiles(options, fileWithHashes) {
    if (options.verbose) {
        _utils.logger.info('Checking existing subtitles...');
    }
    var promises = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = fileWithHashes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var file = _step3.value;

            promises.push(_utils.fileManager.subtitleExists(options, file));
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }

    return Promise.all(promises);
};

/**
 * Perform HTTP request to Napiprojekt server
 * @param {NapijsOptions} options
 * @param fileHashes
 * @returns {Promise}
 */
var makeHttpRequests = function makeHttpRequests(options, fileHashes) {
    if (options.verbose) {
        _utils.logger.info('Performing HTTP requests...');
    }
    var promises = [];
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = fileHashes[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var fileWithHash = _step4.value;

            if (fileWithHash.subtitlesPresent) continue;
            if (options.verbose) {
                _utils.logger.info('Downloading subtitles for file [%s] with hash [%s]', fileWithHash.file, fileWithHash.hash);
            }
            var httpRequest = new _utils.HttpRequest(options, fileWithHash);
            promises.push(httpRequest.request());
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }

    return Promise.all(promises);
};

/**
 * Parse HTTP response from Napiprojekt server. Format XML response to JSON and save subtitles to file.
 * @param {NapijsOptions} options
 * @param filesWithHash
 * @returns {Promise}
 */
var parseHttpResponse = function parseHttpResponse(options, filesWithHash) {
    if (options.verbose) {
        _utils.logger.info('Parsing HTTP responses...');
    }
    var promises = [];
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
        for (var _iterator5 = filesWithHash[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
            var fileWithHash = _step5.value;

            if (fileWithHash.subtitlesPresent) continue;
            var p = (0, _utils.XML2JSON)(options, fileWithHash).catch(function (err) {
                if (options.verbose) {
                    _utils.logger.info('Error in HTTP response: ', err.err);
                }
                return err.fileWithHash;
            });
            promises.push(p);
        }
    } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
            }
        } finally {
            if (_didIteratorError5) {
                throw _iteratorError5;
            }
        }
    }

    return Promise.all(promises);
};

/**
 * Main download function. Responsible for downloading subtitles from Napiprojekt server
 * Steps:
 * - find files provided in options
 * - generate partial MD5 hash for each file
 * - check if subtitles already exists. Rename old subtitles file if one exist
 * - call Napiprojekt server
 * - parse XML response to JSON format and save subtitles to disk
 *
 * @param {NapijsOptions} o options
 * @returns {Promise}
 */
function download(o) {
    return new Promise(function (resolve, reject) {
        var promise;
        if (o.file.length > 0) {
            promise = generateFileHashes(o, [o.file]).catch(function (err) {
                reject(err);
            });
        } else {
            promise = (0, _utils.glob)(o.files).then(function (files) {
                return generateFileHashes(o, files);
            }).catch(function (err) {
                reject(err);
            });
        }
        promise.then(function (fileHashes) {
            return checkSubtitleFiles(o, fileHashes);
        }).then(function (fileHashes) {
            return makeHttpRequests(o, fileHashes);
        }).then(function (filesWithHash) {
            return parseHttpResponse(o, filesWithHash);
        }).then(function (responses) {
            resolve(responses);
        }).catch(function (err) {
            reject(err);
        });
    });
}

exports.default = download;