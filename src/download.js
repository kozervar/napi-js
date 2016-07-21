/**
 * Created by kozervar on 2016-07-19.
 */
'use strict';
import { logger, hash, glob, HttpRequest, XML2JSON } from './utils';

function download(files){
    return new Promise((resolve,reject) => {
        glob(files).then((files)=> {
                var promises = [];
                for (var file of files) {
                    promises.push(hash(file));
                }
                return Promise.all(promises);
            })
            .then((fileHashes)=> {
                var promises = [];
                for(var fh of fileHashes){
                    logger.debug('Downloading subtitiles for file [%s] with hash [%s]', fh.file, fh.hash);
                    var httpRequest = new HttpRequest(fh);
                    promises.push(httpRequest.request());
                }
                return Promise.all(promises);
            })
            .then((filesWithHash)=> {
                var promises = [];
                for(var fileWithHash of filesWithHash){
                    promises.push(XML2JSON(fileWithHash));
                }
                return Promise.all(promises);
            })
            .then((responses)=> {
                logger.debug('napijs finished');
                resolve(responses);
            })
            .catch(err=> {
                logger.error(err);
                logger.debug('napijs finished with errors!');
                reject(err);
            });
    });
}

export default download