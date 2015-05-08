Napi-js
=====

Node.js library for downloading movie subtitles using NapiProjekt API.

Usage
--------

    node install napi-js

Next just do something like that:
 
    
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

Napi-js use [promises](https://github.com/kriskowal/q).

License
--------

Copyright 2015 Marcin Kozaczyk MIT License (enclosed).

