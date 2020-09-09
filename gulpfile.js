'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('default', async function () {
	console.log('You are running gulp, Bismilah dikek !!')
});
 
gulp.task('sass', function () {
 return gulp.src('app/assets/scss/*.scss')
   .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('app/assets/css'));
});
