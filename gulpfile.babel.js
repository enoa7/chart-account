'use strict'; // best practice

// ------------------------------------------------ //

/** @Desc - List of all the dependencies **/

import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import uglify from 'gulp-uglify';
import babelify from 'babelify';
import browserSync from 'browser-sync';

// ------------------------------------------------ //

/** @Desc - List of variables **/

// create variables for the development and production path
const dirs = {
    dev: './app/src',
}

// create variables for sass dev and sass prod
const path = {
    sassDev: dirs.dev + '/sass/main.scss',
    jsDev: dirs.dev + '/js/main.js'
}

// initialize the browser sync
const autoReload = browserSync.create();

// ------------------------------------------------ //

/** @Desc - List of gulp tasks **/

/*
 * @Desc - Compile SCSS/Sass to vanilla CSS
 */
gulp.task('styles', () => {
    return gulp.src(path.sassDev) // search our scss entry file or the main scss file
        .pipe(sourcemaps.init()) // stat the source map process
        .pipe(sass().on('error', sass.logError)) // compile our sass to css
        .pipe(autoprefixer()) // add auto-prefixer for browsers compatibility
        .pipe(sourcemaps.write('.')) // write our sourcemaps 
        .pipe(gulp.dest('./app')) // export our compiled sass file and our sourcemap file to app folder
        .pipe(autoReload.stream());
});

/*
 * @Desc - Compile es6 js to vanilla js
 * @Reference - https://thesocietea.org/2016/01/building-es6-javascript-for-the-browser-with-gulp-babel-and-more/
 */
gulp.task('scripts', () => {
    return browserify({ entries: path.jsDev, debug: true })
        .transform('babelify', { presets: ["es2015"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app'))
        .pipe(autoReload.stream());
});

/*
 * @Desc - serve our index.html file with 2 included tasks to compile the css and the js
 */
gulp.task('serve', ['styles', 'scripts'], () => {

	// automatically open the index.html within the app folder
	autoReload.init({ server: './app' })

	// our men of the night watch
	gulp.watch(dirs.dev + '/sass/**/*.scss', ['styles']) // watch for any changes on our scss files
	gulp.watch(dirs.dev + '/js/**/*.js', ['scripts']) // watch for any changes on our js files
	gulp.watch('./app/*.html').on('change', autoReload.reload); // if changes are detected, reload the html file

});