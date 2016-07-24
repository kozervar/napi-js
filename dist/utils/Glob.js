/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (files, options) {
    options = options ? options : { caseSensitive: false };
    return new Promise(function (resolve, reject) {
        if (_underscore2.default.isUndefined(files)) {
            throw new Error('File list cannot be undefined!');
        }
        if (!_underscore2.default.isArray(files)) {
            files = [files];
        }
        (0, _globby2.default)(files, {
            nocase: options.caseSensitive
        }).then(function (files) {
            return resolve(files);
        }).catch(function (err) {
            return reject(err);
        });
    });
};