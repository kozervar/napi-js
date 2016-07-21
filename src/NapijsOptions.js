/**
 * Created by kozervar on 2016-07-21.
 */
'use strict';

/**
 * Options passed to napijs
 */
class NapijsOptions {

    /**
     * Constructor with yargs argument
     * @param argv - yargs argv
     */
    constructor(argv) {
        this.lang = argv.l;
        this.verbose = argv.verbose;
        this.files = argv.f;
    }
}

export default NapijsOptions