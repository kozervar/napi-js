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
    description: 'Overwrite subtitle file ifs one exists',
    alias: 'overwrite',
    default: true
}).example('napijs -f "**.mkv" ', 'Search subtitles for movies with .mkv extension in current folder').example('napijs -f "**/*.avi" ', 'Search subtitles for movies with .avi extension in current folder and subfolders.').example('napijs -f "**.mkv" "**/*.avi" ', 'This same but in one line.').epilog('For more information visit https://github.com/kozervar/napi-js').argv;

try {

    var options = new _NapijsOptions2.default(argv);
    options.watchPath = 'D:/torrent';
    (0, _utils.fileWatcher)(options);
} catch (err) {
    console.error('Ups! Unexpected exception occurred... :(  \n', err);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7O0FBR0E7O0FBQ0E7O0FBQ0E7O0lBQVksQzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFHQSxJQUFJLE9BQU8sZ0JBQU0sS0FBTixDQUFZLGlCQUFaLEVBQ04sT0FETSxHQUVOLElBRk0sQ0FFRCxNQUZDLEVBR04sS0FITSxDQUdBLFNBSEEsRUFHVyxHQUhYLEVBSU4sS0FKTSxDQUlBLE1BSkEsRUFJUSxHQUpSLEVBS04sTUFMTSxDQUtDLEdBTEQsRUFLTTtBQUNULFdBQU8sVUFERTtBQUVULGlCQUFhLCtCQUZKO0FBR1QsYUFBUyxnQkFBTSxRQUFOLENBQWU7QUFIZixDQUxOLEVBVU4sTUFWTSxDQVVDLFNBVkQsRUFVWTtBQUNmLGlCQUFhLGdCQURFO0FBRWYsYUFBUztBQUZNLENBVlosRUFjTixNQWRNLENBY0MsR0FkRCxFQWNNO0FBQ1QsV0FBTyxJQURFO0FBRVQsaUJBQWEscUlBRko7QUFHVCxXQUFPLE9BSEU7QUFJVCxhQUFTLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsRUFBc0MsT0FBdEMsRUFBK0MsUUFBL0MsRUFBeUQsT0FBekQsRUFBa0UsT0FBbEU7QUFKQSxDQWROLEVBb0JOLE1BcEJNLENBb0JDLE1BcEJELEVBb0JTO0FBQ1osV0FBTyxLQURLO0FBRVosaUJBQWE7QUFGRCxDQXBCVCxFQXdCTixNQXhCTSxDQXdCQyxHQXhCRCxFQXdCTTtBQUNULGlCQUFhLHdDQURKO0FBRVQsV0FBTyxXQUZFO0FBR1QsYUFBUztBQUhBLENBeEJOLEVBNkJOLE9BN0JNLENBNkJFLHFCQTdCRixFQTZCeUIsbUVBN0J6QixFQThCTixPQTlCTSxDQThCRSx1QkE5QkYsRUE4QjJCLG1GQTlCM0IsRUErQk4sT0EvQk0sQ0ErQkUsZ0NBL0JGLEVBK0JvQyw0QkEvQnBDLEVBZ0NOLE1BaENNLENBZ0NDLGdFQWhDRCxFQWlDTixJQWpDTDs7QUFtQ0EsSUFBSTs7QUFFQSxRQUFJLFVBQVUsNEJBQWtCLElBQWxCLENBQWQ7QUFDQSxZQUFRLFNBQVIsR0FBb0IsWUFBcEI7QUFDQSw0QkFBWSxPQUFaO0FBQ0gsQ0FMRCxDQUtFLE9BQU8sR0FBUCxFQUFZO0FBQ1YsWUFBUSxLQUFSLENBQWMsOENBQWQsRUFBOEQsR0FBOUQ7QUFDSCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTIxLlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0ICogYXMgcCBmcm9tICcuLy4uL3BhY2thZ2UuanNvbic7XHJcbmltcG9ydCB5YXJncyBmcm9tICd5YXJncyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBDT05TVCBmcm9tICcuL2NvbnN0JztcclxuaW1wb3J0IE5hcGlqc09wdGlvbnMgZnJvbSAnLi9OYXBpanNPcHRpb25zJztcclxuaW1wb3J0IHsgZmlsZVdhdGNoZXIgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbnZhciBhcmd2ID0geWFyZ3MudXNhZ2UoJyQwIDxjbWQ+IFthcmdzXScpXHJcbiAgICAudmVyc2lvbigpXHJcbiAgICAuaGVscCgnaGVscCcpXHJcbiAgICAuYWxpYXMoJ3ZlcnNpb24nLCAndicpXHJcbiAgICAuYWxpYXMoJ2hlbHAnLCAnaCcpXHJcbiAgICAub3B0aW9uKCdsJywge1xyXG4gICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnTGFuZ3VhZ2UuIEF2YWlsYWJsZTogUE9MLCBFTkcnLFxyXG4gICAgICAgIGRlZmF1bHQ6IENPTlNULkxBTkdVQUdFLlBMXHJcbiAgICB9KVxyXG4gICAgLm9wdGlvbigndmVyYm9zZScsIHtcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ3ZlcmJvc2Ugb3V0cHV0JyxcclxuICAgICAgICBkZWZhdWx0OiBmYWxzZVxyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ2YnLCB7XHJcbiAgICAgICAgYXJyYXk6IHRydWUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdBbiBhcnJheSBvZiBmaWxlcyBzZXBhcmF0ZWQgYnkgc3BhY2UgY2hhci4gR2xvYiBleHByZXNzaW9uIGFsbG93ZWQuIEZvciBtb3JlIGluZm9ybWF0aW9uIHZpc2l0OiBodHRwczovL2dpdGh1Yi5jb20vaXNhYWNzL25vZGUtZ2xvYicsXHJcbiAgICAgICAgYWxpYXM6ICdmaWxlcycsXHJcbiAgICAgICAgZGVmYXVsdDogWycqLm1rdicsICcqLmF2aScsICcqLm1wNCcsICcqLm1wZWcnLCAnKi53bXYnLCAnKi5ybXZiJywgJyoubW92JywgJyoubXBnJ11cclxuICAgIH0pXHJcbiAgICAub3B0aW9uKCdmaWxlJywge1xyXG4gICAgICAgIGFycmF5OiBmYWxzZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1NpbmdsZSBmaWxlJ1xyXG4gICAgfSlcclxuICAgIC5vcHRpb24oJ28nLCB7XHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdPdmVyd3JpdGUgc3VidGl0bGUgZmlsZSBpZnMgb25lIGV4aXN0cycsXHJcbiAgICAgICAgYWxpYXM6ICdvdmVyd3JpdGUnLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgIH0pXHJcbiAgICAuZXhhbXBsZSgnbmFwaWpzIC1mIFwiKioubWt2XCIgJywgJ1NlYXJjaCBzdWJ0aXRsZXMgZm9yIG1vdmllcyB3aXRoIC5ta3YgZXh0ZW5zaW9uIGluIGN1cnJlbnQgZm9sZGVyJylcclxuICAgIC5leGFtcGxlKCduYXBpanMgLWYgXCIqKi8qLmF2aVwiICcsICdTZWFyY2ggc3VidGl0bGVzIGZvciBtb3ZpZXMgd2l0aCAuYXZpIGV4dGVuc2lvbiBpbiBjdXJyZW50IGZvbGRlciBhbmQgc3ViZm9sZGVycy4nKVxyXG4gICAgLmV4YW1wbGUoJ25hcGlqcyAtZiBcIioqLm1rdlwiIFwiKiovKi5hdmlcIiAnLCAnVGhpcyBzYW1lIGJ1dCBpbiBvbmUgbGluZS4nKVxyXG4gICAgLmVwaWxvZygnRm9yIG1vcmUgaW5mb3JtYXRpb24gdmlzaXQgaHR0cHM6Ly9naXRodWIuY29tL2tvemVydmFyL25hcGktanMnKVxyXG4gICAgLmFyZ3Y7XHJcblxyXG50cnkge1xyXG5cclxuICAgIHZhciBvcHRpb25zID0gbmV3IE5hcGlqc09wdGlvbnMoYXJndik7XHJcbiAgICBvcHRpb25zLndhdGNoUGF0aCA9ICdEOi90b3JyZW50JztcclxuICAgIGZpbGVXYXRjaGVyKG9wdGlvbnMpO1xyXG59IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ1VwcyEgVW5leHBlY3RlZCBleGNlcHRpb24gb2NjdXJyZWQuLi4gOiggIFxcbicsIGVycik7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
