/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import _ from 'underscore';
import glob from 'globby';

export default (files, options) => {
    options = options ? options : { caseSensitive : false };
    return new Promise((resolve,reject)=> {
        if (_.isUndefined(files)) {
            throw new Error('File list cannot be undefined!');
        }
        if (!_.isArray(files)) {
            files = [files];
        }
        glob(files, {
            nocase: options.caseSensitive
        })
            .then((files)=>resolve(files))
            .catch((err)=>reject(err))
        ;
    });
}