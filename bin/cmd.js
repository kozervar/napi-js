#!/usr/bin/env node
'use strict';

var napijs = require('./..');
var minimist = require('minimist');

// var fileName = process.argv[2];

console.log(minimist(process.argv.slice(2)))

napijs();
