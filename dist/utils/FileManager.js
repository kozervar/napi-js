/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./index');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fileExists = function fileExists(filename) {
    try {
        _fs2.default.statSync(filename);
        return true;
    } catch (e) {
        return false;
    }
};

function checkIfFileExists(options, fileWithHash, resolve, reject) {
    var subsFileName = _path2.default.join(_path2.default.dirname(fileWithHash.file), _path2.default.basename(fileWithHash.file, _path2.default.extname(fileWithHash.file)) + options.extension);
    if (fileExists(subsFileName)) {
        if (!options.overwrite) {
            if (options.verbose) {
                _index.logger.info('File [ %s ] exist. Nothing to do!', subsFileName);
            }
            fileWithHash.subtitlesPresent = true;
            fileWithHash.subtitleFileName = subsFileName;
            return resolve(fileWithHash);
        }

        var current_date = new Date().valueOf().toString();
        var random = Math.random().toString();
        var digest = _crypto2.default.createHash('sha1').update(current_date + random).digest('hex');
        var modifiedSubsFileName = _path2.default.join(_path2.default.dirname(fileWithHash.file), _path2.default.basename(fileWithHash.file, _path2.default.extname(fileWithHash.file)) + '-' + digest.substr(0, 4) + options.extension);

        if (options.verbose) {
            _index.logger.info('Renaming file [ %s ] to [ %s }', subsFileName, modifiedSubsFileName);
        }
        _fs2.default.renameSync(subsFileName, modifiedSubsFileName);
    }
    return resolve(fileWithHash);
}

function fileManager(options, fileWithHash, subtitles, resolve, reject) {
    if (fileWithHash.subtitlesPresent) {
        resolve(fileWithHash);
    }
    var subsFileName = _path2.default.join(_path2.default.dirname(fileWithHash.file), _path2.default.basename(fileWithHash.file, _path2.default.extname(fileWithHash.file)) + options.extension);

    if (options.verbose) {
        _index.logger.info('Saving file [ %s ]', subsFileName);
    }

    fileWithHash.subtitlesPresent = true;

    var file = _fs2.default.createWriteStream(subsFileName);

    file.on('error', function (err) {
        reject({ err: err, fileWithHash: fileWithHash });
    });
    file.on('finish', function () {
        if (options.verbose) {
            _index.logger.info('Subtitles file [ %s ] saved successfully', subsFileName);
        }
        fileWithHash.subtitleFileName = subsFileName;
        resolve(fileWithHash);
    });
    var b = new Buffer(subtitles.content[0], 'base64');
    file.write(b.toString('UTF-8'));
    file.end();
}

var saveSubtitles = function saveSubtitles(options, fileWithHash, subtitles) {
    return new Promise(function (resolve, reject) {
        return fileManager(options, fileWithHash, subtitles, resolve, reject);
    });
};
var subtitleExists = function subtitleExists(options, fileWithHash) {
    return new Promise(function (resolve, reject) {
        return checkIfFileExists(options, fileWithHash, resolve, reject);
    });
};

exports.default = {
    saveSubtitles: saveSubtitles,
    subtitleExists: subtitleExists
};