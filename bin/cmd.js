#!/usr/bin/env node
'use strict';

var napijs = require('./..');

var fileName = process.argv[2];

if (!fileName) {
  console.log('Not enough parameters. Usage:');
  console.log('> napijs path/to/file');
  return;
}
napijs.downloadSubtitles(fileName, napijs.LANGUAGE.POLISH).then(function (obj) {
        console.log(obj);
    }, function (err) {
        console.error(err);
    },
    function (progress) {
        console.info(progress);
    }
);
