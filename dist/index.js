/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';

var _utils = require('./utils');

var _download = require('./download');

var _download2 = _interopRequireDefault(_download);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _download2.default)(['./examples/*.mkv']).then(function (responses) {
    _utils.logger.info('Subtitles saved!');
}).catch(function (err) {
    console.error('napijs finished with errors: ', err);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRUEsd0JBQVMsQ0FBQyxrQkFBRCxDQUFULEVBQ0ssSUFETCxDQUNVLFVBQUMsU0FBRCxFQUFjO0FBQ2hCLGtCQUFPLElBQVAsQ0FBWSxrQkFBWjtBQUNILENBSEwsRUFJSyxLQUpMLENBSVcsZUFBTTtBQUNULFlBQVEsS0FBUixDQUFjLCtCQUFkLEVBQStDLEdBQS9DO0FBQ0gsQ0FOTCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTE4LlxuICovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBkb3dubG9hZCBmcm9tICcuL2Rvd25sb2FkJztcblxuZG93bmxvYWQoWycuL2V4YW1wbGVzLyoubWt2J10pXG4gICAgLnRoZW4oKHJlc3BvbnNlcyk9PiB7XG4gICAgICAgIGxvZ2dlci5pbmZvKCdTdWJ0aXRsZXMgc2F2ZWQhJyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCduYXBpanMgZmluaXNoZWQgd2l0aCBlcnJvcnM6ICcsIGVycik7XG4gICAgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
