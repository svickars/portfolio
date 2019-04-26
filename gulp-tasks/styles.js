var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var purgecss = require('gulp-purgecss');

// compile SCSS to CSS
gulp.task('css:compile', function() {
  return gulp.src('src/css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// purgecss
gulp.task('css:purge', () => {
  return gulp.src('docs/css/**/*.css')
    .pipe(purgecss({
      content: ['docs/**/*.html', 'docs/**/*.js']
    }))
    .pipe(gulp.dest('docs/css'))
})