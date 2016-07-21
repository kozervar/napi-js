/**
 * Created by kozervar on 2016-07-18.
 */
'use strict';
var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var nodemon = require('gulp-nodemon');
var Cache = require('gulp-file-cache');

var cache = new Cache();

var paths = {
    babel: [
        './src/**/*.js'
    ],
    cache: './.gulp-cache',
    dist: './dist/',
    target: './dist/*'
};

gulp.task('clean', function () {
        var stream = gulp
            .src([paths.target, paths.cache], {read: false})
            .pipe(clean());
        return stream;
    }
);

gulp.task('compile', function () {
    var stream = gulp.src(paths.babel)
        .pipe(cache.filter())
        .pipe(babel({
            presets: ['es2015']
        }))/*.on('error', function (err) {
            console.error(err.stack)
        })*/
        .pipe(cache.cache())
        .pipe(gulp.dest(paths.dist));
    return stream;
});

gulp.task('watch', ['clean', 'compile'], function () {
    gulp.watch(paths.babel, ['compile']);
});
//gulp.task('watch', ['compile'], function () {
//    nodemon({
//        script: './dist/index.js',
//        ext: 'js',
//        env: { 'NODE_ENV': 'development' },
//        tasks: ['compile']
//    });
//});