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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0hhc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7a0JBVWUsVUFBUyxJQUFULEVBQWM7QUFDekIsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBUyxNQUFULEVBQW1CO0FBQ2xDLFlBQUksUUFBUSxhQUFHLFFBQUgsQ0FBWSxJQUFaLENBQVo7QUFDQSxZQUFJLGtCQUFrQixNQUFNLE1BQU4sQ0FBdEI7QUFDQSxZQUFJLGVBQWUseUJBQWUsSUFBZixDQUFuQjtBQUNBLG1DQUFNLElBQU4sRUFBWSxDQUFaLEVBQWUsUUFBZixFQUF5QixVQUFVLEdBQVYsRUFBZSxJQUFmLEVBQXFCO0FBQzFDLGdCQUFJLEdBQUosRUFBUztBQUNMLHVCQUFPLCtEQUErRCxJQUF0RTtBQUNILGFBRkQsTUFFTztBQUNILDZCQUFhLElBQWIsR0FBb0IsSUFBcEI7QUFDQSw2QkFBYSxLQUFiLEdBQXFCLGVBQXJCO0FBQ0Esd0JBQVEsWUFBUjtBQUNIO0FBQ0osU0FSRDtBQVNILEtBYk0sQ0FBUDtBQWNILEM7O0FBeEJEOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQSIsImZpbGUiOiJ1dGlscy9IYXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMTguXG4gKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL2luZGV4JztcbmltcG9ydCBtZDVwZiBmcm9tICdtZDUtcGFydC1maWxlJztcbmltcG9ydCBOYXBpanNGaWxlIGZyb20gJy4vLi4vTmFwaWpzRmlsZSc7XG4vKipcbiAqXG4gKiBAcGFyYW0gZmlsZVxuICogQHJldHVybnMge1Byb21pc2V9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGZpbGUpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT4ge1xuICAgICAgICB2YXIgc3RhdHMgPSBmcy5zdGF0U3luYyhmaWxlKTtcbiAgICAgICAgdmFyIGZpbGVTaXplSW5CeXRlcyA9IHN0YXRzWydzaXplJ107XG4gICAgICAgIHZhciBmaWxlV2l0aEhhc2ggPSBuZXcgTmFwaWpzRmlsZShmaWxlKTtcbiAgICAgICAgbWQ1cGYoZmlsZSwgMCwgMTA0ODU3NjAsIGZ1bmN0aW9uIChlcnIsIGhhc2gpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoJ1NvbWV0aGluZyB3ZW50IHdyb25nIGR1cmluZyBtZDUgaGFzaCBjYWxjdWxhdGlvbiBmb3IgZmlsZSAnICsgZmlsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbGVXaXRoSGFzaC5oYXNoID0gaGFzaDtcbiAgICAgICAgICAgICAgICBmaWxlV2l0aEhhc2guYnl0ZXMgPSBmaWxlU2l6ZUluQnl0ZXM7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlV2l0aEhhc2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
