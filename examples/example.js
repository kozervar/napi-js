'use strict';

var napijs = require('../napi-js');

napijs({files: ['*.mkv']}).then(function (subFileNames) {
        console.log(subFileNames);
    }, function (err) {
        console.error(err);
    },
    function (progress) {
        console.info(progress);
    }
);
