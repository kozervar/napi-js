/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./index');

var _xml2js = require('xml2js');

var _xml2js2 = _interopRequireDefault(_xml2js);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseAndSaveFile(options, fileWithHash, resolve, reject) {
    if (options.verbose) {
        _index.logger.info('Processing file: %s', fileWithHash.file);
    }
    _xml2js2.default.parseString(fileWithHash.responseString, function (err, result) {
        fileWithHash.subtitlesPresent = false;
        if (err) {
            return reject({ err: err, fileWithHash: fileWithHash });
        }
        if (!result || !result.result) {
            return reject({ err: 'No Napiprojekt response for file ' + fileWithHash.file, fileWithHash: fileWithHash });
        }
        if (!result.result.subtitles) {
            return reject({ err: 'No subtitles found in response for file ' + fileWithHash.file, fileWithHash: fileWithHash });
        }
        if (result.result.subtitles.length === 1) {
            _index.fileManager.saveSubtitles(options, fileWithHash, result.result.subtitles[0]).then(function (response) {
                return resolve(response);
            }).catch(function (err) {
                return reject({ err: err, fileWithHash: fileWithHash });
            });
        } else {
            return reject({ err: 'Wrong number of subtitles. Should be 1', fileWithHash: fileWithHash });
        }
    });
}

exports.default = function (options, fileWithHash) {
    return new Promise(function (resolve, reject) {
        return parseAndSaveFile(options, fileWithHash, resolve, reject);
    });
};