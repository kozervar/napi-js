/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DEFAULT_LANG = 'POL';
var DEFAULT_SUBS_EXT = '.srt';
var DEFAULT_GLOB_EXT = ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];

/**
 * Options passed to napijs
 */

var NapijsOptions = function () {

    /**
     * Constructor with yargs argument
     * @param argv - yargs argv
     */
    function NapijsOptions(argv) {
        _classCallCheck(this, NapijsOptions);

        this.lang = argv.language || DEFAULT_LANG;
        this.verbose = argv.verbose || false;
        this.file = argv.file || '';

        this.files = argv.files || DEFAULT_GLOB_EXT;
        this.extension = DEFAULT_SUBS_EXT;
        this.overwrite = argv.save;

        this.watchPath = argv.path || DEFAULT_GLOB_EXT;

        this.validate();
    }

    _createClass(NapijsOptions, [{
        key: 'validate',
        value: function validate() {
            var regexp = new RegExp(/^.[a-z4]*$/gmi);
            if (!this.extension.match(regexp)) {
                console.error('Subtitles extension is not correct');
                this.extension = DEFAULT_SUBS_EXT;
            }
            if (_underscore2.default.isString(this.files)) {
                this.files = [this.files];
            }
        }
    }]);

    return NapijsOptions;
}();

exports.default = NapijsOptions;