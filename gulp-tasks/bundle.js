var gulp = require('gulp');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify-es').default;
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('bundle', function() {
  return gulp.src('src/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', autoprefixer({
      browsers: [
        'last 3 versions',
        'ie 8',
        'ie 9'
      ]
    })))
    .pipe(gulpIf('*.css', cssmin()))
    .pipe(gulp.dest('docs'))
});