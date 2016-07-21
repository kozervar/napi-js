/**
 * Created by kozervar on 2016-07-19.
 */
'use strict';
import { logger, hash, glob, HttpRequest, XML2JSON } from './utils';


var generateFileHashes = function (options, files) {
    if(options.verbose) {
        logger.info('--------------------------------');
        logger.info('Generate file hash');
        logger.info('--------------------------------');
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

var makeHttpRequests = function (options, fileHashes) {
    if(options.verbose) {
        logger.info('--------------------------------');
        logger.info('Make HTTP request');
        logger.info('--------------------------------');
    }
    var promises = [];
    for (var fh of fileHashes) {
        if (options.verbose) {
            logger.info('Downloading subtitles for file [%s] with hash [%s]', fh.file, fh.hash);
        }
        var httpRequest = new HttpRequest(options, fh);
        promises.push(httpRequest.request());
    }
    return Promise.all(promises);
};

var parseHttpResponse = function (options, filesWithHash) {
    if(options.verbose) {
        logger.info('--------------------------------');
        logger.info('Parse HTTP response');
        logger.info('--------------------------------');
    }
    var promises = [];
    for (var fileWithHash of filesWithHash) {
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

function download(o) {
    return new Promise((resolve, reject) => {
        var promise;
        if(o.file.length > 0 ) {
            promise = generateFileHashes(o, [o.file]);
        } else {
            promise = glob(o.files);
        }
        promise
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