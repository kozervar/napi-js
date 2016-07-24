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