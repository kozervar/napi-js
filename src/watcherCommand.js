/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';
import { fileWatcher } from './utils';
import NapijsOptions from './NapijsOptions';
import CONST from './const';
import napijsCommand from './napijsCommand';

var command = 'watch';

var describe = 'Watch directory for new files';

var builder = function(yargs){
    return napijsCommand
        .builder(yargs)
        .option('p', {
            alias: 'path',
            description: 'Path for file watcher. Path will be combined with file patterns from --files parameter',
            default: '.'
        })
    ;
};

var handler = function (argv) {
    try {
        var options = new NapijsOptions(argv);
        fileWatcher(options);
    } catch (err) {
        console.error('Ups! Unexpected exception occurred... :(  \n', err);
    }
};

export default {
    command : command,
    describe : describe,
    builder : builder,
    handler : handler
}