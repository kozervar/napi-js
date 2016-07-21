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
import napijs from './napijs';
import NapijsOptions from './NapijsOptions';

var argv = yargs.usage('$0 <cmd> [args]')
    .version()
    .help('help')
    .alias('version', 'v')
    .alias('help', 'h')
    .option('l', {
        alias: 'language',
        description: 'Language. Available: POL, ENG',
        default: CONST.LANGUAGE.PL
    })
    .option('verbose', {
        description: 'verbose output',
        default: false
    })
    .option('f', {
        array: true,
        description: 'An array of files separated by space char. Glob expression allowed. For more information visit: https://github.com/isaacs/node-glob',
        alias: 'files',
        default: ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg']
    })
    .example('napijs -f "**.mkv" ', 'Search subtitles for movies with .mkv extension in current folder')
    .example('napijs -f "**/*.avi" ', 'Search subtitles for movies with .avi extension in current folder and subfolders.')
    .example('napijs -f "**.mkv" "**/*.avi" ', 'This same but in one line.')
    .epilog('For more information visit https://github.com/kozervar/napi-js')
    .argv;

napijs(new NapijsOptions(argv))
    .then(()=>{
        return 1;
    })
    .catch((err)=>{
        console.error('Error occurred: ', err);
        return -1;
    });