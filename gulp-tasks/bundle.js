const gulp = require("gulp"),
  uglify = require("gulp-uglify-es").default,
  cssmin = require("gulp-cssmin"),
  rename = require("gulp-rename"),
  concatCss = require("gulp-concat-css"),
  autoprefixer = require("gulp-autoprefixer"),
  babelify = require("babelify"),
  browserify = require("browserify"),
  source = require("vinyl-source-stream"),
  buffer = require("vinyl-buffer"),
  purgecss = require("gulp-purgecss"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload;

const AUTOPREFIXER_BROWSERS = ["last 3 versions", "ie 8", "ie 9"];

// compile SCSS to CSS
gulp.task("bundle:css:dev", () => {
  return gulp
    .src("src/css/**/*.scss")
    .pipe(
      sass().on("error", function (err) {
        console.error(err.message);
        browserSync.notify(err.message, 3000);
        this.emit("end");
      })
    )
    .pipe(
      autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS,
      })
    )
    .pipe(concatCss("bundle-css.css"))
    .pipe(cssmin())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("src/tools"))
    .pipe(
      reload({
        stream: true,
      })
    );
});

gulp.task("bundle:js:dev", () => {
  return browserify("src/js/entry.js")
    .transform(
      babelify.configure({
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-transform-runtime"],
      })
    )
    .bundle()
    .on("error", function (err) {
      console.error(err.message);
      browserSync.notify(err.message, 3000);
      this.emit("end");
    })
    .pipe(source("bundle-js.js"))
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("src/tools"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});

gulp.task("bundle:css:build", () => {
  return gulp
    .src(["src/tools/*.css"])
    .pipe(
      autoprefixer({
        browsers: AUTOPREFIXER_BROWSERS,
      })
    )
    .pipe(concatCss("bundle-css.css"))
    .pipe(cssmin())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("dist//tools"));
});

gulp.task("bundle:js:build", () => {
  return browserify("src/js/entry.js")
    .transform(
      babelify.configure({
        presets: ["@babel/preset-env"],
        plugins: ["@babel/plugin-transform-runtime"],
      })
    )
    .bundle()
    .pipe(source("bundle-js.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
      })
    )
    .pipe(gulp.dest("dist//tools"));
});

// purgecss
gulp.task("css:purge", () => {
  return gulp
    .src("docs/**/*.css")
    .pipe(
      purgecss({
        content: ["docs/**/*.html", "docs/**/*.js"],
      })
    )
    .pipe(gulp.dest("dist/"));
});
