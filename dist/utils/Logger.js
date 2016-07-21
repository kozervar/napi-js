/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _winston = require('winston');

var winston = _interopRequireWildcard(_winston);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logger = new winston.Logger({
    transports: [new winston.transports.Console({
        handleExceptions: true,
        json: false,
        level: 'debug',
        timestamp: function timestamp() {
            return Date.now();
        },
        formatter: function formatter(options) {
            // Return string will be passed to logger.
            //return options.timestamp() +' '+ options.level.toUpperCase() +' '+ (undefined !== options.message ? options.message : '') +
            //    (options.meta && Object.keys(options.meta).length ? '\n\t'+ JSON.stringify(options.meta) : '' );
            return ' ' + (undefined !== options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? '\n\t' + JSON.stringify(options.meta) : '');
        },
        colorize: true
    })]
});

exports.default = logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7Ozs7OztBQUNBOztJQUFZLE87Ozs7QUFFWixJQUFJLFNBQVMsSUFBSyxRQUFRLE1BQWIsQ0FBcUI7QUFDOUIsZ0JBQVksQ0FDUixJQUFLLFFBQVEsVUFBUixDQUFtQixPQUF4QixDQUFpQztBQUM3QiwwQkFBa0IsSUFEVztBQUU3QixjQUFNLEtBRnVCO0FBRzdCLGVBQU8sT0FIc0I7QUFJN0IsbUJBQVcscUJBQVc7QUFDbEIsbUJBQU8sS0FBSyxHQUFMLEVBQVA7QUFDSCxTQU40QjtBQU83QixtQkFBVyxtQkFBUyxPQUFULEVBQWtCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1CQUFPLE9BQU8sY0FBYyxRQUFRLE9BQXRCLEdBQWdDLFFBQVEsT0FBeEMsR0FBa0QsRUFBekQsS0FBZ0UsUUFBUSxJQUFSLElBQWdCLE9BQU8sSUFBUCxDQUFZLFFBQVEsSUFBcEIsRUFBMEIsTUFBMUMsR0FBbUQsU0FBUSxLQUFLLFNBQUwsQ0FBZSxRQUFRLElBQXZCLENBQTNELEdBQTBGLEVBQTFKLENBQVA7QUFDSCxTQVo0QjtBQWE3QixrQkFBVTtBQWJtQixLQUFqQyxDQURRO0FBRGtCLENBQXJCLENBQWI7O2tCQW9CZSxNIiwiZmlsZSI6InV0aWxzL0xvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMTguXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XHJcblxyXG52YXIgbG9nZ2VyID0gbmV3ICh3aW5zdG9uLkxvZ2dlcikoe1xyXG4gICAgdHJhbnNwb3J0czogW1xyXG4gICAgICAgIG5ldyAod2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUpKHtcclxuICAgICAgICAgICAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAganNvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIGxldmVsOiAnZGVidWcnLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHN0cmluZyB3aWxsIGJlIHBhc3NlZCB0byBsb2dnZXIuXHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBvcHRpb25zLnRpbWVzdGFtcCgpICsnICcrIG9wdGlvbnMubGV2ZWwudG9VcHBlckNhc2UoKSArJyAnKyAodW5kZWZpbmVkICE9PSBvcHRpb25zLm1lc3NhZ2UgPyBvcHRpb25zLm1lc3NhZ2UgOiAnJykgK1xyXG4gICAgICAgICAgICAgICAgLy8gICAgKG9wdGlvbnMubWV0YSAmJiBPYmplY3Qua2V5cyhvcHRpb25zLm1ldGEpLmxlbmd0aCA/ICdcXG5cXHQnKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLm1ldGEpIDogJycgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnICcgKyAodW5kZWZpbmVkICE9PSBvcHRpb25zLm1lc3NhZ2UgPyBvcHRpb25zLm1lc3NhZ2UgOiAnJykgKyAob3B0aW9ucy5tZXRhICYmIE9iamVjdC5rZXlzKG9wdGlvbnMubWV0YSkubGVuZ3RoID8gJ1xcblxcdCcrIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMubWV0YSkgOiAnJyApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2xvcml6ZTogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICBdXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
