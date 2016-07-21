/**
 * Created by kozervar on 2016-07-19.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./utils');

var generateFileHashes = function generateFileHashes(options, files) {
    if (options.verbose) {
        _utils.logger.info('--------------------------------');
        _utils.logger.info('Generate file hash');
        _utils.logger.info('--------------------------------');
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

var checkSubtitleFiles = function checkSubtitleFiles(options, fileWithHashes) {
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

var makeHttpRequests = function makeHttpRequests(options, fileHashes) {
    if (options.verbose) {
        _utils.logger.info('--------------------------------');
        _utils.logger.info('Make HTTP request');
        _utils.logger.info('--------------------------------');
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

var parseHttpResponse = function parseHttpResponse(options, filesWithHash) {
    if (options.verbose) {
        _utils.logger.info('--------------------------------');
        _utils.logger.info('Parse HTTP response');
        _utils.logger.info('--------------------------------');
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
//# sourceMappingURL=data:application/json;base64,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LEtBQXRCLENBQVY7QUFBQSxhQURBLEVBRUwsS0FGSyxDQUVDLGVBQU07QUFDVCx1QkFBTyxHQUFQO0FBQ0gsYUFKSyxDQUFWO0FBS0g7QUFDRCxnQkFDSyxJQURMLENBQ1UsVUFBQyxVQUFEO0FBQUEsbUJBQWUsbUJBQW1CLENBQW5CLEVBQXNCLFVBQXRCLENBQWY7QUFBQSxTQURWLEVBRUssSUFGTCxDQUVVLFVBQUMsVUFBRDtBQUFBLG1CQUFlLGlCQUFpQixDQUFqQixFQUFvQixVQUFwQixDQUFmO0FBQUEsU0FGVixFQUdLLElBSEwsQ0FHVSxVQUFDLGFBQUQ7QUFBQSxtQkFBa0Isa0JBQWtCLENBQWxCLEVBQXFCLGFBQXJCLENBQWxCO0FBQUEsU0FIVixFQUlLLElBSkwsQ0FJVSxVQUFDLFNBQUQsRUFBYztBQUNoQixvQkFBUSxTQUFSO0FBQ0gsU0FOTCxFQU9LLEtBUEwsQ0FPVyxlQUFNO0FBQ1QsbUJBQU8sR0FBUDtBQUNILFNBVEw7QUFVSCxLQXhCTSxDQUFQO0FBeUJIOztrQkFFYyxRIiwiZmlsZSI6ImRvd25sb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0xOS5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHsgbG9nZ2VyLCBoYXNoLCBnbG9iLCBIdHRwUmVxdWVzdCwgWE1MMkpTT04sIGZpbGVNYW5hZ2VyIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG52YXIgZ2VuZXJhdGVGaWxlSGFzaGVzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVzKSB7XHJcbiAgICBpZihvcHRpb25zLnZlcmJvc2UpIHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICBsb2dnZXIuaW5mbygnR2VuZXJhdGUgZmlsZSBoYXNoJyk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdObyBmaWxlcyBmb3VuZCEnKTtcclxuICAgIGVsc2UgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdGaWxlcyBmb3VuZDogJyk7XHJcbiAgICAgICAgZm9yICh2YXIgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbyhmaWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKHZhciBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChoYXNoKGZpbGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn07XHJcblxyXG52YXIgY2hlY2tTdWJ0aXRsZUZpbGVzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVXaXRoSGFzaGVzKSB7XHJcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGZpbGUgb2YgZmlsZVdpdGhIYXNoZXMpIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGZpbGVNYW5hZ2VyLnN1YnRpdGxlRXhpc3RzKG9wdGlvbnMsIGZpbGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbn07XHJcblxyXG52YXIgbWFrZUh0dHBSZXF1ZXN0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBmaWxlSGFzaGVzKSB7XHJcbiAgICBpZihvcHRpb25zLnZlcmJvc2UpIHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgICAgICBsb2dnZXIuaW5mbygnTWFrZSBIVFRQIHJlcXVlc3QnKTtcclxuICAgICAgICBsb2dnZXIuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIH1cclxuICAgIHZhciBwcm9taXNlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgZmlsZVdpdGhIYXNoIG9mIGZpbGVIYXNoZXMpIHtcclxuICAgICAgICBpZihmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudClcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnRG93bmxvYWRpbmcgc3VidGl0bGVzIGZvciBmaWxlIFslc10gd2l0aCBoYXNoIFslc10nLCBmaWxlV2l0aEhhc2guZmlsZSwgZmlsZVdpdGhIYXNoLmhhc2gpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cFJlcXVlc3Qob3B0aW9ucywgZmlsZVdpdGhIYXNoKTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGh0dHBSZXF1ZXN0LnJlcXVlc3QoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59O1xyXG5cclxudmFyIHBhcnNlSHR0cFJlc3BvbnNlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVzV2l0aEhhc2gpIHtcclxuICAgIGlmKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdQYXJzZSBIVFRQIHJlc3BvbnNlJyk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGZpbGVXaXRoSGFzaCBvZiBmaWxlc1dpdGhIYXNoKSB7XHJcbiAgICAgICAgaWYoZmlsZVdpdGhIYXNoLnN1YnRpdGxlc1ByZXNlbnQpXHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIHZhciBwID0gWE1MMkpTT04ob3B0aW9ucywgZmlsZVdpdGhIYXNoKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIHtcclxuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdFcnJvciBpbiBIVFRQIHJlc3BvbnNlOiAnLCBlcnIuZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZXJyLmZpbGVXaXRoSGFzaDtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGRvd25sb2FkKG8pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdmFyIHByb21pc2U7XHJcbiAgICAgICAgaWYoby5maWxlLmxlbmd0aCA+IDAgKSB7XHJcbiAgICAgICAgICAgIHByb21pc2UgPSBnZW5lcmF0ZUZpbGVIYXNoZXMobywgW28uZmlsZV0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IGdsb2Ioby5maWxlcylcclxuICAgICAgICAgICAgICAgIC50aGVuKChmaWxlcyk9PiBnZW5lcmF0ZUZpbGVIYXNoZXMobywgZmlsZXMpKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycj0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9taXNlXHJcbiAgICAgICAgICAgIC50aGVuKChmaWxlSGFzaGVzKT0+IGNoZWNrU3VidGl0bGVGaWxlcyhvLCBmaWxlSGFzaGVzKSlcclxuICAgICAgICAgICAgLnRoZW4oKGZpbGVIYXNoZXMpPT4gbWFrZUh0dHBSZXF1ZXN0cyhvLCBmaWxlSGFzaGVzKSlcclxuICAgICAgICAgICAgLnRoZW4oKGZpbGVzV2l0aEhhc2gpPT4gcGFyc2VIdHRwUmVzcG9uc2UobywgZmlsZXNXaXRoSGFzaCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvd25sb2FkIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
