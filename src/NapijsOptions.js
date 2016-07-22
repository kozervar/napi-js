/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';
import _ from 'underscore';
const DEFAULT_LANG = 'POL';
const DEFAULT_SUBS_EXT = '.srt';
const DEFAULT_GLOB_EXT = ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];

/**
 * Options passed to napijs
 */
class NapijsOptions {

    /**
     * Constructor with yargs argument
     * @param argv - yargs argv
     */
    constructor(argv) {
        this.lang = argv.language || DEFAULT_LANG;
        this.verbose = argv.verbose || false;
        this.file = argv.file || '';

        this.files = argv.files || DEFAULT_GLOB_EXT;
        this.extension = DEFAULT_SUBS_EXT;
        this.overwrite = argv.save;

        this.watchPath = argv.path || DEFAULT_GLOB_EXT;

        this.validate();
    }

    validate(){
        let regexp = new RegExp(/^.[a-z4]*$/, 'gmi');
        if(!this.extension.match(regexp)) {
            console.error('Subtitles extension is not correct');
            this.extension = DEFAULT_SUBS_EXT;
        }
        if(_.isString(this.files)) {
            this.files = [this.files];
        }
    }
}

export default NapijsOptions