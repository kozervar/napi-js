/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./utils');

var _NapijsOptions = require('./NapijsOptions');

var _NapijsOptions2 = _interopRequireDefault(_NapijsOptions);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

var _napijsCommand = require('./napijsCommand');

var _napijsCommand2 = _interopRequireDefault(_napijsCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = 'watch';

var describe = 'Watch directory for new files';

var builder = function builder(yargs) {
    return _napijsCommand2.default.builder(yargs).option('p', {
        alias: 'path',
        description: 'Path for file watcher. Path will be combined with file patterns from --files parameter',
        default: '.'
    });
};

var handler = function handler(argv) {
    try {
        var options = new _NapijsOptions2.default(argv);
        (0, _utils.fileWatcher)(options);
    } catch (err) {
        console.error('Ups! Unexpected exception occurred... :(  \n', err);
    }
};

exports.default = {
    command: command,
    describe: describe,
    builder: builder,
    handler: handler
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdGNoZXJDb21tYW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFJLFVBQVUsT0FBZDs7QUFFQSxJQUFJLFdBQVcsK0JBQWY7O0FBRUEsSUFBSSxVQUFVLFNBQVYsT0FBVSxDQUFTLEtBQVQsRUFBZTtBQUN6QixXQUFPLHdCQUNGLE9BREUsQ0FDTSxLQUROLEVBRUYsTUFGRSxDQUVLLEdBRkwsRUFFVTtBQUNULGVBQU8sTUFERTtBQUVULHFCQUFhLHdGQUZKO0FBR1QsaUJBQVM7QUFIQSxLQUZWLENBQVA7QUFRSCxDQVREOztBQVdBLElBQUksVUFBVSxTQUFWLE9BQVUsQ0FBVSxJQUFWLEVBQWdCO0FBQzFCLFFBQUk7QUFDQSxZQUFJLFVBQVUsNEJBQWtCLElBQWxCLENBQWQ7QUFDQSxnQ0FBWSxPQUFaO0FBQ0gsS0FIRCxDQUdFLE9BQU8sR0FBUCxFQUFZO0FBQ1YsZ0JBQVEsS0FBUixDQUFjLDhDQUFkLEVBQThELEdBQTlEO0FBQ0g7QUFDSixDQVBEOztrQkFTZTtBQUNYLGFBQVUsT0FEQztBQUVYLGNBQVcsUUFGQTtBQUdYLGFBQVUsT0FIQztBQUlYLGFBQVU7QUFKQyxDIiwiZmlsZSI6IndhdGNoZXJDb21tYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0yMS5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHsgZmlsZVdhdGNoZXIgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IE5hcGlqc09wdGlvbnMgZnJvbSAnLi9OYXBpanNPcHRpb25zJztcclxuaW1wb3J0IENPTlNUIGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgbmFwaWpzQ29tbWFuZCBmcm9tICcuL25hcGlqc0NvbW1hbmQnO1xyXG5cclxudmFyIGNvbW1hbmQgPSAnd2F0Y2gnO1xyXG5cclxudmFyIGRlc2NyaWJlID0gJ1dhdGNoIGRpcmVjdG9yeSBmb3IgbmV3IGZpbGVzJztcclxuXHJcbnZhciBidWlsZGVyID0gZnVuY3Rpb24oeWFyZ3Mpe1xyXG4gICAgcmV0dXJuIG5hcGlqc0NvbW1hbmRcclxuICAgICAgICAuYnVpbGRlcih5YXJncylcclxuICAgICAgICAub3B0aW9uKCdwJywge1xyXG4gICAgICAgICAgICBhbGlhczogJ3BhdGgnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BhdGggZm9yIGZpbGUgd2F0Y2hlci4gUGF0aCB3aWxsIGJlIGNvbWJpbmVkIHdpdGggZmlsZSBwYXR0ZXJucyBmcm9tIC0tZmlsZXMgcGFyYW1ldGVyJyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJy4nXHJcbiAgICAgICAgfSlcclxuICAgIDtcclxufTtcclxuXHJcbnZhciBoYW5kbGVyID0gZnVuY3Rpb24gKGFyZ3YpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBuZXcgTmFwaWpzT3B0aW9ucyhhcmd2KTtcclxuICAgICAgICBmaWxlV2F0Y2hlcihvcHRpb25zKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwcyEgVW5leHBlY3RlZCBleGNlcHRpb24gb2NjdXJyZWQuLi4gOiggIFxcbicsIGVycik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21tYW5kIDogY29tbWFuZCxcclxuICAgIGRlc2NyaWJlIDogZGVzY3JpYmUsXHJcbiAgICBidWlsZGVyIDogYnVpbGRlcixcclxuICAgIGhhbmRsZXIgOiBoYW5kbGVyXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
