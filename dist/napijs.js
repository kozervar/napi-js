/**
 * Created by kozervar on 2016-07-21.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (options) {
    return new Promise(function (resolve, reject) {
        return napijs(options, resolve, reject);
    });
};

var _utils = require('./utils');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _download = require('./download');

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Handle method for subtitles downloader
 * @param {NapijsOptions} options
 * @param {Function} resolve
 * @param {Function} reject
 */
function napijs(options, resolve, reject) {
    if (_underscore2.default.isUndefined(options)) {
        return reject('Could not find options! Exiting...');
    }
    if (options.verbose) {
        _utils.logger.info('Starting with following options: ', options);
    }
    (0, _download2.default)(options).then(function (response) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var r = _step.value;

                if (!r.subtitlesPresent) {
                    _utils.logger.info('Could not download subtitles for file %s', r.file);
                }
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

        if (options.verbose) {
            _utils.logger.info('Done');
        }
        resolve(response);
    }).catch(function (err) {
        reject(err);
    });
}

/**
 * Main napijs method
 * @param {NapijsOptions} options
 * @returns {Promise}
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hcGlqcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUlBOzs7Ozs7a0JBd0NlLFVBQVUsT0FBVixFQUFtQjtBQUM5QixXQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVY7QUFBQSxlQUFtQixPQUFPLE9BQVAsRUFBZ0IsT0FBaEIsRUFBeUIsTUFBekIsQ0FBbkI7QUFBQSxLQUFaLENBQVA7QUFDSCxDOztBQXpDRDs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7O0FBTUEsU0FBUyxNQUFULENBQWdCLE9BQWhCLEVBQXlCLE9BQXpCLEVBQWtDLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQUkscUJBQUUsV0FBRixDQUFjLE9BQWQsQ0FBSixFQUE0QjtBQUN4QixlQUFPLE9BQU8sb0NBQVAsQ0FBUDtBQUNIO0FBQ0QsUUFBRyxRQUFRLE9BQVgsRUFBb0I7QUFDaEIsc0JBQU8sSUFBUCxDQUFZLG1DQUFaLEVBQWlELE9BQWpEO0FBQ0g7QUFDRCw0QkFBUyxPQUFULEVBQ0ssSUFETCxDQUNVLFVBQUMsUUFBRCxFQUFhO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ2YsaUNBQWEsUUFBYiw4SEFBdUI7QUFBQSxvQkFBZixDQUFlOztBQUNuQixvQkFBRyxDQUFDLEVBQUUsZ0JBQU4sRUFBd0I7QUFDcEIsa0NBQU8sSUFBUCxDQUFZLDBDQUFaLEVBQXdELEVBQUUsSUFBMUQ7QUFDSDtBQUNKO0FBTGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZixZQUFJLFFBQVEsT0FBWixFQUFxQjtBQUNqQiwwQkFBTyxJQUFQLENBQVksTUFBWjtBQUNIO0FBQ0QsZ0JBQVEsUUFBUjtBQUNILEtBWEwsRUFZSyxLQVpMLENBWVcsVUFBQyxHQUFELEVBQVE7QUFDWCxlQUFPLEdBQVA7QUFDSCxLQWRMO0FBZUg7O0FBRUQiLCJmaWxlIjoibmFwaWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0yMS5cclxuICovXHJcblxyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IGRvd25sb2FkIGZyb20gJy4vZG93bmxvYWQnO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBtZXRob2QgZm9yIHN1YnRpdGxlcyBkb3dubG9hZGVyXHJcbiAqIEBwYXJhbSB7TmFwaWpzT3B0aW9uc30gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdFxyXG4gKi9cclxuZnVuY3Rpb24gbmFwaWpzKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgaWYgKF8uaXNVbmRlZmluZWQob3B0aW9ucykpIHtcclxuICAgICAgICByZXR1cm4gcmVqZWN0KCdDb3VsZCBub3QgZmluZCBvcHRpb25zISBFeGl0aW5nLi4uJyk7XHJcbiAgICB9XHJcbiAgICBpZihvcHRpb25zLnZlcmJvc2UpIHtcclxuICAgICAgICBsb2dnZXIuaW5mbygnU3RhcnRpbmcgd2l0aCBmb2xsb3dpbmcgb3B0aW9uczogJywgb3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBkb3dubG9hZChvcHRpb25zKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSk9PiB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgciBvZiByZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYoIXIuc3VidGl0bGVzUHJlc2VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdDb3VsZCBub3QgZG93bmxvYWQgc3VidGl0bGVzIGZvciBmaWxlICVzJywgci5maWxlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnRG9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT4ge1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIE1haW4gbmFwaWpzIG1ldGhvZFxyXG4gKiBAcGFyYW0ge05hcGlqc09wdGlvbnN9IG9wdGlvbnNcclxuICogQHJldHVybnMge1Byb21pc2V9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT5uYXBpanMob3B0aW9ucywgcmVzb2x2ZSwgcmVqZWN0KSk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
