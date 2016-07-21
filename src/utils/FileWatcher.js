/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';
import napijs from './../napijs';
import { logger } from './';
import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';
import _ from 'underscore';

export default function (options) {
    var paths = [];
    for (var p of options.files) {
        paths.push(options.watchPath + '/' + p);
    }
    if (options.verbose)
        logger.info('Paths: %s', paths);
    logger.info('Watching...');

    var watcher = chokidar.watch(paths, {
        persistent: true,
        ignoreInitial: true,
        awaitWriteFinish: true
    });

    watcher
        .on('add', fp => {
            var opts = _.clone(options);
            opts.file = fp;
            if (opts.verbose)
                logger.info('File %s has been ADDED', fp);
            napijs(opts)
                .then(()=> {
                })
                .catch((err)=> {
                    logger.error('Could not download subtitles for file ' + fp, err);
                });
        })
        .on('change', fp => {
            var opts = _.clone(options);
            opts.file = fp;
            if (opts.verbose)
                logger.info('File %s has been CHANGED', fp);
            napijs(opts)
                .then(()=> {
                })
                .catch((err)=> {
                    logger.error('Could not download subtitles for file ' + fp, err);
                });
        })
        //.on('unlink', fp => logger.info('File ${fp} has been REMOVED'))
        .on('ready', () => {
            if (options.verbose)
                logger.info('Initial scan complete. Ready for changes');
        });

    return watcher;
}