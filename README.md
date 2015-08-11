Napi-js
=====

A Node.js library for downloading movie subtitles using the [NapiProjekt](http://www.napiprojekt.pl/) API.

## Usage
```bash
npm install napi-js
```

Next just do something like this:

```javascript
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
```

Napi-js uses [promises](https://github.com/kriskowal/q).

Subtitles are saved under the same directory and name as the movie file but with a _.txt_ extension.

## Command line usage

It's also possible to use `napijs` as a command line tool. To do so, install it as a global package:

```bash
npm i napijs -g
napijs path/to/video/file
```

License
--------

Copyright 2015 Marcin Kozaczyk MIT License (enclosed).
