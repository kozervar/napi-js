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
                var subsFileName = _path2.default.join(_path2.default.dirname(fileWithHash.file), _path2.default.basename(fileWithHash.file, _path2.default.extname(fileWithHash.file)) + '.' + options.extension);
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
//# sourceMappingURL=data:application/json;base64,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LEVBQXdDLE9BQXhDLEVBQWlELE1BQWpELENBQW5CO0FBQUEsS0FBWixDQUFQO0FBQ0gsQyIsImZpbGUiOiJ1dGlscy9YTUwySlNPTi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTE4LlxuICovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCB4bWwyanMgZnJvbSAneG1sMmpzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcblxuZnVuY3Rpb24gcGFyc2VBbmRTYXZlRmlsZShvcHRpb25zLCBmaWxlV2l0aEhhc2gsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIHtcbiAgICAgICAgbG9nZ2VyLmluZm8oJ1Byb2Nlc3NpbmcgZmlsZTogJXMnLCBmaWxlV2l0aEhhc2guZmlsZSk7XG4gICAgfVxuICAgIHhtbDJqcy5wYXJzZVN0cmluZyhmaWxlV2l0aEhhc2gucmVzcG9uc2VTdHJpbmcsIChlcnIsIHJlc3VsdCk9PiB7XG4gICAgICAgIGZpbGVXaXRoSGFzaC5zdWJ0aXRsZXNQcmVzZW50ID0gZmFsc2U7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiByZWplY3Qoe2VycjogZXJyLCBmaWxlV2l0aEhhc2g6IGZpbGVXaXRoSGFzaH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQucmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtlcnI6ICdObyBOYXBpcHJvamVrdCByZXNwb25zZSBmb3IgZmlsZSAnICsgZmlsZVdpdGhIYXNoLmZpbGUsIGZpbGVXaXRoSGFzaDogZmlsZVdpdGhIYXNofSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQucmVzdWx0LnN1YnRpdGxlcykge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7ZXJyOiAnTm8gc3VidGl0bGVzIGZvdW5kIGluIHJlc3BvbnNlIGZvciBmaWxlICcgKyBmaWxlV2l0aEhhc2guZmlsZSwgZmlsZVdpdGhIYXNoOiBmaWxlV2l0aEhhc2h9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdWJ0aXRsZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzRmlsZU5hbWUgPSBwYXRoLmpvaW4oXG4gICAgICAgICAgICAgICAgcGF0aC5kaXJuYW1lKGZpbGVXaXRoSGFzaC5maWxlKSxcbiAgICAgICAgICAgICAgICBwYXRoLmJhc2VuYW1lKGZpbGVXaXRoSGFzaC5maWxlLCBwYXRoLmV4dG5hbWUoZmlsZVdpdGhIYXNoLmZpbGUpKSArICcuJyArIG9wdGlvbnMuZXh0ZW5zaW9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdTYXZpbmcgZmlsZSBbICVzIF0nLCBzdWJzRmlsZU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudCA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciBmaWxlID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oc3Vic0ZpbGVOYW1lKTtcbiAgICAgICAgICAgIHZhciBzdWJzID0gcmVzdWx0LnJlc3VsdC5zdWJ0aXRsZXNbMF07XG5cbiAgICAgICAgICAgIGZpbGUub24oJ2Vycm9yJywgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdCh7ZXJyOiBlcnIsIGZpbGVXaXRoSGFzaDogZmlsZVdpdGhIYXNofSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGZpbGUub24oJ2ZpbmlzaCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdTdWJ0aXRsZXMgZmlsZSBbICVzIF0gc2F2ZWQgc3VjY2Vzc2Z1bGx5Jywgc3Vic0ZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmlsZVdpdGhIYXNoLnN1YnRpdGxlRmlsZU5hbWUgPSBzdWJzRmlsZU5hbWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlV2l0aEhhc2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgYiA9IG5ldyBCdWZmZXIoc3Vicy5jb250ZW50WzBdLCAnYmFzZTY0Jyk7XG4gICAgICAgICAgICBmaWxlLndyaXRlKGIudG9TdHJpbmcoJ1VURi04JykpO1xuICAgICAgICAgICAgZmlsZS5lbmQoKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7ZXJyOiAnV3JvbmcgbnVtYmVyIG9mIHN1YnRpdGxlcy4gU2hvdWxkIGJlIDEnLCBmaWxlV2l0aEhhc2g6IGZpbGVXaXRoSGFzaH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChvcHRpb25zLCBmaWxlV2l0aEhhc2gpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PnBhcnNlQW5kU2F2ZUZpbGUob3B0aW9ucywgZmlsZVdpdGhIYXNoLCByZXNvbHZlLCByZWplY3QpKTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
