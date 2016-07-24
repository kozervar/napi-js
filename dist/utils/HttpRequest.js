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