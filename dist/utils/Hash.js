/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (file) {
    return new Promise(function (resolve, reject) {
        var stats = _fs2.default.statSync(file);
        var fileSizeInBytes = stats['size'];
        var fileWithHash = new _NapijsFile2.default(file);
        (0, _md5PartFile2.default)(file, 0, 10485760, function (err, hash) {
            if (err) {
                reject('Something went wrong during md5 hash calculation for file ' + file);
            } else {
                fileWithHash.hash = hash;
                fileWithHash.bytes = fileSizeInBytes;
                resolve(fileWithHash);
            }
        });
    });
};

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _index = require('./index');

var _md5PartFile = require('md5-part-file');

var _md5PartFile2 = _interopRequireDefault(_md5PartFile);

var _NapijsFile = require('./../NapijsFile');

var _NapijsFile2 = _interopRequireDefault(_NapijsFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }