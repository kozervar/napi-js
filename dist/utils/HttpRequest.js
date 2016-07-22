/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _querystring = require('querystring');

var _querystring2 = _interopRequireDefault(_querystring);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpRequest = function () {
    function HttpRequest(options, fileWithHash) {
        _classCallCheck(this, HttpRequest);

        this.fileWithHash = fileWithHash;
        this.postData = _querystring2.default.stringify({
            //'mode': '32',
            //'client': 'AutoMove',
            //'client_ver': '1.0',
            //'downloaded_subtitles_id': this.fileWithHash.hash,
            //'downloaded_subtitles_lang': 'PL',
            //'downloaded_subtitles_txt': '2',
            //'advert_type': 'flashAllowed',
            //'video_info_hash': this.fileWithHash.hash,
            //'nazwa_pliku': this.fileWithHash.file,
            //'rozmiar_pliku_bajty': this.fileWithHash.bytes,
            //'the': 'end'
            'downloaded_subtitles_lang': options.lang,
            'downloaded_subtitles_txt': '1',
            'client_ver': '2.2.0.2399',
            'downloaded_subtitles_id': this.fileWithHash.hash,
            'client': 'Napiprojekt',
            'mode': '1'
        });
        this.postOptions = {
            host: 'www.napiprojekt.pl',
            port: '80',
            path: '/api/api-napiprojekt3.php',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': this.postData.length
            }
        };
    }

    _createClass(HttpRequest, [{
        key: 'request',
        value: function request() {
            var _this = this;

            return new Promise(function (resolve, reject) {
                var req = _http2.default.request(_this.postOptions, function (response) {
                    _this.processResponse(resolve, response);
                });
                req.on('error', function (e) {
                    reject(e);
                });
                req.write(_this.postData);
                req.end();
            });
        }
    }, {
        key: 'processResponse',
        value: function processResponse(resolve, res) {
            var _this2 = this;

            res.setEncoding('utf-8');
            var responseString = '';
            res.on('data', function (data) {
                responseString += data;
            });
            res.on('end', function () {
                _this2.fileWithHash.responseString = responseString;
                resolve(_this2.fileWithHash);
            });
        }
    }]);

    return HttpRequest;
}();

exports.default = HttpRequest;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0h0dHBSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNLFc7QUFDRix5QkFBWSxPQUFaLEVBQXFCLFlBQXJCLEVBQWtDO0FBQUE7O0FBQzlCLGFBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLGFBQUssUUFBTCxHQUFnQixzQkFBWSxTQUFaLENBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBNkIsUUFBUSxJQVpIO0FBYWxDLHdDQUE0QixHQWJNO0FBY2xDLDBCQUFjLFlBZG9CO0FBZWxDLHVDQUEyQixLQUFLLFlBQUwsQ0FBa0IsSUFmWDtBQWdCbEMsc0JBQVUsYUFoQndCO0FBaUJsQyxvQkFBUTtBQWpCMEIsU0FBdEIsQ0FBaEI7QUFtQkEsYUFBSyxXQUFMLEdBQW1CO0FBQ2Ysa0JBQU0sb0JBRFM7QUFFZixrQkFBTSxJQUZTO0FBR2Ysa0JBQU0sMkJBSFM7QUFJZixvQkFBUSxNQUpPO0FBS2YscUJBQVM7QUFDTCxnQ0FBZ0IsbUNBRFg7QUFFTCxrQ0FBa0IsS0FBSyxRQUFMLENBQWM7QUFGM0I7QUFMTSxTQUFuQjtBQVVIOzs7O2tDQUVRO0FBQUE7O0FBQ0wsbUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVMsTUFBVCxFQUFrQjtBQUNqQyxvQkFBSSxNQUFNLGVBQUssT0FBTCxDQUFhLE1BQUssV0FBbEIsRUFBK0IsVUFBQyxRQUFELEVBQVk7QUFDakQsMEJBQUssZUFBTCxDQUFxQixPQUFyQixFQUE4QixRQUE5QjtBQUNILGlCQUZTLENBQVY7QUFHQSxvQkFBSSxFQUFKLENBQU8sT0FBUCxFQUFnQixVQUFVLENBQVYsRUFBYTtBQUN6QiwyQkFBTyxDQUFQO0FBQ0gsaUJBRkQ7QUFHQSxvQkFBSSxLQUFKLENBQVUsTUFBSyxRQUFmO0FBQ0Esb0JBQUksR0FBSjtBQUNILGFBVE0sQ0FBUDtBQVVIOzs7d0NBRWUsTyxFQUFTLEcsRUFBSTtBQUFBOztBQUN6QixnQkFBSSxXQUFKLENBQWdCLE9BQWhCO0FBQ0EsZ0JBQUksaUJBQWlCLEVBQXJCO0FBQ0EsZ0JBQUksRUFBSixDQUFPLE1BQVAsRUFBZSxVQUFDLElBQUQsRUFBVTtBQUNyQixrQ0FBa0IsSUFBbEI7QUFDSCxhQUZEO0FBR0EsZ0JBQUksRUFBSixDQUFPLEtBQVAsRUFBYyxZQUFNO0FBQ2hCLHVCQUFLLFlBQUwsQ0FBa0IsY0FBbEIsR0FBbUMsY0FBbkM7QUFDQSx3QkFBUSxPQUFLLFlBQWI7QUFDSCxhQUhEO0FBSUg7Ozs7OztrQkFJVSxXIiwiZmlsZSI6InV0aWxzL0h0dHBSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IGtvemVydmFyIG9uIDIwMTYtMDctMTguXG4gKi9cbid1c2Ugc3RyaWN0JztcbmltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxdWVyeXN0cmluZyc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcblxuY2xhc3MgSHR0cFJlcXVlc3Qge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGZpbGVXaXRoSGFzaCl7XG4gICAgICAgIHRoaXMuZmlsZVdpdGhIYXNoID0gZmlsZVdpdGhIYXNoO1xuICAgICAgICB0aGlzLnBvc3REYXRhID0gcXVlcnlzdHJpbmcuc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIC8vJ21vZGUnOiAnMzInLFxuICAgICAgICAgICAgLy8nY2xpZW50JzogJ0F1dG9Nb3ZlJyxcbiAgICAgICAgICAgIC8vJ2NsaWVudF92ZXInOiAnMS4wJyxcbiAgICAgICAgICAgIC8vJ2Rvd25sb2FkZWRfc3VidGl0bGVzX2lkJzogdGhpcy5maWxlV2l0aEhhc2guaGFzaCxcbiAgICAgICAgICAgIC8vJ2Rvd25sb2FkZWRfc3VidGl0bGVzX2xhbmcnOiAnUEwnLFxuICAgICAgICAgICAgLy8nZG93bmxvYWRlZF9zdWJ0aXRsZXNfdHh0JzogJzInLFxuICAgICAgICAgICAgLy8nYWR2ZXJ0X3R5cGUnOiAnZmxhc2hBbGxvd2VkJyxcbiAgICAgICAgICAgIC8vJ3ZpZGVvX2luZm9faGFzaCc6IHRoaXMuZmlsZVdpdGhIYXNoLmhhc2gsXG4gICAgICAgICAgICAvLyduYXp3YV9wbGlrdSc6IHRoaXMuZmlsZVdpdGhIYXNoLmZpbGUsXG4gICAgICAgICAgICAvLydyb3ptaWFyX3BsaWt1X2JhanR5JzogdGhpcy5maWxlV2l0aEhhc2guYnl0ZXMsXG4gICAgICAgICAgICAvLyd0aGUnOiAnZW5kJ1xuICAgICAgICAgICAgJ2Rvd25sb2FkZWRfc3VidGl0bGVzX2xhbmcnOiBvcHRpb25zLmxhbmcsXG4gICAgICAgICAgICAnZG93bmxvYWRlZF9zdWJ0aXRsZXNfdHh0JzogJzEnLFxuICAgICAgICAgICAgJ2NsaWVudF92ZXInOiAnMi4yLjAuMjM5OScsXG4gICAgICAgICAgICAnZG93bmxvYWRlZF9zdWJ0aXRsZXNfaWQnOiB0aGlzLmZpbGVXaXRoSGFzaC5oYXNoLFxuICAgICAgICAgICAgJ2NsaWVudCc6ICdOYXBpcHJvamVrdCcsXG4gICAgICAgICAgICAnbW9kZSc6ICcxJ1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb3N0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhvc3Q6ICd3d3cubmFwaXByb2pla3QucGwnLFxuICAgICAgICAgICAgcG9ydDogJzgwJyxcbiAgICAgICAgICAgIHBhdGg6ICcvYXBpL2FwaS1uYXBpcHJvamVrdDMucGhwJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1MZW5ndGgnOiB0aGlzLnBvc3REYXRhLmxlbmd0aFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlcXVlc3QoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcbiAgICAgICAgICAgIHZhciByZXEgPSBodHRwLnJlcXVlc3QodGhpcy5wb3N0T3B0aW9ucywgKHJlc3BvbnNlKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc29sdmUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmVxLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXEud3JpdGUodGhpcy5wb3N0RGF0YSk7XG4gICAgICAgICAgICByZXEuZW5kKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2Nlc3NSZXNwb25zZShyZXNvbHZlLCByZXMpe1xuICAgICAgICByZXMuc2V0RW5jb2RpbmcoJ3V0Zi04Jyk7XG4gICAgICAgIHZhciByZXNwb25zZVN0cmluZyA9ICcnO1xuICAgICAgICByZXMub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmVzcG9uc2VTdHJpbmcgKz0gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxlV2l0aEhhc2gucmVzcG9uc2VTdHJpbmcgPSByZXNwb25zZVN0cmluZztcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5maWxlV2l0aEhhc2gpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSHR0cFJlcXVlc3QiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
