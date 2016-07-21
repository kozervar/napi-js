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

var _watcherCommand = require('./watcherCommand');

var _watcherCommand2 = _interopRequireDefault(_watcherCommand);

var _napijsCommand = require('./napijsCommand');

var _napijsCommand2 = _interopRequireDefault(_napijsCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var argv = _yargs2.default.usage('$0 <cmd> [args]').command(_napijsCommand2.default).command(_watcherCommand2.default).version().help('help').alias('version', 'v').alias('help', 'h').epilog('For more information visit https://github.com/kozervar/napi-js').argv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7OztBQUdBOztBQUNBOztBQUNBOztJQUFZLEM7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJLE9BQU8sZ0JBQU0sS0FBTixDQUFZLGlCQUFaLEVBQ04sT0FETSwwQkFFTixPQUZNLDJCQUdOLE9BSE0sR0FJTixJQUpNLENBSUQsTUFKQyxFQUtOLEtBTE0sQ0FLQSxTQUxBLEVBS1csR0FMWCxFQU1OLEtBTk0sQ0FNQSxNQU5BLEVBTVEsR0FOUixFQU9OLE1BUE0sQ0FPQyxnRUFQRCxFQVFOLElBUkwiLCJmaWxlIjoiY21kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBwIGZyb20gJy4vLi4vcGFja2FnZS5qc29uJztcclxuaW1wb3J0IHlhcmdzIGZyb20gJ3lhcmdzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IENPTlNUIGZyb20gJy4vY29uc3QnO1xyXG5pbXBvcnQgd2F0Y2hlckNvbW1hbmQgZnJvbSAnLi93YXRjaGVyQ29tbWFuZCc7XHJcbmltcG9ydCBuYXBpanNDb21tYW5kIGZyb20gJy4vbmFwaWpzQ29tbWFuZCc7XHJcblxyXG52YXIgYXJndiA9IHlhcmdzLnVzYWdlKCckMCA8Y21kPiBbYXJnc10nKVxyXG4gICAgLmNvbW1hbmQobmFwaWpzQ29tbWFuZClcclxuICAgIC5jb21tYW5kKHdhdGNoZXJDb21tYW5kKVxyXG4gICAgLnZlcnNpb24oKVxyXG4gICAgLmhlbHAoJ2hlbHAnKVxyXG4gICAgLmFsaWFzKCd2ZXJzaW9uJywgJ3YnKVxyXG4gICAgLmFsaWFzKCdoZWxwJywgJ2gnKVxyXG4gICAgLmVwaWxvZygnRm9yIG1vcmUgaW5mb3JtYXRpb24gdmlzaXQgaHR0cHM6Ly9naXRodWIuY29tL2tvemVydmFyL25hcGktanMnKVxyXG4gICAgLmFyZ3Y7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
