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