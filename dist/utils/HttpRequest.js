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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0h0dHBSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFHQTs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztJQUVNLFc7QUFDRix5QkFBWSxPQUFaLEVBQXFCLFlBQXJCLEVBQWtDO0FBQUE7O0FBQzlCLGFBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLGFBQUssUUFBTCxHQUFnQixzQkFBWSxTQUFaLENBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBNkIsUUFBUSxJQVpIO0FBYWxDLHdDQUE0QixHQWJNO0FBY2xDLDBCQUFjLFlBZG9CO0FBZWxDLHVDQUEyQixLQUFLLFlBQUwsQ0FBa0IsSUFmWDtBQWdCbEMsc0JBQVUsYUFoQndCO0FBaUJsQyxvQkFBUTtBQWpCMEIsU0FBdEIsQ0FBaEI7QUFtQkEsYUFBSyxXQUFMLEdBQW1CO0FBQ2Ysa0JBQU0sb0JBRFM7QUFFZixrQkFBTSxJQUZTO0FBR2Ysa0JBQU0sMkJBSFM7QUFJZixvQkFBUSxNQUpPO0FBS2YscUJBQVM7QUFDTCxnQ0FBZ0IsbUNBRFg7QUFFTCxrQ0FBa0IsS0FBSyxRQUFMLENBQWM7QUFGM0I7QUFMTSxTQUFuQjtBQVVIOzs7O2tDQUVRO0FBQUE7O0FBQ0wsbUJBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVMsTUFBVCxFQUFrQjtBQUNqQyxvQkFBSSxNQUFNLGVBQUssT0FBTCxDQUFhLE1BQUssV0FBbEIsRUFBK0IsVUFBQyxRQUFELEVBQVk7QUFDakQsMEJBQUssZUFBTCxDQUFxQixPQUFyQixFQUE4QixRQUE5QjtBQUNILGlCQUZTLENBQVY7QUFHQSxvQkFBSSxFQUFKLENBQU8sT0FBUCxFQUFnQixVQUFVLENBQVYsRUFBYTtBQUN6QiwyQkFBTyxDQUFQO0FBQ0gsaUJBRkQ7QUFHQSxvQkFBSSxLQUFKLENBQVUsTUFBSyxRQUFmO0FBQ0Esb0JBQUksR0FBSjtBQUNILGFBVE0sQ0FBUDtBQVVIOzs7d0NBRWUsTyxFQUFTLEcsRUFBSTtBQUFBOztBQUN6QixnQkFBSSxXQUFKLENBQWdCLE9BQWhCO0FBQ0EsZ0JBQUksaUJBQWlCLEVBQXJCO0FBQ0EsZ0JBQUksRUFBSixDQUFPLE1BQVAsRUFBZSxVQUFDLElBQUQsRUFBVTtBQUNyQixrQ0FBa0IsSUFBbEI7QUFDSCxhQUZEO0FBR0EsZ0JBQUksRUFBSixDQUFPLEtBQVAsRUFBYyxZQUFNO0FBQ2hCLHVCQUFLLFlBQUwsQ0FBa0IsY0FBbEIsR0FBbUMsY0FBbkM7QUFDQSx3QkFBUSxPQUFLLFlBQWI7QUFDSCxhQUhEO0FBSUg7Ozs7OztrQkFJVSxXIiwiZmlsZSI6InV0aWxzL0h0dHBSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkga296ZXJ2YXIgb24gMjAxNi0wNy0xOC5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ3F1ZXJ5c3RyaW5nJztcclxuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XHJcblxyXG5jbGFzcyBIdHRwUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zLCBmaWxlV2l0aEhhc2gpe1xyXG4gICAgICAgIHRoaXMuZmlsZVdpdGhIYXNoID0gZmlsZVdpdGhIYXNoO1xyXG4gICAgICAgIHRoaXMucG9zdERhdGEgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAvLydtb2RlJzogJzMyJyxcclxuICAgICAgICAgICAgLy8nY2xpZW50JzogJ0F1dG9Nb3ZlJyxcclxuICAgICAgICAgICAgLy8nY2xpZW50X3Zlcic6ICcxLjAnLFxyXG4gICAgICAgICAgICAvLydkb3dubG9hZGVkX3N1YnRpdGxlc19pZCc6IHRoaXMuZmlsZVdpdGhIYXNoLmhhc2gsXHJcbiAgICAgICAgICAgIC8vJ2Rvd25sb2FkZWRfc3VidGl0bGVzX2xhbmcnOiAnUEwnLFxyXG4gICAgICAgICAgICAvLydkb3dubG9hZGVkX3N1YnRpdGxlc190eHQnOiAnMicsXHJcbiAgICAgICAgICAgIC8vJ2FkdmVydF90eXBlJzogJ2ZsYXNoQWxsb3dlZCcsXHJcbiAgICAgICAgICAgIC8vJ3ZpZGVvX2luZm9faGFzaCc6IHRoaXMuZmlsZVdpdGhIYXNoLmhhc2gsXHJcbiAgICAgICAgICAgIC8vJ25hendhX3BsaWt1JzogdGhpcy5maWxlV2l0aEhhc2guZmlsZSxcclxuICAgICAgICAgICAgLy8ncm96bWlhcl9wbGlrdV9iYWp0eSc6IHRoaXMuZmlsZVdpdGhIYXNoLmJ5dGVzLFxyXG4gICAgICAgICAgICAvLyd0aGUnOiAnZW5kJ1xyXG4gICAgICAgICAgICAnZG93bmxvYWRlZF9zdWJ0aXRsZXNfbGFuZyc6IG9wdGlvbnMubGFuZyxcclxuICAgICAgICAgICAgJ2Rvd25sb2FkZWRfc3VidGl0bGVzX3R4dCc6ICcxJyxcclxuICAgICAgICAgICAgJ2NsaWVudF92ZXInOiAnMi4yLjAuMjM5OScsXHJcbiAgICAgICAgICAgICdkb3dubG9hZGVkX3N1YnRpdGxlc19pZCc6IHRoaXMuZmlsZVdpdGhIYXNoLmhhc2gsXHJcbiAgICAgICAgICAgICdjbGllbnQnOiAnTmFwaXByb2pla3QnLFxyXG4gICAgICAgICAgICAnbW9kZSc6ICcxJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucG9zdE9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGhvc3Q6ICd3d3cubmFwaXByb2pla3QucGwnLFxyXG4gICAgICAgICAgICBwb3J0OiAnODAnLFxyXG4gICAgICAgICAgICBwYXRoOiAnL2FwaS9hcGktbmFwaXByb2pla3QzLnBocCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXHJcbiAgICAgICAgICAgICAgICAnQ29udGVudC1MZW5ndGgnOiB0aGlzLnBvc3REYXRhLmxlbmd0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntcclxuICAgICAgICAgICAgdmFyIHJlcSA9IGh0dHAucmVxdWVzdCh0aGlzLnBvc3RPcHRpb25zLCAocmVzcG9uc2UpPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNvbHZlLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcS53cml0ZSh0aGlzLnBvc3REYXRhKTtcclxuICAgICAgICAgICAgcmVxLmVuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NSZXNwb25zZShyZXNvbHZlLCByZXMpe1xyXG4gICAgICAgIHJlcy5zZXRFbmNvZGluZygndXRmLTgnKTtcclxuICAgICAgICB2YXIgcmVzcG9uc2VTdHJpbmcgPSAnJztcclxuICAgICAgICByZXMub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZXNwb25zZVN0cmluZyArPSBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlcy5vbignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVXaXRoSGFzaC5yZXNwb25zZVN0cmluZyA9IHJlc3BvbnNlU3RyaW5nO1xyXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZmlsZVdpdGhIYXNoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEh0dHBSZXF1ZXN0Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
