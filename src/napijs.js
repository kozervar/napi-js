/**
 * Created by kozervar on 2016-07-21.
 */

'use strict';
import { logger } from './utils';
import _ from 'underscore';
import download from './download';

/**
 * Handle method for subtitles downloader
 * @param {NapijsOptions} options
 * @param {Function} resolve
 * @param {Function} reject
 */
function napijs(options, resolve, reject) {
    if (_.isUndefined(options)) {
        return reject('Could not find options! Exiting...');
    }
    if(options.verbose) {
        logger.info('Starting with following options: ', options);
    }
    download(options)
        .then((response)=> {
            for(var r of response) {
                if(!r.subtitlesPresent) {
                    logger.info('Could not download subtitles for file %s', r.file);
                }
            }
            if (options.verbose) {
                logger.info('Done');
            }
            resolve(response);
        })
        .catch((err)=> {
            reject(err);
        });
}

/**
 * Main napijs method
 * @param {NapijsOptions} options
 * @returns {Promise}
 */
export default function (options) {
    return new Promise((resolve, reject)=>napijs(options, resolve, reject));
}