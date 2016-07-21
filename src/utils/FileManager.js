/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';
import { logger } from './index';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import _ from 'underscore';

var fileExists = function (filename) {
    try {
        fs.statSync(filename);
        return true;
    }
    catch(e) {
        return false;
    }
};

function checkIfFileExists(options, fileWithHash, resolve, reject) {
    const subsFileName = path.join(
        path.dirname(fileWithHash.file),
        path.basename(fileWithHash.file, path.extname(fileWithHash.file)) + options.extension
    );
    if(fileExists(subsFileName)) {
        if(!options.overwrite) {
            if (options.verbose) {
                logger.info('File [ %s ] exist. Nothing to do!', subsFileName);
            }
            fileWithHash.subtitlesPresent = true;
            fileWithHash.subtitleFileName = subsFileName;
            return resolve(fileWithHash);
        }

        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var digest = crypto.createHash('sha1').update(current_date + random).digest('hex');
        const modifiedSubsFileName = path.join(
            path.dirname(fileWithHash.file),
            path.basename(fileWithHash.file, path.extname(fileWithHash.file)) + '-' + digest.substr(0, 4) + options.extension
        );

        if (options.verbose) {
            logger.info('Renaming file [ %s ] to [ %s }', subsFileName, modifiedSubsFileName);
        }
        fs.renameSync(subsFileName, modifiedSubsFileName);
    }
    return resolve(fileWithHash);
}

function fileManager(options, fileWithHash, subtitles, resolve, reject) {
    if(fileWithHash.subtitlesPresent) {
        resolve(fileWithHash);
    }
    const subsFileName = path.join(
        path.dirname(fileWithHash.file),
        path.basename(fileWithHash.file, path.extname(fileWithHash.file)) + options.extension
    );

    if (options.verbose) {
        logger.info('Saving file [ %s ]', subsFileName);
    }

    fileWithHash.subtitlesPresent = true;

    var file = fs.createWriteStream(subsFileName);

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
    var b = new Buffer(subtitles.content[0], 'base64');
    file.write(b.toString('UTF-8'));
    file.end();
}

var saveSubtitles = function (options, fileWithHash, subtitles){
    return new Promise((resolve,reject)=>fileManager(options,fileWithHash,subtitles,resolve,reject));
};
var subtitleExists = function (options, fileWithHash){
    return new Promise((resolve,reject)=>checkIfFileExists(options,fileWithHash,resolve,reject));
};

export default {
    saveSubtitles : saveSubtitles,
    subtitleExists : subtitleExists
}