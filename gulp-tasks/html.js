const gulp = require("gulp"),
  browserSync = require("browser-sync"),
  rename = require("gulp-rename"),
  hb = require("gulp-hb");

const htmlSrc = "src/html/index.hbs";

gulp.task("html:dev", () => {
  let hbStream = hb()
    .partials("src/html/blocks/**/*.hbs")
    .data("src/assets/copy/**/*.{js,json}");

  return gulp
    .src(htmlSrc)
    .pipe(hbStream)
    .pipe(
      rename((path) => {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest("src"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("html:build", () => {
  let hbStream = hb()
    .partials("src/html/blocks/**/*.hbs")
    .data("src/assets/copy/**/*.{js,json}");

  return gulp
    .src(htmlSrc)
    .pipe(hbStream)
    .pipe(
      rename((path) => {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest("dist/"));
});
