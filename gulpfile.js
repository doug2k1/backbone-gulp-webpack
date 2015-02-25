var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

var JS_SOURCE = 'src/js/**/*.js';
var CSS_SOURCE = 'src/css/**/*.css';

gulp.task('jshint', function () {
    gulp.src(JS_SOURCE)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('styles', function () {
    gulp.src(CSS_SOURCE)
        .pipe(concat('styles.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('default', ['jshint', 'styles']);

gulp.task('watch', function () {
     // watch JS
    gulp.watch(JS_SOURCE, ['jshint']);

    // watch CSS
    gulp.watch(CSS_SOURCE, ['styles']);
});
