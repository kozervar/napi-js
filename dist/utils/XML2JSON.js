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
            (0, _index.fileManager)(options, fileWithHash, result.result.subtitles[0]).then(function (response) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL1hNTDJKU09OLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQW5DLEVBQWlELE9BQWpELEVBQTBELE1BQTFELEVBQWtFO0FBQzlELFFBQUksUUFBUSxPQUFaLEVBQXFCO0FBQ2pCLHNCQUFPLElBQVAsQ0FBWSxxQkFBWixFQUFtQyxhQUFhLElBQWhEO0FBQ0g7QUFDRCxxQkFBTyxXQUFQLENBQW1CLGFBQWEsY0FBaEMsRUFBZ0QsVUFBQyxHQUFELEVBQU0sTUFBTixFQUFnQjtBQUM1RCxxQkFBYSxnQkFBYixHQUFnQyxLQUFoQztBQUNBLFlBQUksR0FBSixFQUFTO0FBQ0wsbUJBQU8sT0FBTyxFQUFDLEtBQUssR0FBTixFQUFXLGNBQWMsWUFBekIsRUFBUCxDQUFQO0FBQ0g7QUFDRCxZQUFJLENBQUMsTUFBRCxJQUFXLENBQUMsT0FBTyxNQUF2QixFQUErQjtBQUMzQixtQkFBTyxPQUFPLEVBQUMsS0FBSyxzQ0FBc0MsYUFBYSxJQUF6RCxFQUErRCxjQUFjLFlBQTdFLEVBQVAsQ0FBUDtBQUNIO0FBQ0QsWUFBSSxDQUFDLE9BQU8sTUFBUCxDQUFjLFNBQW5CLEVBQThCO0FBQzFCLG1CQUFPLE9BQU8sRUFBQyxLQUFLLDZDQUE2QyxhQUFhLElBQWhFLEVBQXNFLGNBQWMsWUFBcEYsRUFBUCxDQUFQO0FBQ0g7QUFDRCxZQUFJLE9BQU8sTUFBUCxDQUFjLFNBQWQsQ0FBd0IsTUFBeEIsS0FBbUMsQ0FBdkMsRUFBMEM7QUFDdEMsb0NBQVksT0FBWixFQUFxQixZQUFyQixFQUFtQyxPQUFPLE1BQVAsQ0FBYyxTQUFkLENBQXdCLENBQXhCLENBQW5DLEVBQ0ssSUFETCxDQUNVO0FBQUEsdUJBQVksUUFBUSxRQUFSLENBQVo7QUFBQSxhQURWLEVBRUssS0FGTCxDQUVXO0FBQUEsdUJBQU8sT0FBTyxFQUFDLEtBQUssR0FBTixFQUFXLGNBQWMsWUFBekIsRUFBUCxDQUFQO0FBQUEsYUFGWDtBQUdILFNBSkQsTUFJTztBQUNILG1CQUFPLE9BQU8sRUFBQyxLQUFLLHdDQUFOLEVBQWdELGNBQWMsWUFBOUQsRUFBUCxDQUFQO0FBQ0g7QUFDSixLQWxCRDtBQW1CSDs7a0JBRWMsVUFBQyxPQUFELEVBQVUsWUFBVixFQUEyQjtBQUN0QyxXQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVY7QUFBQSxlQUFtQixpQkFBaUIsT0FBakIsRUFBMEIsWUFBMUIsRUFBd0MsT0FBeEMsRUFBaUQsTUFBakQsQ0FBbkI7QUFBQSxLQUFaLENBQVA7QUFDSCxDIiwiZmlsZSI6InV0aWxzL1hNTDJKU09OLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0xOC5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHsgbG9nZ2VyLCBmaWxlTWFuYWdlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeG1sMmpzIGZyb20gJ3htbDJqcyc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VBbmRTYXZlRmlsZShvcHRpb25zLCBmaWxlV2l0aEhhc2gsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdQcm9jZXNzaW5nIGZpbGU6ICVzJywgZmlsZVdpdGhIYXNoLmZpbGUpO1xyXG4gICAgfVxyXG4gICAgeG1sMmpzLnBhcnNlU3RyaW5nKGZpbGVXaXRoSGFzaC5yZXNwb25zZVN0cmluZywgKGVyciwgcmVzdWx0KT0+IHtcclxuICAgICAgICBmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudCA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7ZXJyOiBlcnIsIGZpbGVXaXRoSGFzaDogZmlsZVdpdGhIYXNofSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmVzdWx0IHx8ICFyZXN1bHQucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWplY3Qoe2VycjogJ05vIE5hcGlwcm9qZWt0IHJlc3BvbnNlIGZvciBmaWxlICcgKyBmaWxlV2l0aEhhc2guZmlsZSwgZmlsZVdpdGhIYXNoOiBmaWxlV2l0aEhhc2h9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFyZXN1bHQucmVzdWx0LnN1YnRpdGxlcykge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtlcnI6ICdObyBzdWJ0aXRsZXMgZm91bmQgaW4gcmVzcG9uc2UgZm9yIGZpbGUgJyArIGZpbGVXaXRoSGFzaC5maWxlLCBmaWxlV2l0aEhhc2g6IGZpbGVXaXRoSGFzaH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVzdWx0LnJlc3VsdC5zdWJ0aXRsZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGZpbGVNYW5hZ2VyKG9wdGlvbnMsIGZpbGVXaXRoSGFzaCwgcmVzdWx0LnJlc3VsdC5zdWJ0aXRsZXNbMF0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNvbHZlKHJlc3BvbnNlKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KHtlcnI6IGVyciwgZmlsZVdpdGhIYXNoOiBmaWxlV2l0aEhhc2h9KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdCh7ZXJyOiAnV3JvbmcgbnVtYmVyIG9mIHN1YnRpdGxlcy4gU2hvdWxkIGJlIDEnLCBmaWxlV2l0aEhhc2g6IGZpbGVXaXRoSGFzaH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucywgZmlsZVdpdGhIYXNoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PnBhcnNlQW5kU2F2ZUZpbGUob3B0aW9ucywgZmlsZVdpdGhIYXNoLCByZXNvbHZlLCByZWplY3QpKTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
