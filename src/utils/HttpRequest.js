/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import querystring from 'querystring';
import http from 'http';

class HttpRequest {
    constructor(fileWithHash){
        this.fileWithHash = fileWithHash;
        this.postData = querystring.stringify({
            'mode': '32wireshark napipro',
            'client': 'AutoMove',
            'client_ver': '2.2.0.2399',
            'downloaded_subtitles_id': this.fileWithHash.hash,
            'downloaded_subtitles_lang': 'PL',
            'downloaded_subtitles_txt': '2',
            'advert_type': 'flashAllowed',
            'video_info_hash': this.fileWithHash.hash,
            'nazwa_pliku': this.fileWithHash.file,
            'rozmiar_pliku_bajty': this.fileWithHash.bytes,
            'the': 'end'
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

    request(){
        return new Promise((resolve,reject)=>{
            var req = http.request(this.postOptions, (response)=>{
                this.processResponse(resolve, response);
            });
            req.on('error', function (e) {
                reject(e);
            });
            req.write(this.postData);
            req.end();
        });
    }

    processResponse(resolve, res){
        res.setEncoding('utf-8');
        var responseString = '';
        res.on('data', (data) => {
            responseString += data;
        });
        res.on('end', () => {
            this.fileWithHash.responseString = responseString;
            resolve(this.fileWithHash);
        });
    }

}

export default HttpRequest