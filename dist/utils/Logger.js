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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBR0E7Ozs7OztBQUNBOztJQUFZLE87Ozs7QUFFWixJQUFJLFNBQVMsSUFBSyxRQUFRLE1BQWIsQ0FBcUI7QUFDOUIsZ0JBQVksQ0FDUixJQUFLLFFBQVEsVUFBUixDQUFtQixPQUF4QixDQUFpQztBQUM3QiwwQkFBa0IsSUFEVztBQUU3QixjQUFNLEtBRnVCO0FBRzdCLGVBQU8sT0FIc0I7QUFJN0IsbUJBQVcscUJBQVc7QUFDbEIsbUJBQU8sS0FBSyxHQUFMLEVBQVA7QUFDSCxTQU40QjtBQU83QixtQkFBVyxtQkFBUyxPQUFULEVBQWtCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1CQUFPLE9BQU8sY0FBYyxRQUFRLE9BQXRCLEdBQWdDLFFBQVEsT0FBeEMsR0FBa0QsRUFBekQsS0FBZ0UsUUFBUSxJQUFSLElBQWdCLE9BQU8sSUFBUCxDQUFZLFFBQVEsSUFBcEIsRUFBMEIsTUFBMUMsR0FBbUQsU0FBUSxLQUFLLFNBQUwsQ0FBZSxRQUFRLElBQXZCLENBQTNELEdBQTBGLEVBQTFKLENBQVA7QUFDSCxTQVo0QjtBQWE3QixrQkFBVTtBQWJtQixLQUFqQyxDQURRO0FBRGtCLENBQXJCLENBQWI7O2tCQW9CZSxNIiwiZmlsZSI6InV0aWxzL0xvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBrb3plcnZhciBvbiAyMDE2LTA3LTE4LlxuICovXG4ndXNlIHN0cmljdCc7XG5pbXBvcnQgKiBhcyB3aW5zdG9uIGZyb20gJ3dpbnN0b24nO1xuXG52YXIgbG9nZ2VyID0gbmV3ICh3aW5zdG9uLkxvZ2dlcikoe1xuICAgIHRyYW5zcG9ydHM6IFtcbiAgICAgICAgbmV3ICh3aW5zdG9uLnRyYW5zcG9ydHMuQ29uc29sZSkoe1xuICAgICAgICAgICAgaGFuZGxlRXhjZXB0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgIGpzb246IGZhbHNlLFxuICAgICAgICAgICAgbGV2ZWw6ICdkZWJ1ZycsXG4gICAgICAgICAgICB0aW1lc3RhbXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIFJldHVybiBzdHJpbmcgd2lsbCBiZSBwYXNzZWQgdG8gbG9nZ2VyLlxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIG9wdGlvbnMudGltZXN0YW1wKCkgKycgJysgb3B0aW9ucy5sZXZlbC50b1VwcGVyQ2FzZSgpICsnICcrICh1bmRlZmluZWQgIT09IG9wdGlvbnMubWVzc2FnZSA/IG9wdGlvbnMubWVzc2FnZSA6ICcnKSArXG4gICAgICAgICAgICAgICAgLy8gICAgKG9wdGlvbnMubWV0YSAmJiBPYmplY3Qua2V5cyhvcHRpb25zLm1ldGEpLmxlbmd0aCA/ICdcXG5cXHQnKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLm1ldGEpIDogJycgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyAnICsgKHVuZGVmaW5lZCAhPT0gb3B0aW9ucy5tZXNzYWdlID8gb3B0aW9ucy5tZXNzYWdlIDogJycpICsgKG9wdGlvbnMubWV0YSAmJiBPYmplY3Qua2V5cyhvcHRpb25zLm1ldGEpLmxlbmd0aCA/ICdcXG5cXHQnKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLm1ldGEpIDogJycgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb2xvcml6ZTogdHJ1ZVxuICAgICAgICB9KVxuICAgIF1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBsb2dnZXIiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
