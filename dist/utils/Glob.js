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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0dsb2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxLQUFELEVBQVEsT0FBUixFQUFvQjtBQUMvQixjQUFVLFVBQVUsT0FBVixHQUFvQixFQUFFLGVBQWdCLEtBQWxCLEVBQTlCO0FBQ0EsV0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBUyxNQUFULEVBQW1CO0FBQ2xDLFlBQUkscUJBQUUsV0FBRixDQUFjLEtBQWQsQ0FBSixFQUEwQjtBQUN0QixrQkFBTSxJQUFJLEtBQUosQ0FBVSxnQ0FBVixDQUFOO0FBQ0g7QUFDRCxZQUFJLENBQUMscUJBQUUsT0FBRixDQUFVLEtBQVYsQ0FBTCxFQUF1QjtBQUNuQixvQkFBUSxDQUFDLEtBQUQsQ0FBUjtBQUNIO0FBQ0QsOEJBQUssS0FBTCxFQUFZO0FBQ1Isb0JBQVEsUUFBUTtBQURSLFNBQVosRUFHSyxJQUhMLENBR1UsVUFBQyxLQUFEO0FBQUEsbUJBQVMsUUFBUSxLQUFSLENBQVQ7QUFBQSxTQUhWLEVBSUssS0FKTCxDQUlXLFVBQUMsR0FBRDtBQUFBLG1CQUFPLE9BQU8sR0FBUCxDQUFQO0FBQUEsU0FKWDtBQU1ILEtBYk0sQ0FBUDtBQWNILEMiLCJmaWxlIjoidXRpbHMvR2xvYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTE4LlxuICovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2JieSc7XG5cbmV4cG9ydCBkZWZhdWx0IChmaWxlcywgb3B0aW9ucykgPT4ge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zID8gb3B0aW9ucyA6IHsgY2FzZVNlbnNpdGl2ZSA6IGZhbHNlIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PiB7XG4gICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKGZpbGVzKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWxlIGxpc3QgY2Fubm90IGJlIHVuZGVmaW5lZCEnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIV8uaXNBcnJheShmaWxlcykpIHtcbiAgICAgICAgICAgIGZpbGVzID0gW2ZpbGVzXTtcbiAgICAgICAgfVxuICAgICAgICBnbG9iKGZpbGVzLCB7XG4gICAgICAgICAgICBub2Nhc2U6IG9wdGlvbnMuY2FzZVNlbnNpdGl2ZVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKGZpbGVzKT0+cmVzb2x2ZShmaWxlcykpXG4gICAgICAgICAgICAuY2F0Y2goKGVycik9PnJlamVjdChlcnIpKVxuICAgICAgICA7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
