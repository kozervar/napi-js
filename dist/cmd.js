/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

var _utils = require('./utils');

var _package = require('./../package.json');

var p = _interopRequireWildcard(_package);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

var _napijs = require('./napijs');

var _napijs2 = _interopRequireDefault(_napijs);

var _NapijsOptions = require('./NapijsOptions');

var _NapijsOptions2 = _interopRequireDefault(_NapijsOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var argv = _yargs2.default.usage('$0 <cmd> [args]').version().help('help').alias('version', 'v').alias('help', 'h').option('l', {
    alias: 'language',
    description: 'Language. Available: POL, ENG',
    default: _const2.default.LANGUAGE.PL
}).option('verbose', {
    description: 'verbose output',
    default: false
}).option('f', {
    array: true,
    description: 'An array of files separated by space char. Glob expression allowed. For more information visit: https://github.com/isaacs/node-glob',
    alias: 'files',
    default: ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg']
}).example('napijs -f "**.mkv" ', 'Search subtitles for movies with .mkv extension in current folder').example('napijs -f "**/*.avi" ', 'Search subtitles for movies with .avi extension in current folder and subfolders.').example('napijs -f "**.mkv" "**/*.avi" ', 'This same but in one line.').epilog('For more information visit https://github.com/kozervar/napi-js').argv;

(0, _napijs2.default)(new _NapijsOptions2.default(argv)).then(function () {
    return 1;
}).catch(function (err) {
    console.error('Error occurred: ', err);
    return -1;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0lBQVksQzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQUksT0FBTyxnQkFBTSxLQUFOLENBQVksaUJBQVosRUFDTixPQURNLEdBRU4sSUFGTSxDQUVELE1BRkMsRUFHTixLQUhNLENBR0EsU0FIQSxFQUdXLEdBSFgsRUFJTixLQUpNLENBSUEsTUFKQSxFQUlRLEdBSlIsRUFLTixNQUxNLENBS0MsR0FMRCxFQUtNO0FBQ1QsV0FBTyxVQURFO0FBRVQsaUJBQWEsK0JBRko7QUFHVCxhQUFTLGdCQUFNLFFBQU4sQ0FBZTtBQUhmLENBTE4sRUFVTixNQVZNLENBVUMsU0FWRCxFQVVZO0FBQ2YsaUJBQWEsZ0JBREU7QUFFZixhQUFTO0FBRk0sQ0FWWixFQWNOLE1BZE0sQ0FjQyxHQWRELEVBY007QUFDVCxXQUFPLElBREU7QUFFVCxpQkFBYSxxSUFGSjtBQUdULFdBQU8sT0FIRTtBQUlULGFBQVMsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxFQUErQyxRQUEvQyxFQUF5RCxPQUF6RCxFQUFrRSxPQUFsRTtBQUpBLENBZE4sRUFvQk4sT0FwQk0sQ0FvQkUscUJBcEJGLEVBb0J5QixtRUFwQnpCLEVBcUJOLE9BckJNLENBcUJFLHVCQXJCRixFQXFCMkIsbUZBckIzQixFQXNCTixPQXRCTSxDQXNCRSxnQ0F0QkYsRUFzQm9DLDRCQXRCcEMsRUF1Qk4sTUF2Qk0sQ0F1QkMsZ0VBdkJELEVBd0JOLElBeEJMOztBQTBCQSxzQkFBTyw0QkFBa0IsSUFBbEIsQ0FBUCxFQUNLLElBREwsQ0FDVSxZQUFJO0FBQ04sV0FBTyxDQUFQO0FBQ0gsQ0FITCxFQUlLLEtBSkwsQ0FJVyxVQUFDLEdBQUQsRUFBTztBQUNWLFlBQVEsS0FBUixDQUFjLGtCQUFkLEVBQWtDLEdBQWxDO0FBQ0EsV0FBTyxDQUFDLENBQVI7QUFDSCxDQVBMIiwiZmlsZSI6ImNtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBwIGZyb20gJy4vLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHlhcmdzIGZyb20gJ3lhcmdzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENPTlNUIGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgbmFwaWpzIGZyb20gJy4vbmFwaWpzJztcclxuaW1wb3J0IE5hcGlqc09wdGlvbnMgZnJvbSAnLi9OYXBpanNPcHRpb25zJztcclxuXHJcbnZhciBhcmd2ID0geWFyZ3MudXNhZ2UoJyQwIDxjbWQ+IFthcmdzXScpXHJcbiAgICAudmVyc2lvbigpXHJcbiAgICAuaGVscCgnaGVscCcpXHJcbiAgICAuYWxpYXMoJ3ZlcnNpb24nLCAndicpXHJcbiAgICAuYWxpYXMoJ2hlbHAnLCAnaCcpXHJcbiAgICAub3B0aW9uKCdsJywge1xyXG4gICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTGFuZ3VhZ2UuIEF2YWlsYWJsZTogUE9MLCBFTkcnLFxyXG4gICAgICAgIGRlZmF1bHQ6IENPTlNULkxBTkdVQUdFLlBMXHJcbiAgICB9KVxyXG4gICAgLm9wdGlvbigndmVyYm9zZScsIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3ZlcmJvc2Ugb3V0cHV0JyxcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ2YnLCB7XHJcbiAgICAgICAgYXJyYXk6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbiBhcnJheSBvZiBmaWxlcyBzZXBhcmF0ZWQgYnkgc3BhY2UgY2hhci4gR2xvYiBleHByZXNzaW9uIGFsbG93ZWQuIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0OiBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ2xvYicsXHJcbiAgICAgICAgYWxpYXM6ICdmaWxlcycsXHJcbiAgICAgICAgZGVmYXVsdDogWycqLm1rdicsICcqLmF2aScsICcqLm1wNCcsICcqLm1wZWcnLCAnKi53bXYnLCAnKi5ybXZiJywgJyoubW92JywgJyoubXBnJ11cclxuICAgIH0pXHJcbiAgICAuZXhhbXBsZSgnbmFwaWpzIC1mIFwiKioubWt2XCIgJywgJ1NlYXJjaCBzdWJ0aXRsZXMgZm9yIG1vdmllcyB3aXRoIC5ta3YgZXh0ZW5zaW9uIGluIGN1cnJlbnQgZm9sZGVyJylcclxuICAgIC5leGFtcGxlKCduYXBpanMgLWYgXCIqKi8qLmF2aVwiICcsICdTZWFyY2ggc3VidGl0bGVzIGZvciBtb3ZpZXMgd2l0aCAuYXZpIGV4dGVuc2lvbiBpbiBjdXJyZW50IGZvbGRlciBhbmQgc3ViZm9sZGVycy4nKVxyXG4gICAgLmV4YW1wbGUoJ25hcGlqcyAtZiBcIioqLm1rdlwiIFwiKiovKi5hdmlcIiAnLCAnVGhpcyBzYW1lIGJ1dCBpbiBvbmUgbGluZS4nKVxyXG4gICAgLmVwaWxvZygnRm9yIG1vcmUgaW5mb3JtYXRpb24gdmlzaXQgaHR0cHM6Ly9naXRodWIuY29tL2tvemVydmFyL25hcGktanMnKVxyXG4gICAgLmFyZ3Y7XHJcblxyXG5uYXBpanMobmV3IE5hcGlqc09wdGlvbnMoYXJndikpXHJcbiAgICAudGhlbigoKT0+e1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkOiAnLCBlcnIpO1xyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
