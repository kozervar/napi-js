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
}).option('file', {
    array: false,
    description: 'Single file'
}).option('o', {
    description: 'Overwrite subtitle file if one exists',
    alias: 'overwrite',
    default: true
}).example('napijs -f "**.mkv" ', 'Search subtitles for movies with .mkv extension in current folder').example('napijs -f "**/*.avi" ', 'Search subtitles for movies with .avi extension in current folder and subfolders.').example('napijs -f "**.mkv" "**/*.avi" ', 'This same but in one line.').epilog('For more information visit https://github.com/kozervar/napi-js').argv;

try {
    console.log(argv);
    var options = new _NapijsOptions2.default(argv);
    (0, _napijs2.default)(options).then(function () {}).catch(function (err) {
        console.error('Error occurred: ', err);
    });
} catch (err) {
    console.error('Ups! Unexpected exception occurred... :(  \n', err);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOztBQUNBOztBQUNBOztJQUFZLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJLE9BQU8sZ0JBQU0sS0FBTixDQUFZLGlCQUFaLEVBQ04sT0FETSxHQUVOLElBRk0sQ0FFRCxNQUZDLEVBR04sS0FITSxDQUdBLFNBSEEsRUFHVyxHQUhYLEVBSU4sS0FKTSxDQUlBLE1BSkEsRUFJUSxHQUpSLEVBS04sTUFMTSxDQUtDLEdBTEQsRUFLTTtBQUNULFdBQU8sVUFERTtBQUVULGlCQUFhLCtCQUZKO0FBR1QsYUFBUyxnQkFBTSxRQUFOLENBQWU7QUFIZixDQUxOLEVBVU4sTUFWTSxDQVVDLFNBVkQsRUFVWTtBQUNmLGlCQUFhLGdCQURFO0FBRWYsYUFBUztBQUZNLENBVlosRUFjTixNQWRNLENBY0MsR0FkRCxFQWNNO0FBQ1QsV0FBTyxJQURFO0FBRVQsaUJBQWEscUlBRko7QUFHVCxXQUFPLE9BSEU7QUFJVCxhQUFTLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsRUFBc0MsT0FBdEMsRUFBK0MsUUFBL0MsRUFBeUQsT0FBekQsRUFBa0UsT0FBbEU7QUFKQSxDQWROLEVBb0JOLE1BcEJNLENBb0JDLE1BcEJELEVBb0JTO0FBQ1osV0FBTyxLQURLO0FBRVosaUJBQWE7QUFGRCxDQXBCVCxFQXdCTixNQXhCTSxDQXdCQyxHQXhCRCxFQXdCTTtBQUNULGlCQUFhLHVDQURKO0FBRVQsV0FBTyxXQUZFO0FBR1QsYUFBUztBQUhBLENBeEJOLEVBNkJOLE9BN0JNLENBNkJFLHFCQTdCRixFQTZCeUIsbUVBN0J6QixFQThCTixPQTlCTSxDQThCRSx1QkE5QkYsRUE4QjJCLG1GQTlCM0IsRUErQk4sT0EvQk0sQ0ErQkUsZ0NBL0JGLEVBK0JvQyw0QkEvQnBDLEVBZ0NOLE1BaENNLENBZ0NDLGdFQWhDRCxFQWlDTixJQWpDTDs7QUFtQ0EsSUFBSTtBQUNBLFlBQVEsR0FBUixDQUFZLElBQVo7QUFDQSxRQUFJLFVBQVUsNEJBQWtCLElBQWxCLENBQWQ7QUFDQSwwQkFBTyxPQUFQLEVBQ0ssSUFETCxDQUNVLFlBQUksQ0FDVCxDQUZMLEVBR0ssS0FITCxDQUdXLFVBQUMsR0FBRCxFQUFPO0FBQ1YsZ0JBQVEsS0FBUixDQUFjLGtCQUFkLEVBQWtDLEdBQWxDO0FBQ0gsS0FMTDtBQU1ILENBVEQsQ0FTRSxPQUFNLEdBQU4sRUFBVTtBQUNSLFlBQVEsS0FBUixDQUFjLDhDQUFkLEVBQThELEdBQTlEO0FBQ0giLCJmaWxlIjoiY21kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBwIGZyb20gJy4vLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHlhcmdzIGZyb20gJ3lhcmdzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENPTlNUIGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgbmFwaWpzIGZyb20gJy4vbmFwaWpzJztcclxuaW1wb3J0IE5hcGlqc09wdGlvbnMgZnJvbSAnLi9OYXBpanNPcHRpb25zJztcclxuXHJcbnZhciBhcmd2ID0geWFyZ3MudXNhZ2UoJyQwIDxjbWQ+IFthcmdzXScpXHJcbiAgICAudmVyc2lvbigpXHJcbiAgICAuaGVscCgnaGVscCcpXHJcbiAgICAuYWxpYXMoJ3ZlcnNpb24nLCAndicpXHJcbiAgICAuYWxpYXMoJ2hlbHAnLCAnaCcpXHJcbiAgICAub3B0aW9uKCdsJywge1xyXG4gICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTGFuZ3VhZ2UuIEF2YWlsYWJsZTogUE9MLCBFTkcnLFxyXG4gICAgICAgIGRlZmF1bHQ6IENPTlNULkxBTkdVQUdFLlBMXHJcbiAgICB9KVxyXG4gICAgLm9wdGlvbigndmVyYm9zZScsIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3ZlcmJvc2Ugb3V0cHV0JyxcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ2YnLCB7XHJcbiAgICAgICAgYXJyYXk6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbiBhcnJheSBvZiBmaWxlcyBzZXBhcmF0ZWQgYnkgc3BhY2UgY2hhci4gR2xvYiBleHByZXNzaW9uIGFsbG93ZWQuIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0OiBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ2xvYicsXHJcbiAgICAgICAgYWxpYXM6ICdmaWxlcycsXHJcbiAgICAgICAgZGVmYXVsdDogWycqLm1rdicsICcqLmF2aScsICcqLm1wNCcsICcqLm1wZWcnLCAnKi53bXYnLCAnKi5ybXZiJywgJyoubW92JywgJyoubXBnJ11cclxuICAgIH0pXHJcbiAgICAub3B0aW9uKCdmaWxlJywge1xyXG4gICAgICAgIGFycmF5OiBmYWxzZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpbmdsZSBmaWxlJ1xyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ28nLCB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPdmVyd3JpdGUgc3VidGl0bGUgZmlsZSBpZiBvbmUgZXhpc3RzJyxcclxuICAgICAgICBhbGlhczogJ292ZXJ3cml0ZScsXHJcbiAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgfSlcclxuICAgIC5leGFtcGxlKCduYXBpanMgLWYgXCIqKi5ta3ZcIiAnLCAnU2VhcmNoIHN1YnRpdGxlcyBmb3IgbW92aWVzIHdpdGggLm1rdiBleHRlbnNpb24gaW4gY3VycmVudCBmb2xkZXInKVxyXG4gICAgLmV4YW1wbGUoJ25hcGlqcyAtZiBcIioqLyouYXZpXCIgJywgJ1NlYXJjaCBzdWJ0aXRsZXMgZm9yIG1vdmllcyB3aXRoIC5hdmkgZXh0ZW5zaW9uIGluIGN1cnJlbnQgZm9sZGVyIGFuZCBzdWJmb2xkZXJzLicpXHJcbiAgICAuZXhhbXBsZSgnbmFwaWpzIC1mIFwiKioubWt2XCIgXCIqKi8qLmF2aVwiICcsICdUaGlzIHNhbWUgYnV0IGluIG9uZSBsaW5lLicpXHJcbiAgICAuZXBpbG9nKCdGb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdCBodHRwczovL2dpdGh1Yi5jb20va296ZXJ2YXIvbmFwaS1qcycpXHJcbiAgICAuYXJndjtcclxuXHJcbnRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmd2KTtcclxuICAgIHZhciBvcHRpb25zID0gbmV3IE5hcGlqc09wdGlvbnMoYXJndik7XHJcbiAgICBuYXBpanMob3B0aW9ucylcclxuICAgICAgICAudGhlbigoKT0+e1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkOiAnLCBlcnIpO1xyXG4gICAgICAgIH0pO1xyXG59IGNhdGNoKGVycil7XHJcbiAgICBjb25zb2xlLmVycm9yKCdVcHMhIFVuZXhwZWN0ZWQgZXhjZXB0aW9uIG9jY3VycmVkLi4uIDooICBcXG4nLCBlcnIpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
