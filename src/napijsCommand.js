/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';
import { logger } from './utils';
import _ from 'underscore';
import napijs from './napijs';
import NapijsOptions from './NapijsOptions';
import CONST from './const';

var command = 'download';

var describe = 'Download subtitles';

var builder = function(yargs){
    return yargs
        .option('l', {
            alias: 'language',
            description: 'Language. Available: POL, ENG',
            default: CONST.LANGUAGE.PL
        })
        .option('verbose', {
            description: 'verbose output',
            default: false
        })
        .option('f', {
            array: true,
            description: 'An array of files separated by space char. Glob expression allowed. For more information visit: https://github.com/isaacs/node-glob',
            alias: 'files',
            default: ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg']
        })
        .option('file', {
            array: false,
            description: 'Single file'
        })
        .option('s', {
            boolean: true,
            description: 'Overwrite subtitle file if one exists',
            alias: 'save'
        })
        ;
};

var handler = function (argv) {
    try {
        var options = new NapijsOptions(argv);
        napijs(options)
            .then(()=>{
            })
            .catch((err)=>{
                console.error('Error occurred: ', err);
            });
    } catch(err){
        console.error('Ups! Unexpected exception occurred... :(  \n', err);
    }
};

export default {
    command : command,
    describe : describe,
    builder : builder,
    handler : handler
}