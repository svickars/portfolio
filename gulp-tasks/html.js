var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var hb = require('gulp-hb');

var htmlSrc = 'src/*.hbs';

gulp.task('html:dev', () => {
  var hbStream = hb()
    .data('src/assets/copy/**/*.{js,json}');

  return (
    gulp
    .src(htmlSrc)
    .pipe(hbStream)
    .pipe(
      rename(path => {
        path.extname = '.html';
      })
    )
    .pipe(gulp.dest('src'))
    .pipe(browserSync.reload({
      stream: true
    }))
  );
});

gulp.task('html:build', () => {
  var hbStream = hb()
    .data('src/assets/copy/**/*.{js,json}');

  return gulp
    .src(htmlSrc)
    .pipe(hbStream)
    .pipe(
      rename(path => {
        path.extname = '.html';
      })
    )
    .pipe(gulp.dest('docs'));
});