var gulp = require('gulp');
var fs = require('fs');
var del = require('del');
var googleWebFonts = require('gulp-google-webfonts');

var configPath = `config.json`;
var config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

var options = {};

var fontList = [];

gulp.task('google:fonts', function() {
  del.sync(['src/assets/fonts/**/*.css', 'src/assets/fonts/**/*.woff']);
  var fonts = config.fonts;

  fonts.forEach(function(font) {
    font.font = font.name.replace(/ /g, '+') + ':' + font.weights;
    fontList.push(font.font);
  })

  var fontsList = fontList.join('\n');
  fs.writeFileSync('src/assets/fonts/fonts.list', fontsList, "utf8");


  return gulp.src('src/assets/fonts/fonts.list')
    .pipe(googleWebFonts(options))
    .pipe(gulp.dest('src/assets/fonts'));
});