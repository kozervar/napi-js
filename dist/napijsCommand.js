/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./utils');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _napijs = require('./napijs');

var _napijs2 = _interopRequireDefault(_napijs);

var _NapijsOptions = require('./NapijsOptions');

var _NapijsOptions2 = _interopRequireDefault(_NapijsOptions);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = 'download';

var describe = 'Download subtitles';

var builder = function builder(yargs) {
    return yargs.option('l', {
        alias: 'language',
        description: 'Set subtitles language. Available languages: POL, ENG',
        default: _const2.default.LANGUAGE.PL,
        choices: _const2.default.LANGUAGE_ARRAY
    }).option('verbose', {
        description: 'Show output',
        default: false
    }).option('f', {
        array: true,
        description: 'An array of files separated by space char. Glob expression allowed.\nFor more information visit: https://github.com/isaacs/node-glob',
        alias: 'files',
        default: ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg']
    }).option('file', {
        array: false,
        description: 'Path to single file. If provided then --files argument is ignored'
    }).option('s', {
        boolean: true,
        description: 'Overwrite subtitles file if one exist',
        alias: 'save'
    });
};

var handler = function handler(argv) {
    try {
        var options = new _NapijsOptions2.default(argv);
        (0, _napijs2.default)(options).then(function () {}).catch(function (err) {
            console.error('Error occurred: ', err);
        });
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