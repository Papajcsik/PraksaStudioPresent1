'use strict';
import { task, src, dest } from 'gulp';
const sass = require('gulp-sass')(require('sass'));
import concat from 'gulp-concat';
sass.compiler = require('node-sass');

task('sass', function () {

   return src('./scss/**/*.scss')
   .pipe(concat('./custom.css'))
   .pipe(sass().on('error', sass.logError))
   .pipe(dest('./css'));
});