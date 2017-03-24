'use strict';

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require("gulp-sass");
var autoprefixer = require('autoprefixer');
var rename = require("gulp-rename");

gulp.task('styles', function () {
    var processors = [
        autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'ios 8', 'ios 6', 'android 4')
    ];

    return gulp.src('scss/styles/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('styles:watch', function() {
  gulp.watch('scss/styles/app.scss', ['styles']);
});
