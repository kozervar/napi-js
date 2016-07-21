/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import { logger, fileManager } from './index';
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
            fileManager(options, fileWithHash, result.result.subtitles[0])
                .then(response => resolve(response))
                .catch(err => reject({err: err, fileWithHash: fileWithHash}));
        } else {
            return reject({err: 'Wrong number of subtitles. Should be 1', fileWithHash: fileWithHash});
        }
    });
}

export default (options, fileWithHash) => {
    return new Promise((resolve, reject)=>parseAndSaveFile(options, fileWithHash, resolve, reject));
}