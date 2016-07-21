#!/usr/bin/env node

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOztBQUNBOztBQUNBOztJQUFZLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJLE9BQU8sZ0JBQU0sS0FBTixDQUFZLGlCQUFaLEVBQ04sT0FETSxHQUVOLElBRk0sQ0FFRCxNQUZDLEVBR04sS0FITSxDQUdBLFNBSEEsRUFHVyxHQUhYLEVBSU4sS0FKTSxDQUlBLE1BSkEsRUFJUSxHQUpSLEVBS04sTUFMTSxDQUtDLEdBTEQsRUFLTTtBQUNULFdBQU8sVUFERTtBQUVULGlCQUFhLCtCQUZKO0FBR1QsYUFBUyxnQkFBTSxRQUFOLENBQWU7QUFIZixDQUxOLEVBVU4sTUFWTSxDQVVDLFNBVkQsRUFVWTtBQUNmLGlCQUFhLGdCQURFO0FBRWYsYUFBUztBQUZNLENBVlosRUFjTixNQWRNLENBY0MsR0FkRCxFQWNNO0FBQ1QsV0FBTyxJQURFO0FBRVQsaUJBQWEscUlBRko7QUFHVCxXQUFPLE9BSEU7QUFJVCxhQUFTLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsRUFBc0MsT0FBdEMsRUFBK0MsUUFBL0MsRUFBeUQsT0FBekQsRUFBa0UsT0FBbEU7QUFKQSxDQWROLEVBb0JOLE9BcEJNLENBb0JFLHFCQXBCRixFQW9CeUIsbUVBcEJ6QixFQXFCTixPQXJCTSxDQXFCRSx1QkFyQkYsRUFxQjJCLG1GQXJCM0IsRUFzQk4sT0F0Qk0sQ0FzQkUsZ0NBdEJGLEVBc0JvQyw0QkF0QnBDLEVBdUJOLE1BdkJNLENBdUJDLGdFQXZCRCxFQXdCTixJQXhCTDs7QUEwQkEsc0JBQU8sNEJBQWtCLElBQWxCLENBQVAsRUFDSyxJQURMLENBQ1UsWUFBSTtBQUNOLFdBQU8sQ0FBUDtBQUNILENBSEwsRUFJSyxLQUpMLENBSVcsVUFBQyxHQUFELEVBQU87QUFDVixZQUFRLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQyxHQUFsQztBQUNBLFdBQU8sQ0FBQyxDQUFSO0FBQ0gsQ0FQTCIsImZpbGUiOiJjbWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0yMS5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIHAgZnJvbSAnLi8uLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgQ09OU1QgZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCBuYXBpanMgZnJvbSAnLi9uYXBpanMnO1xyXG5pbXBvcnQgTmFwaWpzT3B0aW9ucyBmcm9tICcuL05hcGlqc09wdGlvbnMnO1xyXG5cclxudmFyIGFyZ3YgPSB5YXJncy51c2FnZSgnJDAgPGNtZD4gW2FyZ3NdJylcclxuICAgIC52ZXJzaW9uKClcclxuICAgIC5oZWxwKCdoZWxwJylcclxuICAgIC5hbGlhcygndmVyc2lvbicsICd2JylcclxuICAgIC5hbGlhcygnaGVscCcsICdoJylcclxuICAgIC5vcHRpb24oJ2wnLCB7XHJcbiAgICAgICAgYWxpYXM6ICdsYW5ndWFnZScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdMYW5ndWFnZS4gQXZhaWxhYmxlOiBQT0wsIEVORycsXHJcbiAgICAgICAgZGVmYXVsdDogQ09OU1QuTEFOR1VBR0UuUExcclxuICAgIH0pXHJcbiAgICAub3B0aW9uKCd2ZXJib3NlJywge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAndmVyYm9zZSBvdXRwdXQnLFxyXG4gICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICB9KVxyXG4gICAgLm9wdGlvbignZicsIHtcclxuICAgICAgICBhcnJheTogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIGFycmF5IG9mIGZpbGVzIHNlcGFyYXRlZCBieSBzcGFjZSBjaGFyLiBHbG9iIGV4cHJlc3Npb24gYWxsb3dlZC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gdmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9pc2FhY3Mvbm9kZS1nbG9iJyxcclxuICAgICAgICBhbGlhczogJ2ZpbGVzJyxcclxuICAgICAgICBkZWZhdWx0OiBbJyoubWt2JywgJyouYXZpJywgJyoubXA0JywgJyoubXBlZycsICcqLndtdicsICcqLnJtdmInLCAnKi5tb3YnLCAnKi5tcGcnXVxyXG4gICAgfSlcclxuICAgIC5leGFtcGxlKCduYXBpanMgLWYgXCIqKi5ta3ZcIiAnLCAnU2VhcmNoIHN1YnRpdGxlcyBmb3IgbW92aWVzIHdpdGggLm1rdiBleHRlbnNpb24gaW4gY3VycmVudCBmb2xkZXInKVxyXG4gICAgLmV4YW1wbGUoJ25hcGlqcyAtZiBcIioqLyouYXZpXCIgJywgJ1NlYXJjaCBzdWJ0aXRsZXMgZm9yIG1vdmllcyB3aXRoIC5hdmkgZXh0ZW5zaW9uIGluIGN1cnJlbnQgZm9sZGVyIGFuZCBzdWJmb2xkZXJzLicpXHJcbiAgICAuZXhhbXBsZSgnbmFwaWpzIC1mIFwiKioubWt2XCIgXCIqKi8qLmF2aVwiICcsICdUaGlzIHNhbWUgYnV0IGluIG9uZSBsaW5lLicpXHJcbiAgICAuZXBpbG9nKCdGb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdCBodHRwczovL2dpdGh1Yi5jb20va296ZXJ2YXIvbmFwaS1qcycpXHJcbiAgICAuYXJndjtcclxuXHJcbm5hcGlqcyhuZXcgTmFwaWpzT3B0aW9ucyhhcmd2KSlcclxuICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQ6ICcsIGVycik7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
