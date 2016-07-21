/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import { logger } from './index';
import xml2js from 'xml2js';
import path from 'path';
import fs from 'fs';

function parseAndSaveFile(options, fileWithHash, resolve, reject) {
    if (options.verbose) {
        logger.info('Processing file: %s', fileWithHash.file);
    }
    xml2js.parseString(fileWithHash.responseString, (err, result)=> {
        fileWithHash.subtitlesPresent = false;
        if (err) {
            return reject({err: err, fileWithHash: fileWithHash});
        }
        if (!result || !result.result) {
            return reject({err: 'No Napiprojekt response for file ' + fileWithHash.file, fileWithHash: fileWithHash});
        }
        if (!result.result.subtitles) {
            return reject({err: 'No subtitles found in response for file ' + fileWithHash.file, fileWithHash: fileWithHash});
        }
        if (result.result.subtitles.length === 1) {
            const subsFileName = path.join(
                path.dirname(fileWithHash.file),
                path.basename(fileWithHash.file, path.extname(fileWithHash.file)) + '.' + options.extension
            );
            if (options.verbose) {
                logger.info('Saving file [ %s ]', subsFileName);
            }

            fileWithHash.subtitlesPresent = true;

            var file = fs.createWriteStream(subsFileName);
            var subs = result.result.subtitles[0];

            file.on('error', (err) => {
                reject({err: err, fileWithHash: fileWithHash});
            });
            file.on('finish', () => {
                if (options.verbose) {
                    logger.info('Subtitles file [ %s ] saved successfully', subsFileName);
                }
                fileWithHash.subtitleFileName = subsFileName;
                resolve(fileWithHash);
            });
            var b = new Buffer(subs.content[0], 'base64');
            file.write(b.toString('UTF-8'));
            file.end();

        } else {
            return reject({err: 'Wrong number of subtitles. Should be 1', fileWithHash: fileWithHash});
        }
    });
}

export default (options, fileWithHash) => {
    return new Promise((resolve, reject)=>parseAndSaveFile(options, fileWithHash, resolve, reject));
}