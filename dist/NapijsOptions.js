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

var DEFAULT_SUBS_EXT = '.srt';

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

        this.lang = argv.l || 'POL';
        this.verbose = argv.verbose || false;
        this.file = argv.file || '';
        if (_underscore2.default.isString(argv.f)) {
            argv.f = [argv.f];
        }
        this.files = argv.f || ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];
        this.extension = argv.e || DEFAULT_SUBS_EXT;
        this.overwrite = argv.save;

        this.watchPath = argv.path || ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];

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
        }
    }]);

    return NapijsOptions;
}();

exports.default = NapijsOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hcGlqc09wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7OztBQUNBOzs7Ozs7OztBQUNBLElBQU0sbUJBQW1CLE1BQXpCOztBQUVBOzs7O0lBR00sYTs7QUFFRjs7Ozs7QUFJQSwyQkFBWSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsYUFBSyxJQUFMLEdBQVksS0FBSyxDQUFMLElBQVUsS0FBdEI7QUFDQSxhQUFLLE9BQUwsR0FBZSxLQUFLLE9BQUwsSUFBZ0IsS0FBL0I7QUFDQSxhQUFLLElBQUwsR0FBWSxLQUFLLElBQUwsSUFBYSxFQUF6QjtBQUNBLFlBQUcscUJBQUUsUUFBRixDQUFXLEtBQUssQ0FBaEIsQ0FBSCxFQUF1QjtBQUNuQixpQkFBSyxDQUFMLEdBQVMsQ0FBQyxLQUFLLENBQU4sQ0FBVDtBQUNIO0FBQ0QsYUFBSyxLQUFMLEdBQWEsS0FBSyxDQUFMLElBQVUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxFQUErQyxRQUEvQyxFQUF5RCxPQUF6RCxFQUFrRSxPQUFsRSxDQUF2QjtBQUNBLGFBQUssU0FBTCxHQUFpQixLQUFLLENBQUwsSUFBVSxnQkFBM0I7QUFDQSxhQUFLLFNBQUwsR0FBaUIsS0FBSyxJQUF0Qjs7QUFFQSxhQUFLLFNBQUwsR0FBaUIsS0FBSyxJQUFMLElBQWEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxFQUErQyxRQUEvQyxFQUF5RCxPQUF6RCxFQUFrRSxPQUFsRSxDQUE5Qjs7QUFFQSxhQUFLLFFBQUw7QUFDSDs7OzttQ0FFUztBQUNOLGdCQUFJLFNBQVMsSUFBSSxNQUFKLENBQVcsWUFBWCxFQUF5QixLQUF6QixDQUFiO0FBQ0EsZ0JBQUcsQ0FBQyxLQUFLLFNBQUwsQ0FBZSxLQUFmLENBQXFCLE1BQXJCLENBQUosRUFBa0M7QUFDOUIsd0JBQVEsS0FBUixDQUFjLG9DQUFkO0FBQ0EscUJBQUssU0FBTCxHQUFpQixnQkFBakI7QUFDSDtBQUNKOzs7Ozs7a0JBR1UsYSIsImZpbGUiOiJOYXBpanNPcHRpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0yMS5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IF8gZnJvbSAndW5kZXJzY29yZSc7XHJcbmNvbnN0IERFRkFVTFRfU1VCU19FWFQgPSAnLnNydCc7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBwYXNzZWQgdG8gbmFwaWpzXHJcbiAqL1xyXG5jbGFzcyBOYXBpanNPcHRpb25zIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENvbnN0cnVjdG9yIHdpdGggeWFyZ3MgYXJndW1lbnRcclxuICAgICAqIEBwYXJhbSBhcmd2IC0geWFyZ3MgYXJndlxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3Rvcihhcmd2KSB7XHJcbiAgICAgICAgdGhpcy5sYW5nID0gYXJndi5sIHx8ICdQT0wnO1xyXG4gICAgICAgIHRoaXMudmVyYm9zZSA9IGFyZ3YudmVyYm9zZSB8fCBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpbGUgPSBhcmd2LmZpbGUgfHwgJyc7XHJcbiAgICAgICAgaWYoXy5pc1N0cmluZyhhcmd2LmYpKSB7XHJcbiAgICAgICAgICAgIGFyZ3YuZiA9IFthcmd2LmZdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbGVzID0gYXJndi5mIHx8IFsnKi5ta3YnLCAnKi5hdmknLCAnKi5tcDQnLCAnKi5tcGVnJywgJyoud212JywgJyoucm12YicsICcqLm1vdicsICcqLm1wZyddO1xyXG4gICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gYXJndi5lIHx8IERFRkFVTFRfU1VCU19FWFQ7XHJcbiAgICAgICAgdGhpcy5vdmVyd3JpdGUgPSBhcmd2LnNhdmU7XHJcblxyXG4gICAgICAgIHRoaXMud2F0Y2hQYXRoID0gYXJndi5wYXRoIHx8IFsnKi5ta3YnLCAnKi5hdmknLCAnKi5tcDQnLCAnKi5tcGVnJywgJyoud212JywgJyoucm12YicsICcqLm1vdicsICcqLm1wZyddO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKXtcclxuICAgICAgICBsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXi5bYS16NF0qJC8sICdnbWknKTtcclxuICAgICAgICBpZighdGhpcy5leHRlbnNpb24ubWF0Y2gocmVnZXhwKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTdWJ0aXRsZXMgZXh0ZW5zaW9uIGlzIG5vdCBjb3JyZWN0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0ZW5zaW9uID0gREVGQVVMVF9TVUJTX0VYVDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hcGlqc09wdGlvbnMiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
