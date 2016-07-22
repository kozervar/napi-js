/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _utils = require('./utils');

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _napijs = require('./napijs');

var _napijs2 = _interopRequireDefault(_napijs);

var _NapijsOptions = require('./NapijsOptions');

var _NapijsOptions2 = _interopRequireDefault(_NapijsOptions);

var _const = require('./const');

var _const2 = _interopRequireDefault(_const);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var command = 'download';

var describe = 'Download subtitles';

var builder = function builder(yargs) {
    return yargs.option('l', {
        alias: 'language',
        description: 'Set subtitles language. Available languages: POL, ENG',
        default: _const2.default.LANGUAGE.PL,
        choices: _const2.default.LANGUAGE_ARRAY
    }).option('verbose', {
        description: 'Show output',
        default: false
    }).option('f', {
        array: true,
        description: 'An array of files separated by space char. Glob expression allowed.\nFor more information visit: https://github.com/isaacs/node-glob',
        alias: 'files',
        default: ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg']
    }).option('file', {
        array: false,
        description: 'Path to single file. If provided then --files argument is ignored'
    }).option('s', {
        boolean: true,
        description: 'Overwrite subtitles file if one exist',
        alias: 'save'
    });
};

var handler = function handler(argv) {
    try {
        var options = new _NapijsOptions2.default(argv);
        (0, _napijs2.default)(options).then(function () {}).catch(function (err) {
            console.error('Error occurred: ', err);
        });
    } catch (err) {
        console.error('Ups! Unexpected exception occurred... :(  \n', err);
    }
};

exports.default = {
    command: command,
    describe: describe,
    builder: builder,
    handler: handler
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hcGlqc0NvbW1hbmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBOzs7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBSSxVQUFVLFVBQWQ7O0FBRUEsSUFBSSxXQUFXLG9CQUFmOztBQUVBLElBQUksVUFBVSxTQUFWLE9BQVUsQ0FBUyxLQUFULEVBQWU7QUFDekIsV0FBTyxNQUNGLE1BREUsQ0FDSyxHQURMLEVBQ1U7QUFDVCxlQUFPLFVBREU7QUFFVCxxQkFBYSx1REFGSjtBQUdULGlCQUFTLGdCQUFNLFFBQU4sQ0FBZSxFQUhmO0FBSVQsaUJBQVMsZ0JBQU07QUFKTixLQURWLEVBT0YsTUFQRSxDQU9LLFNBUEwsRUFPZ0I7QUFDZixxQkFBYSxhQURFO0FBRWYsaUJBQVM7QUFGTSxLQVBoQixFQVdGLE1BWEUsQ0FXSyxHQVhMLEVBV1U7QUFDVCxlQUFPLElBREU7QUFFVCxxQkFBYSxzSUFGSjtBQUdULGVBQU8sT0FIRTtBQUlULGlCQUFTLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsRUFBNEIsUUFBNUIsRUFBc0MsT0FBdEMsRUFBK0MsUUFBL0MsRUFBeUQsT0FBekQsRUFBa0UsT0FBbEU7QUFKQSxLQVhWLEVBaUJGLE1BakJFLENBaUJLLE1BakJMLEVBaUJhO0FBQ1osZUFBTyxLQURLO0FBRVoscUJBQWE7QUFGRCxLQWpCYixFQXFCRixNQXJCRSxDQXFCSyxHQXJCTCxFQXFCVTtBQUNULGlCQUFTLElBREE7QUFFVCxxQkFBYSx1Q0FGSjtBQUdULGVBQU87QUFIRSxLQXJCVixDQUFQO0FBMkJILENBNUJEOztBQThCQSxJQUFJLFVBQVUsU0FBVixPQUFVLENBQVUsSUFBVixFQUFnQjtBQUMxQixRQUFJO0FBQ0EsWUFBSSxVQUFVLDRCQUFrQixJQUFsQixDQUFkO0FBQ0EsOEJBQU8sT0FBUCxFQUNLLElBREwsQ0FDVSxZQUFJLENBQ1QsQ0FGTCxFQUdLLEtBSEwsQ0FHVyxVQUFDLEdBQUQsRUFBTztBQUNWLG9CQUFRLEtBQVIsQ0FBYyxrQkFBZCxFQUFrQyxHQUFsQztBQUNILFNBTEw7QUFNSCxLQVJELENBUUUsT0FBTSxHQUFOLEVBQVU7QUFDUixnQkFBUSxLQUFSLENBQWMsOENBQWQsRUFBOEQsR0FBOUQ7QUFDSDtBQUNKLENBWkQ7O2tCQWNlO0FBQ1gsYUFBVSxPQURDO0FBRVgsY0FBVyxRQUZBO0FBR1gsYUFBVSxPQUhDO0FBSVgsYUFBVTtBQUpDLEMiLCJmaWxlIjoibmFwaWpzQ29tbWFuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMjEuXHJcbiAqL1xyXG4ndXNlIHN0cmljdCc7XHJcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcclxuaW1wb3J0IG5hcGlqcyBmcm9tICcuL25hcGlqcyc7XHJcbmltcG9ydCBOYXBpanNPcHRpb25zIGZyb20gJy4vTmFwaWpzT3B0aW9ucyc7XHJcbmltcG9ydCBDT05TVCBmcm9tICcuL2NvbnN0JztcclxuXHJcbnZhciBjb21tYW5kID0gJ2Rvd25sb2FkJztcclxuXHJcbnZhciBkZXNjcmliZSA9ICdEb3dubG9hZCBzdWJ0aXRsZXMnO1xyXG5cclxudmFyIGJ1aWxkZXIgPSBmdW5jdGlvbih5YXJncyl7XHJcbiAgICByZXR1cm4geWFyZ3NcclxuICAgICAgICAub3B0aW9uKCdsJywge1xyXG4gICAgICAgICAgICBhbGlhczogJ2xhbmd1YWdlJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTZXQgc3VidGl0bGVzIGxhbmd1YWdlLiBBdmFpbGFibGUgbGFuZ3VhZ2VzOiBQT0wsIEVORycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IENPTlNULkxBTkdVQUdFLlBMLFxyXG4gICAgICAgICAgICBjaG9pY2VzOiBDT05TVC5MQU5HVUFHRV9BUlJBWVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLm9wdGlvbigndmVyYm9zZScsIHtcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdTaG93IG91dHB1dCcsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3B0aW9uKCdmJywge1xyXG4gICAgICAgICAgICBhcnJheTogdHJ1ZSxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBbiBhcnJheSBvZiBmaWxlcyBzZXBhcmF0ZWQgYnkgc3BhY2UgY2hhci4gR2xvYiBleHByZXNzaW9uIGFsbG93ZWQuXFxuRm9yIG1vcmUgaW5mb3JtYXRpb24gdmlzaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9pc2FhY3Mvbm9kZS1nbG9iJyxcclxuICAgICAgICAgICAgYWxpYXM6ICdmaWxlcycsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFsnKi5ta3YnLCAnKi5hdmknLCAnKi5tcDQnLCAnKi5tcGVnJywgJyoud212JywgJyoucm12YicsICcqLm1vdicsICcqLm1wZyddXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3B0aW9uKCdmaWxlJywge1xyXG4gICAgICAgICAgICBhcnJheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUGF0aCB0byBzaW5nbGUgZmlsZS4gSWYgcHJvdmlkZWQgdGhlbiAtLWZpbGVzIGFyZ3VtZW50IGlzIGlnbm9yZWQnXHJcbiAgICAgICAgfSlcclxuICAgICAgICAub3B0aW9uKCdzJywge1xyXG4gICAgICAgICAgICBib29sZWFuOiB0cnVlLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ092ZXJ3cml0ZSBzdWJ0aXRsZXMgZmlsZSBpZiBvbmUgZXhpc3QnLFxyXG4gICAgICAgICAgICBhbGlhczogJ3NhdmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgICA7XHJcbn07XHJcblxyXG52YXIgaGFuZGxlciA9IGZ1bmN0aW9uIChhcmd2KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gbmV3IE5hcGlqc09wdGlvbnMoYXJndik7XHJcbiAgICAgICAgbmFwaWpzKG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQ6ICcsIGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaChlcnIpe1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwcyEgVW5leHBlY3RlZCBleGNlcHRpb24gb2NjdXJyZWQuLi4gOiggIFxcbicsIGVycik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBjb21tYW5kIDogY29tbWFuZCxcclxuICAgIGRlc2NyaWJlIDogZGVzY3JpYmUsXHJcbiAgICBidWlsZGVyIDogYnVpbGRlcixcclxuICAgIGhhbmRsZXIgOiBoYW5kbGVyXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
