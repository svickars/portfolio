const gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  cache = require("gulp-cache");

// optimize images
gulp.task("opt:images", () => {
  return gulp
    .src("src/assets/img/**/*.+(png|jpg|jpeg|gif|svg)")
    .pipe(
      cache(
        imagemin({
          interlaced: true,
        })
      )
    )
    .pipe(gulp.dest("docs/assets/img"));
});

gulp.task("assets:fonts", () => {
  return gulp.src("src/assets/fonts/**/*").pipe(gulp.dest("docs/assets/fonts"));
});

gulp.task("assets:scripts", () => {
  return gulp
    .src("src/assets/tools/js/**/*")
    .pipe(gulp.dest("docs/assets/tools/js"));
});

gulp.task("assets:styles", () => {
  return gulp
    .src("src/assets/tools/css/**/*")
    .pipe(gulp.dest("docs/assets/tools/css"));
});

gulp.task("assets:data", () => {
  return gulp.src("src/assets/data/*").pipe(gulp.dest("docs/assets/data"));
});

gulp.task("assets:images", () => {
  return gulp.src("src/assets/img/**/*").pipe(gulp.dest("docs/assets/img"));
});
