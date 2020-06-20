const gulp = require("gulp"),
  browserSync = require("browser-sync"),
  runSequence = require("run-sequence"),
  requireDir = require("require-dir"),
  del = require("del");

requireDir("./gulp-tasks");

gulp.task("watch", ["browserSync"], () => {
  gulp.watch("src/css/**/*.scss", ["bundle:css:dev"]);
  gulp.watch("src/css/**/*.css", ["bundle:css:dev"]);
  gulp.watch("src/html/**/*.hbs", ["html:dev"]);
  gulp.watch("src/assets/copy/*.json", ["html:dev"]);
  gulp.watch("src/js/**/*.js", ["bundle:js:dev"]);
});

gulp.task("browserSync", () => {
  browserSync({
    server: {
      baseDir: "src",
    },
    port: 4000,
    notify: true,
    ghostMode: false,
    online: true,
  });
});

gulp.task("clean:docs", () => {
  return del.sync("dist/");
});

gulp.task("dev", (callback) => {
  runSequence(["html:dev", "bundle:css:dev", "bundle:js:dev"], callback);
});

gulp.task("build", (callback) => {
  runSequence(
    "clean:docs",
    "html:build",
    [
      "bundle:js:build",
      "bundle:css:build",
      "assets:styles",
      "assets:scripts",
      "assets:data",
      "assets:images",
      // "assets:auth",
    ],
    callback
  );
});

gulp.task("default", (callback) => {
  runSequence("dev", "watch", callback);
});
