/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

/**
 * Napijs file passed to napijs
 */
class NapijsFile {

    /**
     * Constructor
     * @param fileName
     */
    constructor(fileName) {
        this.subtitleFileName = '';
        this.subtitlesPresent = false;
        this.file = fileName;
        this.hash = '';
        this.bytes = -1;
        this.responseString = '';
    }
}

export default NapijsFile