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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0dsb2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFvQjtBQUMvQixjQUFVLFVBQVUsT0FBVixHQUFvQixFQUFFLGVBQWdCLEtBQWxCLEVBQTlCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBUyxNQUFULEVBQW1CO0FBQ2xDLFlBQUkscUJBQUUsV0FBRixDQUFjLEtBQWQsQ0FBSixFQUEwQjtBQUN0QixrQkFBTSxJQUFJLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0g7QUFDRCxZQUFJLENBQUMscUJBQUUsT0FBRixDQUFVLEtBQVYsQ0FBTCxFQUF1QjtBQUNuQixvQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIO0FBQ0QsOEJBQUssS0FBTCxFQUFZO0FBQ1Isb0JBQVEsUUFBUTtBQURSLFNBQVosRUFHSyxJQUhMLENBR1UsVUFBQyxLQUFEO0FBQUEsbUJBQVMsUUFBUSxLQUFSLENBQVQ7QUFBQSxTQUhWLEVBSUssS0FKTCxDQUlXLFVBQUMsR0FBRDtBQUFBLG1CQUFPLE9BQU8sR0FBUCxDQUFQO0FBQUEsU0FKWDtBQU1ILEtBYk0sQ0FBUDtBQWNILEMiLCJmaWxlIjoidXRpbHMvR2xvYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMTguXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5pbXBvcnQgZ2xvYiBmcm9tICdnbG9iYnknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGZpbGVzLCBvcHRpb25zKSA9PiB7XHJcbiAgICBvcHRpb25zID0gb3B0aW9ucyA/IG9wdGlvbnMgOiB7IGNhc2VTZW5zaXRpdmUgOiBmYWxzZSB9O1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XHJcbiAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQoZmlsZXMpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsZSBsaXN0IGNhbm5vdCBiZSB1bmRlZmluZWQhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghXy5pc0FycmF5KGZpbGVzKSkge1xyXG4gICAgICAgICAgICBmaWxlcyA9IFtmaWxlc107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdsb2IoZmlsZXMsIHtcclxuICAgICAgICAgICAgbm9jYXNlOiBvcHRpb25zLmNhc2VTZW5zaXRpdmVcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZmlsZXMpPT5yZXNvbHZlKGZpbGVzKSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpPT5yZWplY3QoZXJyKSlcclxuICAgICAgICA7XHJcbiAgICB9KTtcclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
