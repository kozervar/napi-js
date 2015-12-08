#!/usr/bin/env node

'use strict';

var p = require('./../package.json');
var napijs = require('./..');
var argv = require('yargs');
var _ = require('lodash');
var LANGUAGE = require('./../languages');

argv = argv
    .usage('Usage: $0 [options]')
    .option('l', {
        alias: 'language',
        description: 'Language. Available: PL, EN',
        default: LANGUAGE.PL
    })
    .option('c', {
        alias: 'case-sensitive',
        description: 'case sensitive',
        default: false
    })
    .option('verbose', {
        description: 'verbose output',
        default: false
    })
    .option('h', {
        alias: 'help',
        description: 'display help message'
    })
    .option('f', { // document options.
        array: true, // even single values will be wrapped in [].
        description: 'An array of files separated by space char. Glob expression allowed. For more information visit: https://github.com/isaacs/node-glob',
        alias: 'files'
    })
    .version(p.version, 'version', 'display version information')
    .help('help')
    .alias('version', 'v')
    .example('napijs -f "**.mkv" ', 'Search subtitles for movies with .mkv extension in current folder')
    .example('napijs -f "**/*.avi" ', 'Search subtitles for movies with .avi extension in current folder and subfolders.')
    .example('napijs -f "**.mkv" "**/*.avi" ', 'This same but in one line.')
    .epilog('For more information visit https://github.com/kozervar/napi-js')
    .argv;

if (argv) {
    var o = {};
    if (_.isArray(argv.files))
        o.files = argv.files;
    o.language = argv.language;
    o.caseSensitive = argv.caseSensitive;
    o.verbose = argv.verbose;
    napijs(o);
} else {
    napijs();
}
