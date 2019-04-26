var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

// optimize images
gulp.task('opt:images', function() {
  return gulp.src('src/assets/img/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('docs/assets/img'))
});

gulp.task('assets:fonts', function() {
  return gulp.src('src/assets/fonts/**/*')
    .pipe(gulp.dest('docs/assets/fonts'))
})

gulp.task('assets:scripts', function() {
  return gulp.src('src/assets/tools/js/**/*')
    .pipe(gulp.dest('docs/assets/tools/js'))
})

gulp.task('assets:styles', function() {
  return gulp.src('src/assets/tools/css/**/*')
    .pipe(gulp.dest('docs/assets/tools/css'))
})

gulp.task('assets:data', function() {
  return gulp.src('src/assets/data/**/*')
    .pipe(gulp.dest('docs/assets/data'))
})

gulp.task('assets:cname', function() {
  return gulp.src('CNAME')
    .pipe(gulp.dest('docs/'))
})