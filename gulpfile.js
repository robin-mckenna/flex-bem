var gulp = require('gulp');
var sass = require('gulp-sass');

sass.compiler = require('node-sass');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('start', function() {
    console.log("Hello, starting...");
});

gulp.task('sass', function () {
return gulp
  .src('./stylesheets/scss/*.scss')
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(gulp.dest('./public/css'));
});
