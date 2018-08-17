//import function
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

//task definition
gulp.task('less', function() {
    return gulp.src('./css/**/*.less')
    .pipe(less({
        paths: [path.join(__dirname, 'less', 'includes') ]
      }))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('.'));
});


gulp.task('watch',['less'],function() {
    gulp.watch('./css/**/*.less',['less']);
});