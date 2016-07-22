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
//# sourceMappingURL=data:application/json;base64,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LEdBQVA7QUFDSCxhQUpLLENBQVY7QUFLSDtBQUNELGdCQUNLLElBREwsQ0FDVSxVQUFDLFVBQUQ7QUFBQSxtQkFBZSxtQkFBbUIsQ0FBbkIsRUFBc0IsVUFBdEIsQ0FBZjtBQUFBLFNBRFYsRUFFSyxJQUZMLENBRVUsVUFBQyxVQUFEO0FBQUEsbUJBQWUsaUJBQWlCLENBQWpCLEVBQW9CLFVBQXBCLENBQWY7QUFBQSxTQUZWLEVBR0ssSUFITCxDQUdVLFVBQUMsYUFBRDtBQUFBLG1CQUFrQixrQkFBa0IsQ0FBbEIsRUFBcUIsYUFBckIsQ0FBbEI7QUFBQSxTQUhWLEVBSUssSUFKTCxDQUlVLFVBQUMsU0FBRCxFQUFjO0FBQ2hCLG9CQUFRLFNBQVI7QUFDSCxTQU5MLEVBT0ssS0FQTCxDQU9XLGVBQU07QUFDVCxtQkFBTyxHQUFQO0FBQ0gsU0FUTDtBQVVILEtBeEJNLENBQVA7QUF5Qkg7O2tCQUVjLFEiLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTE5LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBsb2dnZXIsIGhhc2gsIGdsb2IsIEh0dHBSZXF1ZXN0LCBYTUwySlNPTiwgZmlsZU1hbmFnZXIgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZSBNRDUgcGFydGlhbCBoYXNoIGZvciBwcm92aWRlZCBmaWxlc1xyXG4gKiBAcGFyYW0ge05hcGlqc09wdGlvbnN9IG9wdGlvbnNcclxuICogQHBhcmFtIGZpbGVzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxudmFyIGdlbmVyYXRlRmlsZUhhc2hlcyA9IGZ1bmN0aW9uIChvcHRpb25zLCBmaWxlcykge1xyXG4gICAgaWYob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0dlbmVyYXRpbmcgZmlsZXMgaGFzaC4uLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICBsb2dnZXIuaW5mbygnTm8gZmlsZXMgZm91bmQhJyk7XHJcbiAgICBlbHNlIGlmIChvcHRpb25zLnZlcmJvc2UpIHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnRmlsZXMgZm91bmQ6ICcpO1xyXG4gICAgICAgIGZvciAodmFyIGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oZmlsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goaGFzaChmaWxlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59O1xyXG4vKipcclxuICogQ2hlY2sgaWYgZmlsZXMgZXhpc3QuIElmIC0tc2F2ZSBmbGFnIGlzIG9uIHRoZW4gcmVuYW1lIGV4aXN0aW5nIGZpbGVcclxuICogQHBhcmFtIHtOYXBpanNPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSBmaWxlV2l0aEhhc2hlc1xyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcbnZhciBjaGVja1N1YnRpdGxlRmlsZXMgPSBmdW5jdGlvbiAob3B0aW9ucywgZmlsZVdpdGhIYXNoZXMpIHtcclxuICAgIGlmKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdDaGVja2luZyBleGlzdGluZyBzdWJ0aXRsZXMuLi4nKTtcclxuICAgIH1cclxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgZmlsZSBvZiBmaWxlV2l0aEhhc2hlcykge1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goZmlsZU1hbmFnZXIuc3VidGl0bGVFeGlzdHMob3B0aW9ucywgZmlsZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQZXJmb3JtIEhUVFAgcmVxdWVzdCB0byBOYXBpcHJvamVrdCBzZXJ2ZXJcclxuICogQHBhcmFtIHtOYXBpanNPcHRpb25zfSBvcHRpb25zXHJcbiAqIEBwYXJhbSBmaWxlSGFzaGVzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxudmFyIG1ha2VIdHRwUmVxdWVzdHMgPSBmdW5jdGlvbiAob3B0aW9ucywgZmlsZUhhc2hlcykge1xyXG4gICAgaWYob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1BlcmZvcm1pbmcgSFRUUCByZXF1ZXN0cy4uLicpO1xyXG4gICAgfVxyXG4gICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKHZhciBmaWxlV2l0aEhhc2ggb2YgZmlsZUhhc2hlcykge1xyXG4gICAgICAgIGlmKGZpbGVXaXRoSGFzaC5zdWJ0aXRsZXNQcmVzZW50KVxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdEb3dubG9hZGluZyBzdWJ0aXRsZXMgZm9yIGZpbGUgWyVzXSB3aXRoIGhhc2ggWyVzXScsIGZpbGVXaXRoSGFzaC5maWxlLCBmaWxlV2l0aEhhc2guaGFzaCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwUmVxdWVzdChvcHRpb25zLCBmaWxlV2l0aEhhc2gpO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goaHR0cFJlcXVlc3QucmVxdWVzdCgpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn07XHJcblxyXG4vKipcclxuICogUGFyc2UgSFRUUCByZXNwb25zZSBmcm9tIE5hcGlwcm9qZWt0IHNlcnZlci4gRm9ybWF0IFhNTCByZXNwb25zZSB0byBKU09OIGFuZCBzYXZlIHN1YnRpdGxlcyB0byBmaWxlLlxyXG4gKiBAcGFyYW0ge05hcGlqc09wdGlvbnN9IG9wdGlvbnNcclxuICogQHBhcmFtIGZpbGVzV2l0aEhhc2hcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG52YXIgcGFyc2VIdHRwUmVzcG9uc2UgPSBmdW5jdGlvbiAob3B0aW9ucywgZmlsZXNXaXRoSGFzaCkge1xyXG4gICAgaWYob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1BhcnNpbmcgSFRUUCByZXNwb25zZXMuLi4nKTtcclxuICAgIH1cclxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgZmlsZVdpdGhIYXNoIG9mIGZpbGVzV2l0aEhhc2gpIHtcclxuICAgICAgICBpZihmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudClcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgdmFyIHAgPSBYTUwySlNPTihvcHRpb25zLCBmaWxlV2l0aEhhc2gpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0Vycm9yIGluIEhUVFAgcmVzcG9uc2U6ICcsIGVyci5lcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnIuZmlsZVdpdGhIYXNoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIE1haW4gZG93bmxvYWQgZnVuY3Rpb24uIFJlc3BvbnNpYmxlIGZvciBkb3dubG9hZGluZyBzdWJ0aXRsZXMgZnJvbSBOYXBpcHJvamVrdCBzZXJ2ZXJcclxuICogU3RlcHM6XHJcbiAqIC0gZmluZCBmaWxlcyBwcm92aWRlZCBpbiBvcHRpb25zXHJcbiAqIC0gZ2VuZXJhdGUgcGFydGlhbCBNRDUgaGFzaCBmb3IgZWFjaCBmaWxlXHJcbiAqIC0gY2hlY2sgaWYgc3VidGl0bGVzIGFscmVhZHkgZXhpc3RzLiBSZW5hbWUgb2xkIHN1YnRpdGxlcyBmaWxlIGlmIG9uZSBleGlzdFxyXG4gKiAtIGNhbGwgTmFwaXByb2pla3Qgc2VydmVyXHJcbiAqIC0gcGFyc2UgWE1MIHJlc3BvbnNlIHRvIEpTT04gZm9ybWF0IGFuZCBzYXZlIHN1YnRpdGxlcyB0byBkaXNrXHJcbiAqXHJcbiAqIEBwYXJhbSB7TmFwaWpzT3B0aW9uc30gbyBvcHRpb25zXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZnVuY3Rpb24gZG93bmxvYWQobykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICBpZihvLmZpbGUubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IGdlbmVyYXRlRmlsZUhhc2hlcyhvLCBbby5maWxlXSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9taXNlID0gZ2xvYihvLmZpbGVzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKGZpbGVzKT0+IGdlbmVyYXRlRmlsZUhhc2hlcyhvLCBmaWxlcykpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKGZpbGVIYXNoZXMpPT4gY2hlY2tTdWJ0aXRsZUZpbGVzKG8sIGZpbGVIYXNoZXMpKVxyXG4gICAgICAgICAgICAudGhlbigoZmlsZUhhc2hlcyk9PiBtYWtlSHR0cFJlcXVlc3RzKG8sIGZpbGVIYXNoZXMpKVxyXG4gICAgICAgICAgICAudGhlbigoZmlsZXNXaXRoSGFzaCk9PiBwYXJzZUh0dHBSZXNwb25zZShvLCBmaWxlc1dpdGhIYXNoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlcyk9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlcyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnI9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZG93bmxvYWQiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
