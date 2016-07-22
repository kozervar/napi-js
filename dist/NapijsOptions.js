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
            var regexp = new RegExp(/^.[a-z4]*$/, 'gmi');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hcGlqc09wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU0sZUFBZSxLQUFyQjtBQUNBLElBQU0sbUJBQW1CLE1BQXpCO0FBQ0EsSUFBTSxtQkFBbUIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxFQUErQyxRQUEvQyxFQUF5RCxPQUF6RCxFQUFrRSxPQUFsRSxDQUF6Qjs7QUFFQTs7OztJQUdNLGE7O0FBRUY7Ozs7QUFJQSwyQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBSyxJQUFMLEdBQVksS0FBSyxRQUFMLElBQWlCLFlBQTdCO0FBQ0EsYUFBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLElBQWdCLEtBQS9CO0FBQ0EsYUFBSyxJQUFMLEdBQVksS0FBSyxJQUFMLElBQWEsRUFBekI7O0FBRUEsYUFBSyxLQUFMLEdBQWEsS0FBSyxLQUFMLElBQWMsZ0JBQTNCO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLGdCQUFqQjtBQUNBLGFBQUssU0FBTCxHQUFpQixLQUFLLElBQXRCOztBQUVBLGFBQUssU0FBTCxHQUFpQixLQUFLLElBQUwsSUFBYSxnQkFBOUI7O0FBRUEsYUFBSyxRQUFMO0FBQ0g7Ozs7bUNBRVM7QUFDTixnQkFBSSxTQUFTLElBQUksTUFBSixDQUFXLFlBQVgsRUFBeUIsS0FBekIsQ0FBYjtBQUNBLGdCQUFHLENBQUMsS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQzlCLHdCQUFRLEtBQVIsQ0FBYyxvQ0FBZDtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsZ0JBQWpCO0FBQ0g7QUFDRCxnQkFBRyxxQkFBRSxRQUFGLENBQVcsS0FBSyxLQUFoQixDQUFILEVBQTJCO0FBQ3ZCLHFCQUFLLEtBQUwsR0FBYSxDQUFDLEtBQUssS0FBTixDQUFiO0FBQ0g7QUFDSjs7Ozs7O2tCQUdVLGEiLCJmaWxlIjoiTmFwaWpzT3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCBfIGZyb20gJ3VuZGVyc2NvcmUnO1xyXG5jb25zdCBERUZBVUxUX0xBTkcgPSAnUE9MJztcclxuY29uc3QgREVGQVVMVF9TVUJTX0VYVCA9ICcuc3J0JztcclxuY29uc3QgREVGQVVMVF9HTE9CX0VYVCA9IFsnKi5ta3YnLCAnKi5hdmknLCAnKi5tcDQnLCAnKi5tcGVnJywgJyoud212JywgJyoucm12YicsICcqLm1vdicsICcqLm1wZyddO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgcGFzc2VkIHRvIG5hcGlqc1xyXG4gKi9cclxuY2xhc3MgTmFwaWpzT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciB3aXRoIHlhcmdzIGFyZ3VtZW50XHJcbiAgICAgKiBAcGFyYW0gYXJndiAtIHlhcmdzIGFyZ3ZcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXJndikge1xyXG4gICAgICAgIHRoaXMubGFuZyA9IGFyZ3YubGFuZ3VhZ2UgfHwgREVGQVVMVF9MQU5HO1xyXG4gICAgICAgIHRoaXMudmVyYm9zZSA9IGFyZ3YudmVyYm9zZSB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBhcmd2LmZpbGUgfHwgJyc7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBhcmd2LmZpbGVzIHx8IERFRkFVTFRfR0xPQl9FWFQ7XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBERUZBVUxUX1NVQlNfRVhUO1xyXG4gICAgICAgIHRoaXMub3ZlcndyaXRlID0gYXJndi5zYXZlO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoUGF0aCA9IGFyZ3YucGF0aCB8fCBERUZBVUxUX0dMT0JfRVhUO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICBsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXi5bYS16NF0qJC8sICdnbWknKTtcclxuICAgICAgICBpZighdGhpcy5leHRlbnNpb24ubWF0Y2gocmVnZXhwKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTdWJ0aXRsZXMgZXh0ZW5zaW9uIGlzIG5vdCBjb3JyZWN0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gREVGQVVMVF9TVUJTX0VYVDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoXy5pc1N0cmluZyh0aGlzLmZpbGVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzID0gW3RoaXMuZmlsZXNdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmFwaWpzT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
