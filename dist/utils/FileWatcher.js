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