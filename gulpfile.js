'use strict';
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('styles', function() {
	return gulp.src('less/**/*.less')
	.pipe(less())
	.pipe(gulp.dest('css'));
});