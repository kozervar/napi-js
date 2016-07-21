/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        this.files = argv.f || ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];
        this.extension = argv.e || DEFAULT_SUBS_EXT;
        this.overwrite = argv.o || true;

        this.watchPath = argv.p || ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hcGlqc09wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7Ozs7O0FBRUEsSUFBTSxtQkFBbUIsTUFBekI7O0FBRUE7Ozs7SUFHTSxhOztBQUVGOzs7OztBQUlBLDJCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDZCxhQUFLLElBQUwsR0FBWSxLQUFLLENBQUwsSUFBVSxLQUF0QjtBQUNBLGFBQUssT0FBTCxHQUFlLEtBQUssT0FBTCxJQUFnQixLQUEvQjtBQUNBLGFBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxJQUFhLEVBQXpCO0FBQ0EsYUFBSyxLQUFMLEdBQWEsS0FBSyxDQUFMLElBQVUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxFQUErQyxRQUEvQyxFQUF5RCxPQUF6RCxFQUFrRSxPQUFsRSxDQUF2QjtBQUNBLGFBQUssU0FBTCxHQUFpQixLQUFLLENBQUwsSUFBVSxnQkFBM0I7QUFDQSxhQUFLLFNBQUwsR0FBaUIsS0FBSyxDQUFMLElBQVUsSUFBM0I7O0FBRUEsYUFBSyxTQUFMLEdBQWlCLEtBQUssQ0FBTCxJQUFVLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsRUFBc0MsT0FBdEMsRUFBK0MsUUFBL0MsRUFBeUQsT0FBekQsRUFBa0UsT0FBbEUsQ0FBM0I7O0FBRUEsYUFBSyxRQUFMO0FBQ0g7Ozs7bUNBRVM7QUFDTixnQkFBSSxTQUFTLElBQUksTUFBSixDQUFXLFlBQVgsRUFBeUIsS0FBekIsQ0FBYjtBQUNBLGdCQUFHLENBQUMsS0FBSyxTQUFMLENBQWUsS0FBZixDQUFxQixNQUFyQixDQUFKLEVBQWtDO0FBQzlCLHdCQUFRLEtBQVIsQ0FBYyxvQ0FBZDtBQUNBLHFCQUFLLFNBQUwsR0FBaUIsZ0JBQWpCO0FBQ0g7QUFDSjs7Ozs7O2tCQUdVLGEiLCJmaWxlIjoiTmFwaWpzT3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBERUZBVUxUX1NVQlNfRVhUID0gJy5zcnQnO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgcGFzc2VkIHRvIG5hcGlqc1xyXG4gKi9cclxuY2xhc3MgTmFwaWpzT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciB3aXRoIHlhcmdzIGFyZ3VtZW50XHJcbiAgICAgKiBAcGFyYW0gYXJndiAtIHlhcmdzIGFyZ3ZcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXJndikge1xyXG4gICAgICAgIHRoaXMubGFuZyA9IGFyZ3YubCB8fCAnUE9MJztcclxuICAgICAgICB0aGlzLnZlcmJvc2UgPSBhcmd2LnZlcmJvc2UgfHwgZmFsc2U7XHJcbiAgICAgICAgdGhpcy5maWxlID0gYXJndi5maWxlIHx8ICcnO1xyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBhcmd2LmYgfHwgWycqLm1rdicsICcqLmF2aScsICcqLm1wNCcsICcqLm1wZWcnLCAnKi53bXYnLCAnKi5ybXZiJywgJyoubW92JywgJyoubXBnJ107XHJcbiAgICAgICAgdGhpcy5leHRlbnNpb24gPSBhcmd2LmUgfHwgREVGQVVMVF9TVUJTX0VYVDtcclxuICAgICAgICB0aGlzLm92ZXJ3cml0ZSA9IGFyZ3YubyB8fCB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLndhdGNoUGF0aCA9IGFyZ3YucCB8fCBbJyoubWt2JywgJyouYXZpJywgJyoubXA0JywgJyoubXBlZycsICcqLndtdicsICcqLnJtdmInLCAnKi5tb3YnLCAnKi5tcGcnXTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCl7XHJcbiAgICAgICAgbGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoL14uW2EtejRdKiQvLCAnZ21pJyk7XHJcbiAgICAgICAgaWYoIXRoaXMuZXh0ZW5zaW9uLm1hdGNoKHJlZ2V4cCkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignU3VidGl0bGVzIGV4dGVuc2lvbiBpcyBub3QgY29ycmVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVuc2lvbiA9IERFRkFVTFRfU1VCU19FWFQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXBpanNPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
