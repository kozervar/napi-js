/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

/**
 * Options passed to napijs
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NapijsOptions =

/**
 * Constructor with yargs argument
 * @param argv - yargs argv
 */
function NapijsOptions(argv) {
  _classCallCheck(this, NapijsOptions);

  this.lang = argv.l;
  this.verbose = argv.verbose;
  this.files = argv.f;
  this.extension = 'srt';
};

exports.default = NapijsOptions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5hcGlqc09wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOztBQUVBOzs7Ozs7Ozs7O0lBR00sYTs7QUFFRjs7OztBQUlBLHVCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDZCxPQUFLLElBQUwsR0FBWSxLQUFLLENBQWpCO0FBQ0EsT0FBSyxPQUFMLEdBQWUsS0FBSyxPQUFwQjtBQUNBLE9BQUssS0FBTCxHQUFhLEtBQUssQ0FBbEI7QUFDQSxPQUFLLFNBQUwsR0FBaUIsS0FBakI7QUFDSCxDOztrQkFHVSxhIiwiZmlsZSI6Ik5hcGlqc09wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTIxLlxyXG4gKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuLyoqXHJcbiAqIE9wdGlvbnMgcGFzc2VkIHRvIG5hcGlqc1xyXG4gKi9cclxuY2xhc3MgTmFwaWpzT3B0aW9ucyB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdHJ1Y3RvciB3aXRoIHlhcmdzIGFyZ3VtZW50XHJcbiAgICAgKiBAcGFyYW0gYXJndiAtIHlhcmdzIGFyZ3ZcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoYXJndikge1xyXG4gICAgICAgIHRoaXMubGFuZyA9IGFyZ3YubDtcclxuICAgICAgICB0aGlzLnZlcmJvc2UgPSBhcmd2LnZlcmJvc2U7XHJcbiAgICAgICAgdGhpcy5maWxlcyA9IGFyZ3YuZjtcclxuICAgICAgICB0aGlzLmV4dGVuc2lvbiA9ICdzcnQnO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXBpanNPcHRpb25zIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
