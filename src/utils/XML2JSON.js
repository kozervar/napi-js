/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import { logger } from './index';
import xml2js from 'xml2js';
import path from 'path';
import fs from 'fs';

function parseAndSaveFile(fileWithHash, resolve, reject){
    xml2js.parseString(fileWithHash.responseString, (err, result)=>{
        if(err) {
            return reject(err);
        }
        if(!result.result) {
            return reject('No response from xml2js parser');
        }
        if(!result.result.subtitles) {
            return reject('No subtitles in response!');
        }
        if(result.result.subtitles.length === 1) {
            const subsFileName = path.join(
                path.dirname(fileWithHash.file),
                path.basename(fileWithHash.file, path.extname(fileWithHash.file)) + '.txt'
            );
            logger.debug('Saving file [ %s ]', subsFileName);

            var file = fs.createWriteStream(subsFileName);
            var subs = result.result.subtitles[0];

            file.on('error', (err) => {
                logger.debug('Error during saving subtitles [ %s ]', subsFileName);
                reject(err);
            });
            file.on('finish', () => {
                logger.debug('Subtitles file [ %s ] saved successfully',subsFileName);
                resolve(subsFileName);
            });
            var b = new Buffer(subs.content[0], 'base64');
            file.write(b.toString('UTF-8'));
            file.end();

        } else {
            return reject('Wrong number of subtitles. Should be 1');
        }
    });
}

export default (fileWithHash) => {
    return new Promise((resolve,reject)=>parseAndSaveFile(fileWithHash, resolve, reject));
}