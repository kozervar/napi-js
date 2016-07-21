#!/usr/bin/env node
/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';
import { logger } from './utils';
import * as p from './../package.json';
import yargs from 'yargs';
import _ from 'lodash';
import CONST from './const';
import watcherCommand from './watcherCommand';
import napijsCommand from './napijsCommand';

var argv = yargs.usage('$0 <cmd> [args]')
    .command(napijsCommand)
    .command(watcherCommand)
    .version()
    .help('help')
    .alias('version', 'v')
    .alias('help', 'h')
    .epilog('For more information visit https://github.com/kozervar/napi-js')
    .argv;