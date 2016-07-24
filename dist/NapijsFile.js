/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

/**
 * Napijs file passed to napijs
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NapijsFile =

/**
 * Constructor
 * @param fileName
 */
function NapijsFile(fileName) {
  _classCallCheck(this, NapijsFile);

  this.subtitleFileName = '';
  this.subtitlesPresent = false;
  this.file = fileName;
  this.hash = '';
  this.bytes = -1;
  this.responseString = '';
};

exports.default = NapijsFile;