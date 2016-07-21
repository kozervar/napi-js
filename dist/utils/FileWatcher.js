/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    var paths = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = options.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;

            paths.push(options.watchPath + '/' + p);
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

    if (options.verbose) _2.logger.info('Paths: %s', paths);
    _2.logger.info('Watching...');

    var watcher = _chokidar2.default.watch(paths, {
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: true
    });

    watcher.on('add', function (fp) {
        var opts = _underscore2.default.clone(options);
        opts.file = fp;
        if (opts.verbose) _2.logger.info('File %s has been ADDED', fp);
        (0, _napijs2.default)(opts).then(function () {}).catch(function (err) {
            _2.logger.error('Could not download subtitles for file ' + fp, err);
        });
    }).on('change', function (fp) {
        var opts = _underscore2.default.clone(options);
        opts.file = fp;
        if (opts.verbose) _2.logger.info('File %s has been CHANGED', fp);
        (0, _napijs2.default)(opts).then(function () {}).catch(function (err) {
            _2.logger.error('Could not download subtitles for file ' + fp, err);
        });
    })
    //.on('unlink', fp => logger.info('File ${fp} has been REMOVED'))
    .on('ready', function () {
        if (options.verbose) _2.logger.info('Initial scan complete. Ready for changes');
    });

    return watcher;
};

var _napijs = require('./../napijs');

var _napijs2 = _interopRequireDefault(_napijs);

var _2 = require('./');

var _chokidar = require('chokidar');

var _chokidar2 = _interopRequireDefault(_chokidar);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0ZpbGVXYXRjaGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7Ozs7O2tCQVFlLFVBQVUsT0FBVixFQUFtQjtBQUM5QixRQUFJLFFBQVEsRUFBWjtBQUQ4QjtBQUFBO0FBQUE7O0FBQUE7QUFFOUIsNkJBQWMsUUFBUSxLQUF0Qiw4SEFBNkI7QUFBQSxnQkFBcEIsQ0FBb0I7O0FBQ3pCLGtCQUFNLElBQU4sQ0FBVyxRQUFRLFNBQVIsR0FBb0IsR0FBcEIsR0FBMEIsQ0FBckM7QUFDSDtBQUo2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUs5QixRQUFJLFFBQVEsT0FBWixFQUNJLFVBQU8sSUFBUCxDQUFZLFdBQVosRUFBeUIsS0FBekI7QUFDSixjQUFPLElBQVAsQ0FBWSxhQUFaOztBQUVBLFFBQUksVUFBVSxtQkFBUyxLQUFULENBQWUsS0FBZixFQUFzQjtBQUNoQyxvQkFBWSxJQURvQjtBQUVoQyx1QkFBZSxJQUZpQjtBQUdoQywwQkFBa0I7QUFIYyxLQUF0QixDQUFkOztBQU1BLFlBQ0ssRUFETCxDQUNRLEtBRFIsRUFDZSxjQUFNO0FBQ2IsWUFBSSxPQUFPLHFCQUFFLEtBQUYsQ0FBUSxPQUFSLENBQVg7QUFDQSxhQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsWUFBSSxLQUFLLE9BQVQsRUFDSSxVQUFPLElBQVAsQ0FBWSx3QkFBWixFQUFzQyxFQUF0QztBQUNKLDhCQUFPLElBQVAsRUFDSyxJQURMLENBQ1UsWUFBSyxDQUNWLENBRkwsRUFHSyxLQUhMLENBR1csVUFBQyxHQUFELEVBQVE7QUFDWCxzQkFBTyxLQUFQLENBQWEsMkNBQTJDLEVBQXhELEVBQTRELEdBQTVEO0FBQ0gsU0FMTDtBQU1ILEtBWkwsRUFhSyxFQWJMLENBYVEsUUFiUixFQWFrQixjQUFNO0FBQ2hCLFlBQUksT0FBTyxxQkFBRSxLQUFGLENBQVEsT0FBUixDQUFYO0FBQ0EsYUFBSyxJQUFMLEdBQVksRUFBWjtBQUNBLFlBQUksS0FBSyxPQUFULEVBQ0ksVUFBTyxJQUFQLENBQVksMEJBQVosRUFBd0MsRUFBeEM7QUFDSiw4QkFBTyxJQUFQLEVBQ0ssSUFETCxDQUNVLFlBQUssQ0FDVixDQUZMLEVBR0ssS0FITCxDQUdXLFVBQUMsR0FBRCxFQUFRO0FBQ1gsc0JBQU8sS0FBUCxDQUFhLDJDQUEyQyxFQUF4RCxFQUE0RCxHQUE1RDtBQUNILFNBTEw7QUFNSCxLQXhCTDtBQXlCSTtBQXpCSixLQTBCSyxFQTFCTCxDQTBCUSxPQTFCUixFQTBCaUIsWUFBTTtBQUNmLFlBQUksUUFBUSxPQUFaLEVBQ0ksVUFBTyxJQUFQLENBQVksMENBQVo7QUFDUCxLQTdCTDs7QUErQkEsV0FBTyxPQUFQO0FBQ0gsQzs7QUF0REQ7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJ1dGlscy9GaWxlV2F0Y2hlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCBuYXBpanMgZnJvbSAnLi8uLi9uYXBpanMnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLyc7XHJcbmltcG9ydCBjaG9raWRhciBmcm9tICdjaG9raWRhcic7XHJcbmltcG9ydCBmcyBmcm9tICdmcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICB2YXIgcGF0aHMgPSBbXTtcclxuICAgIGZvciAodmFyIHAgb2Ygb3B0aW9ucy5maWxlcykge1xyXG4gICAgICAgIHBhdGhzLnB1c2gob3B0aW9ucy53YXRjaFBhdGggKyAnLycgKyBwKTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLnZlcmJvc2UpXHJcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1BhdGhzOiAlcycsIHBhdGhzKTtcclxuICAgIGxvZ2dlci5pbmZvKCdXYXRjaGluZy4uLicpO1xyXG5cclxuICAgIHZhciB3YXRjaGVyID0gY2hva2lkYXIud2F0Y2gocGF0aHMsIHtcclxuICAgICAgICBwZXJzaXN0ZW50OiB0cnVlLFxyXG4gICAgICAgIGlnbm9yZUluaXRpYWw6IHRydWUsXHJcbiAgICAgICAgYXdhaXRXcml0ZUZpbmlzaDogdHJ1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgd2F0Y2hlclxyXG4gICAgICAgIC5vbignYWRkJywgZnAgPT4ge1xyXG4gICAgICAgICAgICB2YXIgb3B0cyA9IF8uY2xvbmUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIG9wdHMuZmlsZSA9IGZwO1xyXG4gICAgICAgICAgICBpZiAob3B0cy52ZXJib3NlKVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0ZpbGUgJXMgaGFzIGJlZW4gQURERUQnLCBmcCk7XHJcbiAgICAgICAgICAgIG5hcGlqcyhvcHRzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCk9PiB7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcignQ291bGQgbm90IGRvd25sb2FkIHN1YnRpdGxlcyBmb3IgZmlsZSAnICsgZnAsIGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignY2hhbmdlJywgZnAgPT4ge1xyXG4gICAgICAgICAgICB2YXIgb3B0cyA9IF8uY2xvbmUob3B0aW9ucyk7XHJcbiAgICAgICAgICAgIG9wdHMuZmlsZSA9IGZwO1xyXG4gICAgICAgICAgICBpZiAob3B0cy52ZXJib3NlKVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0ZpbGUgJXMgaGFzIGJlZW4gQ0hBTkdFRCcsIGZwKTtcclxuICAgICAgICAgICAgbmFwaWpzKG9wdHMpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKT0+IHtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycik9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKCdDb3VsZCBub3QgZG93bmxvYWQgc3VidGl0bGVzIGZvciBmaWxlICcgKyBmcCwgZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLy8ub24oJ3VubGluaycsIGZwID0+IGxvZ2dlci5pbmZvKCdGaWxlICR7ZnB9IGhhcyBiZWVuIFJFTU9WRUQnKSlcclxuICAgICAgICAub24oJ3JlYWR5JywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKVxyXG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ0luaXRpYWwgc2NhbiBjb21wbGV0ZS4gUmVhZHkgZm9yIGNoYW5nZXMnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gd2F0Y2hlcjtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
