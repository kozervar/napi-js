'use strict';

var napijs = require('../napi-js');

napijs.downloadSubtitles('MY_MOVIE.mkv', napijs.LANGUAGE.POLISH).then(function (obj) {
        console.log(obj);
    }, function (err) {
        console.error(err);
    },
    function (progress) {
        console.info(progress);
    }
);
