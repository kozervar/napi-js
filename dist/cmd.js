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