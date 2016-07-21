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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0hhc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7a0JBVWUsVUFBUyxJQUFULEVBQWM7QUFDekIsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBUyxNQUFULEVBQW1CO0FBQ2xDLFlBQUksUUFBUSxhQUFHLFFBQUgsQ0FBWSxJQUFaLENBQVo7QUFDQSxZQUFJLGtCQUFrQixNQUFNLE1BQU4sQ0FBdEI7QUFDQSxZQUFJLGVBQWUseUJBQWUsSUFBZixDQUFuQjtBQUNBLG1DQUFNLElBQU4sRUFBWSxDQUFaLEVBQWUsUUFBZixFQUF5QixVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCO0FBQzFDLGdCQUFJLEdBQUosRUFBUztBQUNMLHVCQUFPLCtEQUErRCxJQUF0RTtBQUNILGFBRkQsTUFFTztBQUNILDZCQUFhLElBQWIsR0FBb0IsSUFBcEI7QUFDQSw2QkFBYSxLQUFiLEdBQXFCLGVBQXJCO0FBQ0Esd0JBQVEsWUFBUjtBQUNIO0FBQ0osU0FSRDtBQVNILEtBYk0sQ0FBUDtBQWNILEM7O0FBeEJEOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJ1dGlscy9IYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0xOC5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCBtZDVwZiBmcm9tICdtZDUtcGFydC1maWxlJztcclxuaW1wb3J0IE5hcGlqc0ZpbGUgZnJvbSAnLi8uLi9OYXBpanNGaWxlJztcclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBmaWxlXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZmlsZSl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+IHtcclxuICAgICAgICB2YXIgc3RhdHMgPSBmcy5zdGF0U3luYyhmaWxlKTtcclxuICAgICAgICB2YXIgZmlsZVNpemVJbkJ5dGVzID0gc3RhdHNbJ3NpemUnXTtcclxuICAgICAgICB2YXIgZmlsZVdpdGhIYXNoID0gbmV3IE5hcGlqc0ZpbGUoZmlsZSk7XHJcbiAgICAgICAgbWQ1cGYoZmlsZSwgMCwgMTA0ODU3NjAsIGZ1bmN0aW9uIChlcnIsIGhhc2gpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCdTb21ldGhpbmcgd2VudCB3cm9uZyBkdXJpbmcgbWQ1IGhhc2ggY2FsY3VsYXRpb24gZm9yIGZpbGUgJyArIGZpbGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZmlsZVdpdGhIYXNoLmhhc2ggPSBoYXNoO1xyXG4gICAgICAgICAgICAgICAgZmlsZVdpdGhIYXNoLmJ5dGVzID0gZmlsZVNpemVJbkJ5dGVzO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlV2l0aEhhc2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
