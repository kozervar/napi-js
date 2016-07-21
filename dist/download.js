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

var makeHttpRequests = function makeHttpRequests(options, fileHashes) {
    if (options.verbose) {
        _utils.logger.info('--------------------------------');
        _utils.logger.info('Make HTTP request');
        _utils.logger.info('--------------------------------');
    }
    var promises = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = fileHashes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var fh = _step3.value;

            if (options.verbose) {
                _utils.logger.info('Downloading subtitles for file [%s] with hash [%s]', fh.file, fh.hash);
            }
            var httpRequest = new _utils.HttpRequest(options, fh);
            promises.push(httpRequest.request());
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

var parseHttpResponse = function parseHttpResponse(options, filesWithHash) {
    if (options.verbose) {
        _utils.logger.info('--------------------------------');
        _utils.logger.info('Parse HTTP response');
        _utils.logger.info('--------------------------------');
    }
    var promises = [];
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = filesWithHash[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var fileWithHash = _step4.value;

            var p = (0, _utils.XML2JSON)(options, fileWithHash).catch(function (err) {
                if (options.verbose) {
                    _utils.logger.info('Error in HTTP response: ', err.err);
                }
                return err.fileWithHash;
            });
            promises.push(p);
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

function download(o) {
    return new Promise(function (resolve, reject) {
        var promise;
        if (o.file.length > 0) {
            promise = generateFileHashes(o, [o.file]);
        } else {
            promise = (0, _utils.glob)(o.files);
        }
        promise.then(function (fileHashes) {
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
//# sourceMappingURL=data:application/json;base64,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LENBQVI7QUFNQSxxQkFBUyxJQUFULENBQWMsQ0FBZDtBQUNIO0FBZnFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZ0J0RCxXQUFPLFFBQVEsR0FBUixDQUFZLFFBQVosQ0FBUDtBQUNILENBakJEOztBQW1CQSxTQUFTLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUI7QUFDakIsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3BDLFlBQUksT0FBSjtBQUNBLFlBQUcsRUFBRSxJQUFGLENBQU8sTUFBUCxHQUFnQixDQUFuQixFQUF1QjtBQUNuQixzQkFBVSxtQkFBbUIsQ0FBbkIsRUFBc0IsQ0FBQyxFQUFFLElBQUgsQ0FBdEIsQ0FBVjtBQUNILFNBRkQsTUFFTztBQUNILHNCQUFVLGlCQUFLLEVBQUUsS0FBUCxDQUFWO0FBQ0g7QUFDRCxnQkFDSyxJQURMLENBQ1UsVUFBQyxVQUFEO0FBQUEsbUJBQWUsaUJBQWlCLENBQWpCLEVBQW9CLFVBQXBCLENBQWY7QUFBQSxTQURWLEVBRUssSUFGTCxDQUVVLFVBQUMsYUFBRDtBQUFBLG1CQUFrQixrQkFBa0IsQ0FBbEIsRUFBcUIsYUFBckIsQ0FBbEI7QUFBQSxTQUZWLEVBR0ssSUFITCxDQUdVLFVBQUMsU0FBRCxFQUFjO0FBQ2hCLG9CQUFRLFNBQVI7QUFDSCxTQUxMLEVBTUssS0FOTCxDQU1XLGVBQU07QUFDVCxtQkFBTyxHQUFQO0FBQ0gsU0FSTDtBQVNILEtBaEJNLENBQVA7QUFpQkg7O2tCQUVjLFEiLCJmaWxlIjoiZG93bmxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTE5LlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBsb2dnZXIsIGhhc2gsIGdsb2IsIEh0dHBSZXF1ZXN0LCBYTUwySlNPTiB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuXHJcbnZhciBnZW5lcmF0ZUZpbGVIYXNoZXMgPSBmdW5jdGlvbiAob3B0aW9ucywgZmlsZXMpIHtcclxuICAgIGlmKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdHZW5lcmF0ZSBmaWxlIGhhc2gnKTtcclxuICAgICAgICBsb2dnZXIuaW5mbygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nKTtcclxuICAgIH1cclxuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ05vIGZpbGVzIGZvdW5kIScpO1xyXG4gICAgZWxzZSBpZiAob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ0ZpbGVzIGZvdW5kOiAnKTtcclxuICAgICAgICBmb3IgKHZhciBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGhhc2goZmlsZSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxufTtcclxuXHJcbnZhciBtYWtlSHR0cFJlcXVlc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVIYXNoZXMpIHtcclxuICAgIGlmKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdNYWtlIEhUVFAgcmVxdWVzdCcpO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgfVxyXG4gICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICBmb3IgKHZhciBmaCBvZiBmaWxlSGFzaGVzKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnRG93bmxvYWRpbmcgc3VidGl0bGVzIGZvciBmaWxlIFslc10gd2l0aCBoYXNoIFslc10nLCBmaC5maWxlLCBmaC5oYXNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBSZXF1ZXN0KG9wdGlvbnMsIGZoKTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKGh0dHBSZXF1ZXN0LnJlcXVlc3QoKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59O1xyXG5cclxudmFyIHBhcnNlSHR0cFJlc3BvbnNlID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVzV2l0aEhhc2gpIHtcclxuICAgIGlmKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdQYXJzZSBIVFRQIHJlc3BvbnNlJyk7XHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XHJcbiAgICB9XHJcbiAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgIGZvciAodmFyIGZpbGVXaXRoSGFzaCBvZiBmaWxlc1dpdGhIYXNoKSB7XHJcbiAgICAgICAgdmFyIHAgPSBYTUwySlNPTihvcHRpb25zLCBmaWxlV2l0aEhhc2gpLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0Vycm9yIGluIEhUVFAgcmVzcG9uc2U6ICcsIGVyci5lcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlcnIuZmlsZVdpdGhIYXNoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2gocCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gZG93bmxvYWQobykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICB2YXIgcHJvbWlzZTtcclxuICAgICAgICBpZihvLmZpbGUubGVuZ3RoID4gMCApIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IGdlbmVyYXRlRmlsZUhhc2hlcyhvLCBbby5maWxlXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IGdsb2Ioby5maWxlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb21pc2VcclxuICAgICAgICAgICAgLnRoZW4oKGZpbGVIYXNoZXMpPT4gbWFrZUh0dHBSZXF1ZXN0cyhvLCBmaWxlSGFzaGVzKSlcclxuICAgICAgICAgICAgLnRoZW4oKGZpbGVzV2l0aEhhc2gpPT4gcGFyc2VIdHRwUmVzcG9uc2UobywgZmlsZXNXaXRoSGFzaCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZXMpPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZXMpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRvd25sb2FkIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
