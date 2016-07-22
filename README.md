Napi-js
=====

A Node.js library for downloading movie subtitles using the [NapiProjekt](http://www.napiprojekt.pl/) API.

## Usage
```bash
npm install napi-js
```

Next just do something like this (see examples directory):

```javascript
var napijs = require('napi-js');

var options = new NapijsOptions({ ... });
napijs.napijs(options)
    .then(()=>{
        console.log('Done!');
    })
    .catch((err)=>{
        console.error('Error occurred: ', err);
    });
    
```

Subtitles are saved under the same directory and name as the movie file.

Options
======

### Commands

There are two available commands:

* `download`: download subtitles from Napirpojekt server
* `watch`: watch directory for changes and if new file appears then download the subtitles

### napijs download

Options:

```bash
Options:
  --version, -v   Show version number  [boolean]
  --help, -h      Show help  [boolean]
  -l, --language  Set subtitles language. Available languages: POL, ENG  [choices: "POL", "ENG"] [default: "POL"]
  --verbose       Show output  [default: false]
  -f, --files     An array of files separated by space char. Glob expression allowed.
                  For more information visit: https://github.com/isaacs/node-glob  [array] [default: ["*.mkv","*.avi","*.mp4","*.mpeg","*.wmv","*.rmvb","*.mov","*.mpg"]]
  --file          Path to single file. If provided then --files argument is ignored
  -s, --save      Overwrite subtitles file if one exist  [boolean]
```

### napijs watch

Options:

```bash
Options:
  --version, -v   Show version number  [boolean]
  --help, -h      Show help  [boolean]
  -l, --language  Set subtitles language. Available languages: POL, ENG  [choices: "POL", "ENG"] [default: "POL"]
  --verbose       Show output  [default: false]
  -f, --files     An array of files separated by space char. Glob expression allowed.
                  For more information visit: https://github.com/isaacs/node-glob  [array] [default: ["*.mkv","*.avi","*.mp4","*.mpeg","*.wmv","*.rmvb","*.mov","*.mpg"]]
  --file          Path to single file. If provided then --files argument is ignored
  -s, --save      Overwrite subtitles file if one exist  [boolean]
  -p, --path      Path for file watcher. Path will be combined with file patterns from --files parameter  [default: "."]
```

Command line usage
========

It's also possible to use `napijs` as a command line tool. To do so, install it as a global package. Example:

```bash
  npm i napijs -g
  napijs -h

  napijs download -f "**.mkv"              Search subtitles for movies with .mkv
                                           extension in current folder
  napijs download -f "**/*.avi"            Search subtitles for movies with .avi
                                           extension in current folder and subfolders.
  napijs download -f "**.mkv" "**/*.avi"   This same but in one line.

```

Support
-------

I strongly suggest to support [Napiprojekt](http://www.napiprojekt.pl/wsparcie). They do a great job!

License
--------

Copyright 2016 Marcin Kozaczyk MIT License (enclosed).
