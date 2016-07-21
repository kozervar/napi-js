/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
import { logger } from './utils';
import download from './download';

download(['./examples/*.mkv'])
    .then((responses)=> {
        logger.info('Subtitles saved!');
    })
    .catch(err=> {
        logger.debug('napijs finished with errors!');
    });
