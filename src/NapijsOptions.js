/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

const DEFAULT_SUBS_EXT = '.srt';

/**
 * Options passed to napijs
 */
class NapijsOptions {

    /**
     * Constructor with yargs argument
     * @param argv - yargs argv
     */
    constructor(argv) {
        this.lang = argv.l || 'POL';
        this.verbose = argv.verbose || false;
        this.file = argv.file || '';
        this.files = argv.f || ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];
        this.extension = argv.e || DEFAULT_SUBS_EXT;
        this.overwrite = argv.o || true;

        this.watchPath = argv.p || ['*.mkv', '*.avi', '*.mp4', '*.mpeg', '*.wmv', '*.rmvb', '*.mov', '*.mpg'];

        this.validate();
    }

    validate(){
        let regexp = new RegExp(/^.[a-z4]*$/, 'gmi');
        if(!this.extension.match(regexp)) {
            console.error('Subtitles extension is not correct');
            this.extension = DEFAULT_SUBS_EXT;
        }
    }
}

export default NapijsOptions