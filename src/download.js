/**
 * Created by kozervar on 2016-07-19.
 */
'use strict';
import { logger, hash, glob, HttpRequest, XML2JSON, fileManager } from './utils';

/**
 * Generate MD5 partial hash for provided files
 * @param {NapijsOptions} options
 * @param files
 * @returns {Promise}
 */
var generateFileHashes = function (options, files) {
    if(options.verbose) {
        logger.info('Generating files hash...');
    }
    if (files.length === 0)
        logger.info('No files found!');
    else if (options.verbose) {
        logger.info('Files found: ');
        for (var file of files) {
            logger.info(file);
        }
    }

    var promises = [];
    for (var file of files) {
        promises.push(hash(file));
    }
    return Promise.all(promises);
};
/**
 * Check if files exist. If --save flag is on then rename existing file
 * @param {NapijsOptions} options
 * @param fileWithHashes
 * @returns {Promise}
 */
var checkSubtitleFiles = function (options, fileWithHashes) {
    if(options.verbose) {
        logger.info('Checking existing subtitles...');
    }
    var promises = [];
    for (var file of fileWithHashes) {
        promises.push(fileManager.subtitleExists(options, file));
    }
    return Promise.all(promises);
};

/**
 * Perform HTTP request to Napiprojekt server
 * @param {NapijsOptions} options
 * @param fileHashes
 * @returns {Promise}
 */
var makeHttpRequests = function (options, fileHashes) {
    if(options.verbose) {
        logger.info('Performing HTTP requests...');
    }
    var promises = [];
    for (var fileWithHash of fileHashes) {
        if(fileWithHash.subtitlesPresent)
            continue;
        if (options.verbose) {
            logger.info('Downloading subtitles for file [%s] with hash [%s]', fileWithHash.file, fileWithHash.hash);
        }
        var httpRequest = new HttpRequest(options, fileWithHash);
        promises.push(httpRequest.request());
    }
    return Promise.all(promises);
};

/**
 * Parse HTTP response from Napiprojekt server. Format XML response to JSON and save subtitles to file.
 * @param {NapijsOptions} options
 * @param filesWithHash
 * @returns {Promise}
 */
var parseHttpResponse = function (options, filesWithHash) {
    if(options.verbose) {
        logger.info('Parsing HTTP responses...');
    }
    var promises = [];
    for (var fileWithHash of filesWithHash) {
        if(fileWithHash.subtitlesPresent)
            continue;
        var p = XML2JSON(options, fileWithHash).catch((err) => {
            if (options.verbose) {
                logger.info('Error in HTTP response: ', err.err);
            }
            return err.fileWithHash;
        });
        promises.push(p);
    }
    return Promise.all(promises);
};

/**
 * Main download function. Responsible for downloading subtitles from Napiprojekt server
 * Steps:
 * - find files provided in options
 * - generate partial MD5 hash for each file
 * - check if subtitles already exists. Rename old subtitles file if one exist
 * - call Napiprojekt server
 * - parse XML response to JSON format and save subtitles to disk
 *
 * @param {NapijsOptions} o options
 * @returns {Promise}
 */
function download(o) {
    return new Promise((resolve, reject) => {
        var promise;
        if(o.file.length > 0 ) {
            promise = generateFileHashes(o, [o.file])
                .catch(err=> {
                    reject(err);
                });
        } else {
            promise = glob(o.files)
                .then((files)=> generateFileHashes(o, files))
                .catch(err=> {
                    reject(err);
                });
        }
        promise
            .then((fileHashes)=> checkSubtitleFiles(o, fileHashes))
            .then((fileHashes)=> makeHttpRequests(o, fileHashes))
            .then((filesWithHash)=> parseHttpResponse(o, filesWithHash))
            .then((responses)=> {
                resolve(responses);
            })
            .catch(err=> {
                reject(err);
            });
    });
}

export default download