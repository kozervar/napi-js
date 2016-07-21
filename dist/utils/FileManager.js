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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0ZpbGVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQUksYUFBYSxTQUFiLFVBQWEsQ0FBVSxRQUFWLEVBQW9CO0FBQ2pDLFFBQUk7QUFDQSxxQkFBRyxRQUFILENBQVksUUFBWjtBQUNBLGVBQU8sSUFBUDtBQUNILEtBSEQsQ0FJQSxPQUFNLENBQU4sRUFBUztBQUNMLGVBQU8sS0FBUDtBQUNIO0FBQ0osQ0FSRDs7QUFVQSxTQUFTLGlCQUFULENBQTJCLE9BQTNCLEVBQW9DLFlBQXBDLEVBQWtELE9BQWxELEVBQTJELE1BQTNELEVBQW1FO0FBQy9ELFFBQU0sZUFBZSxlQUFLLElBQUwsQ0FDakIsZUFBSyxPQUFMLENBQWEsYUFBYSxJQUExQixDQURpQixFQUVqQixlQUFLLFFBQUwsQ0FBYyxhQUFhLElBQTNCLEVBQWlDLGVBQUssT0FBTCxDQUFhLGFBQWEsSUFBMUIsQ0FBakMsSUFBb0UsUUFBUSxTQUYzRCxDQUFyQjtBQUlBLFFBQUcsV0FBVyxZQUFYLENBQUgsRUFBNkI7QUFDekIsWUFBRyxDQUFDLFFBQVEsU0FBWixFQUF1QjtBQUNuQixnQkFBSSxRQUFRLE9BQVosRUFBcUI7QUFDakIsOEJBQU8sSUFBUCxDQUFZLG1DQUFaLEVBQWlELFlBQWpEO0FBQ0g7QUFDRCx5QkFBYSxnQkFBYixHQUFnQyxJQUFoQztBQUNBLHlCQUFhLGdCQUFiLEdBQWdDLFlBQWhDO0FBQ0EsbUJBQU8sUUFBUSxZQUFSLENBQVA7QUFDSDs7QUFFRCxZQUFJLGVBQWdCLElBQUksSUFBSixFQUFELENBQWEsT0FBYixHQUF1QixRQUF2QixFQUFuQjtBQUNBLFlBQUksU0FBUyxLQUFLLE1BQUwsR0FBYyxRQUFkLEVBQWI7QUFDQSxZQUFJLFNBQVMsaUJBQU8sVUFBUCxDQUFrQixNQUFsQixFQUEwQixNQUExQixDQUFpQyxlQUFlLE1BQWhELEVBQXdELE1BQXhELENBQStELEtBQS9ELENBQWI7QUFDQSxZQUFNLHVCQUF1QixlQUFLLElBQUwsQ0FDekIsZUFBSyxPQUFMLENBQWEsYUFBYSxJQUExQixDQUR5QixFQUV6QixlQUFLLFFBQUwsQ0FBYyxhQUFhLElBQTNCLEVBQWlDLGVBQUssT0FBTCxDQUFhLGFBQWEsSUFBMUIsQ0FBakMsSUFBb0UsR0FBcEUsR0FBMEUsT0FBTyxNQUFQLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQUExRSxHQUFnRyxRQUFRLFNBRi9FLENBQTdCOztBQUtBLFlBQUksUUFBUSxPQUFaLEVBQXFCO0FBQ2pCLDBCQUFPLElBQVAsQ0FBWSxnQ0FBWixFQUE4QyxZQUE5QyxFQUE0RCxvQkFBNUQ7QUFDSDtBQUNELHFCQUFHLFVBQUgsQ0FBYyxZQUFkLEVBQTRCLG9CQUE1QjtBQUNIO0FBQ0QsV0FBTyxRQUFRLFlBQVIsQ0FBUDtBQUNIOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxPQUF2RCxFQUFnRSxNQUFoRSxFQUF3RTtBQUNwRSxRQUFHLGFBQWEsZ0JBQWhCLEVBQWtDO0FBQzlCLGdCQUFRLFlBQVI7QUFDSDtBQUNELFFBQU0sZUFBZSxlQUFLLElBQUwsQ0FDakIsZUFBSyxPQUFMLENBQWEsYUFBYSxJQUExQixDQURpQixFQUVqQixlQUFLLFFBQUwsQ0FBYyxhQUFhLElBQTNCLEVBQWlDLGVBQUssT0FBTCxDQUFhLGFBQWEsSUFBMUIsQ0FBakMsSUFBb0UsUUFBUSxTQUYzRCxDQUFyQjs7QUFLQSxRQUFJLFFBQVEsT0FBWixFQUFxQjtBQUNqQixzQkFBTyxJQUFQLENBQVksb0JBQVosRUFBa0MsWUFBbEM7QUFDSDs7QUFFRCxpQkFBYSxnQkFBYixHQUFnQyxJQUFoQzs7QUFFQSxRQUFJLE9BQU8sYUFBRyxpQkFBSCxDQUFxQixZQUFyQixDQUFYOztBQUVBLFNBQUssRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBQyxHQUFELEVBQVM7QUFDdEIsZUFBTyxFQUFDLEtBQUssR0FBTixFQUFXLGNBQWMsWUFBekIsRUFBUDtBQUNILEtBRkQ7QUFHQSxTQUFLLEVBQUwsQ0FBUSxRQUFSLEVBQWtCLFlBQU07QUFDcEIsWUFBSSxRQUFRLE9BQVosRUFBcUI7QUFDakIsMEJBQU8sSUFBUCxDQUFZLDBDQUFaLEVBQXdELFlBQXhEO0FBQ0g7QUFDRCxxQkFBYSxnQkFBYixHQUFnQyxZQUFoQztBQUNBLGdCQUFRLFlBQVI7QUFDSCxLQU5EO0FBT0EsUUFBSSxJQUFJLElBQUksTUFBSixDQUFXLFVBQVUsT0FBVixDQUFrQixDQUFsQixDQUFYLEVBQWlDLFFBQWpDLENBQVI7QUFDQSxTQUFLLEtBQUwsQ0FBVyxFQUFFLFFBQUYsQ0FBVyxPQUFYLENBQVg7QUFDQSxTQUFLLEdBQUw7QUFDSDs7QUFFRCxJQUFJLGdCQUFnQixTQUFoQixhQUFnQixDQUFVLE9BQVYsRUFBbUIsWUFBbkIsRUFBaUMsU0FBakMsRUFBMkM7QUFDM0QsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBUyxNQUFUO0FBQUEsZUFBa0IsWUFBWSxPQUFaLEVBQW9CLFlBQXBCLEVBQWlDLFNBQWpDLEVBQTJDLE9BQTNDLEVBQW1ELE1BQW5ELENBQWxCO0FBQUEsS0FBWixDQUFQO0FBQ0gsQ0FGRDtBQUdBLElBQUksaUJBQWlCLFNBQWpCLGNBQWlCLENBQVUsT0FBVixFQUFtQixZQUFuQixFQUFnQztBQUNqRCxXQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFTLE1BQVQ7QUFBQSxlQUFrQixrQkFBa0IsT0FBbEIsRUFBMEIsWUFBMUIsRUFBdUMsT0FBdkMsRUFBK0MsTUFBL0MsQ0FBbEI7QUFBQSxLQUFaLENBQVA7QUFDSCxDQUZEOztrQkFJZTtBQUNYLG1CQUFnQixhQURMO0FBRVgsb0JBQWlCO0FBRk4sQyIsImZpbGUiOiJ1dGlscy9GaWxlTWFuYWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuXHJcbnZhciBmaWxlRXhpc3RzID0gZnVuY3Rpb24gKGZpbGVuYW1lKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGZzLnN0YXRTeW5jKGZpbGVuYW1lKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGNhdGNoKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBjaGVja0lmRmlsZUV4aXN0cyhvcHRpb25zLCBmaWxlV2l0aEhhc2gsIHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgY29uc3Qgc3Vic0ZpbGVOYW1lID0gcGF0aC5qb2luKFxyXG4gICAgICAgIHBhdGguZGlybmFtZShmaWxlV2l0aEhhc2guZmlsZSksXHJcbiAgICAgICAgcGF0aC5iYXNlbmFtZShmaWxlV2l0aEhhc2guZmlsZSwgcGF0aC5leHRuYW1lKGZpbGVXaXRoSGFzaC5maWxlKSkgKyBvcHRpb25zLmV4dGVuc2lvblxyXG4gICAgKTtcclxuICAgIGlmKGZpbGVFeGlzdHMoc3Vic0ZpbGVOYW1lKSkge1xyXG4gICAgICAgIGlmKCFvcHRpb25zLm92ZXJ3cml0ZSkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSB7XHJcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnRmlsZSBbICVzIF0gZXhpc3QuIE5vdGhpbmcgdG8gZG8hJywgc3Vic0ZpbGVOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudCA9IHRydWU7XHJcbiAgICAgICAgICAgIGZpbGVXaXRoSGFzaC5zdWJ0aXRsZUZpbGVOYW1lID0gc3Vic0ZpbGVOYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmaWxlV2l0aEhhc2gpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRfZGF0ZSA9IChuZXcgRGF0ZSgpKS52YWx1ZU9mKCkudG9TdHJpbmcoKTtcclxuICAgICAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygpO1xyXG4gICAgICAgIHZhciBkaWdlc3QgPSBjcnlwdG8uY3JlYXRlSGFzaCgnc2hhMScpLnVwZGF0ZShjdXJyZW50X2RhdGUgKyByYW5kb20pLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRTdWJzRmlsZU5hbWUgPSBwYXRoLmpvaW4oXHJcbiAgICAgICAgICAgIHBhdGguZGlybmFtZShmaWxlV2l0aEhhc2guZmlsZSksXHJcbiAgICAgICAgICAgIHBhdGguYmFzZW5hbWUoZmlsZVdpdGhIYXNoLmZpbGUsIHBhdGguZXh0bmFtZShmaWxlV2l0aEhhc2guZmlsZSkpICsgJy0nICsgZGlnZXN0LnN1YnN0cigwLCA0KSArIG9wdGlvbnMuZXh0ZW5zaW9uXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgICAgICBsb2dnZXIuaW5mbygnUmVuYW1pbmcgZmlsZSBbICVzIF0gdG8gWyAlcyB9Jywgc3Vic0ZpbGVOYW1lLCBtb2RpZmllZFN1YnNGaWxlTmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZzLnJlbmFtZVN5bmMoc3Vic0ZpbGVOYW1lLCBtb2RpZmllZFN1YnNGaWxlTmFtZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzb2x2ZShmaWxlV2l0aEhhc2gpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWxlTWFuYWdlcihvcHRpb25zLCBmaWxlV2l0aEhhc2gsIHN1YnRpdGxlcywgcmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICBpZihmaWxlV2l0aEhhc2guc3VidGl0bGVzUHJlc2VudCkge1xyXG4gICAgICAgIHJlc29sdmUoZmlsZVdpdGhIYXNoKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHN1YnNGaWxlTmFtZSA9IHBhdGguam9pbihcclxuICAgICAgICBwYXRoLmRpcm5hbWUoZmlsZVdpdGhIYXNoLmZpbGUpLFxyXG4gICAgICAgIHBhdGguYmFzZW5hbWUoZmlsZVdpdGhIYXNoLmZpbGUsIHBhdGguZXh0bmFtZShmaWxlV2l0aEhhc2guZmlsZSkpICsgb3B0aW9ucy5leHRlbnNpb25cclxuICAgICk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMudmVyYm9zZSkge1xyXG4gICAgICAgIGxvZ2dlci5pbmZvKCdTYXZpbmcgZmlsZSBbICVzIF0nLCBzdWJzRmlsZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGVXaXRoSGFzaC5zdWJ0aXRsZXNQcmVzZW50ID0gdHJ1ZTtcclxuXHJcbiAgICB2YXIgZmlsZSA9IGZzLmNyZWF0ZVdyaXRlU3RyZWFtKHN1YnNGaWxlTmFtZSk7XHJcblxyXG4gICAgZmlsZS5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgcmVqZWN0KHtlcnI6IGVyciwgZmlsZVdpdGhIYXNoOiBmaWxlV2l0aEhhc2h9KTtcclxuICAgIH0pO1xyXG4gICAgZmlsZS5vbignZmluaXNoJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIHtcclxuICAgICAgICAgICAgbG9nZ2VyLmluZm8oJ1N1YnRpdGxlcyBmaWxlIFsgJXMgXSBzYXZlZCBzdWNjZXNzZnVsbHknLCBzdWJzRmlsZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaWxlV2l0aEhhc2guc3VidGl0bGVGaWxlTmFtZSA9IHN1YnNGaWxlTmFtZTtcclxuICAgICAgICByZXNvbHZlKGZpbGVXaXRoSGFzaCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBiID0gbmV3IEJ1ZmZlcihzdWJ0aXRsZXMuY29udGVudFswXSwgJ2Jhc2U2NCcpO1xyXG4gICAgZmlsZS53cml0ZShiLnRvU3RyaW5nKCdVVEYtOCcpKTtcclxuICAgIGZpbGUuZW5kKCk7XHJcbn1cclxuXHJcbnZhciBzYXZlU3VidGl0bGVzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVXaXRoSGFzaCwgc3VidGl0bGVzKXtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT5maWxlTWFuYWdlcihvcHRpb25zLGZpbGVXaXRoSGFzaCxzdWJ0aXRsZXMscmVzb2x2ZSxyZWplY3QpKTtcclxufTtcclxudmFyIHN1YnRpdGxlRXhpc3RzID0gZnVuY3Rpb24gKG9wdGlvbnMsIGZpbGVXaXRoSGFzaCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+Y2hlY2tJZkZpbGVFeGlzdHMob3B0aW9ucyxmaWxlV2l0aEhhc2gscmVzb2x2ZSxyZWplY3QpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNhdmVTdWJ0aXRsZXMgOiBzYXZlU3VidGl0bGVzLFxyXG4gICAgc3VidGl0bGVFeGlzdHMgOiBzdWJ0aXRsZUV4aXN0c1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
