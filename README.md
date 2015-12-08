Napi-js
=====

A Node.js library for downloading movie subtitles using the [NapiProjekt](http://www.napiprojekt.pl/) API.

## Usage
```bash
npm install napi-js
```

Next just do something like this (see examples directory):

```javascript
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
```

Napi-js uses [promises](https://github.com/kriskowal/q).

Subtitles are saved under the same directory and name as the movie file but with a _.txt_ extension.

## Options

|Option|Description|Default value|
|------|:----------|:------------|
|language|Language: PL or EN|PL|
|caseSensitive| Case sensitive Glob expression|false|
|verbose|Verbose output|false|
|files|Array with [Glob](https://github.com/isaacs/node-glob) expression|['\*.mkv', '\*.avi', '\*.mp4']|

## Command line usage

It's also possible to use `napijs` as a command line tool. To do so, install it as a global package. Example:

```bash
npm i napijs -g
napijs -h
Usage: napijs [options]

Options:
  -l, --language        Language. Available: PL, EN
  -c, --case-sensitive  case sensitive                          [default: false]
  --verbose             verbose output                          [default: false]
  -h, --help            Show help                                      [boolean]
  -f, --files           An array of files separated by space char. Glob
                        expression allowed. For more information visit:
                        https://github.com/isaacs/node-glob              [array]
  --version, -v         display version information                    [boolean]

Examples:
  napijs -f "**.mkv"              Search subtitles for movies with .mkv
                                  extension in current folder
  napijs -f "**/*.avi"            Search subtitles for movies with .avi
                                  extension in current folder and subfolders.
  napijs -f "**.mkv" "**/*.avi"   This same but in one line.

```

License
--------

Copyright 2015 Marcin Kozaczyk MIT License (enclosed).
