/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import { logger } from './index';
import md5pf from 'md5-part-file';
/**
 *
 * @param file
 * @returns {Promise}
 */
export default function(file){
    return new Promise((resolve,reject)=> {
        var stats = fs.statSync(file);
        var fileSizeInBytes = stats['size'];
        md5pf(file, 0, 10485760, function (err, hash) {
            if (err) {
                reject('Something went wrong during md5 hash calculation for file ' + file);
            } else {
                resolve({
                    file: file,
                    hash: hash,
                    bytes: fileSizeInBytes
                });
            }
        });
    });
}