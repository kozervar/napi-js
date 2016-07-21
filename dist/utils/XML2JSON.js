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
            var file;
            var subs;
            var b;

            (function () {
                var subsFileName = _path2.default.join(_path2.default.dirname(fileWithHash.file), _path2.default.basename(fileWithHash.file, _path2.default.extname(fileWithHash.file)) + '.txt');
                if (options.verbose) {
                    _index.logger.info('Saving file [ %s ]', subsFileName);
                }

                fileWithHash.subtitlesPresent = true;

                file = _fs2.default.createWriteStream(subsFileName);
                subs = result.result.subtitles[0];


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
                b = new Buffer(subs.content[0], 'base64');

                file.write(b.toString('UTF-8'));
                file.end();
            })();
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
//# sourceMappingURL=data:application/json;base64,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RCxNQUFqRCxDQUFuQjtBQUFBLEtBQVosQ0FBUDtBQUNILEMiLCJmaWxlIjoidXRpbHMvWE1MMkpTT04uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0xOC5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgeG1sMmpzIGZyb20gJ3htbDJqcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5cbmZ1bmN0aW9uIHBhcnNlQW5kU2F2ZUZpbGUob3B0aW9ucywgZmlsZVdpdGhIYXNoLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdQcm9jZXNzaW5nIGZpbGU6ICVzJywgZmlsZVdpdGhIYXNoLmZpbGUpO1xuICAgIH1cbiAgICB4bWwyanMucGFyc2VTdHJpbmcoZmlsZVdpdGhIYXNoLnJlc3BvbnNlU3RyaW5nLCAoZXJyLCByZXN1bHQpPT4ge1xuICAgICAgICBmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudCA9IGZhbHNlO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtlcnI6IGVyciwgZmlsZVdpdGhIYXNoOiBmaWxlV2l0aEhhc2h9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3VsdCB8fCAhcmVzdWx0LnJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7ZXJyOiAnTm8gTmFwaXByb2pla3QgcmVzcG9uc2UgZm9yIGZpbGUgJyArIGZpbGVXaXRoSGFzaC5maWxlLCBmaWxlV2l0aEhhc2g6IGZpbGVXaXRoSGFzaH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0LnJlc3VsdC5zdWJ0aXRsZXMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3Qoe2VycjogJ05vIHN1YnRpdGxlcyBmb3VuZCBpbiByZXNwb25zZSBmb3IgZmlsZSAnICsgZmlsZVdpdGhIYXNoLmZpbGUsIGZpbGVXaXRoSGFzaDogZmlsZVdpdGhIYXNofSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQuc3VidGl0bGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic0ZpbGVOYW1lID0gcGF0aC5qb2luKFxuICAgICAgICAgICAgICAgIHBhdGguZGlybmFtZShmaWxlV2l0aEhhc2guZmlsZSksXG4gICAgICAgICAgICAgICAgcGF0aC5iYXNlbmFtZShmaWxlV2l0aEhhc2guZmlsZSwgcGF0aC5leHRuYW1lKGZpbGVXaXRoSGFzaC5maWxlKSkgKyAnLnR4dCdcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1NhdmluZyBmaWxlIFsgJXMgXScsIHN1YnNGaWxlTmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbGVXaXRoSGFzaC5zdWJ0aXRsZXNQcmVzZW50ID0gdHJ1ZTtcblxuICAgICAgICAgICAgdmFyIGZpbGUgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShzdWJzRmlsZU5hbWUpO1xuICAgICAgICAgICAgdmFyIHN1YnMgPSByZXN1bHQucmVzdWx0LnN1YnRpdGxlc1swXTtcblxuICAgICAgICAgICAgZmlsZS5vbignZXJyb3InLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHtlcnI6IGVyciwgZmlsZVdpdGhIYXNoOiBmaWxlV2l0aEhhc2h9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZmlsZS5vbignZmluaXNoJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1N1YnRpdGxlcyBmaWxlIFsgJXMgXSBzYXZlZCBzdWNjZXNzZnVsbHknLCBzdWJzRmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaWxlV2l0aEhhc2guc3VidGl0bGVGaWxlTmFtZSA9IHN1YnNGaWxlTmFtZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZpbGVXaXRoSGFzaCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBiID0gbmV3IEJ1ZmZlcihzdWJzLmNvbnRlbnRbMF0sICdiYXNlNjQnKTtcbiAgICAgICAgICAgIGZpbGUud3JpdGUoYi50b1N0cmluZygnVVRGLTgnKSk7XG4gICAgICAgICAgICBmaWxlLmVuZCgpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtlcnI6ICdXcm9uZyBudW1iZXIgb2Ygc3VidGl0bGVzLiBTaG91bGQgYmUgMScsIGZpbGVXaXRoSGFzaDogZmlsZVdpdGhIYXNofSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKG9wdGlvbnMsIGZpbGVXaXRoSGFzaCkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+cGFyc2VBbmRTYXZlRmlsZShvcHRpb25zLCBmaWxlV2l0aEhhc2gsIHJlc29sdmUsIHJlamVjdCkpO1xufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
