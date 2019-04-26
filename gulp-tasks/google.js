var gulp = require('gulp');
var fs = require('fs');
var request = require('request');
var dsv = require('d3-dsv');
var archieml = require('archieml');
var runSequence = require('run-sequence');

var configPath = `config.json`;
var config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

var {
  sheet
} = config.google;
var {
  doc
} = config.google;

gulp.task('google:sheet', cb => {
  let i = 0;
  var next = () => {
    var d = sheet[i]
    if (d.id) requestSheet(d, () => {
      i += 1
      if (i < sheet.length) next();
      else cb();
    });
  }
  next();
});

gulp.task('google:doc', cb => {
  let i = 0;
  var next = () => {
    var d = doc[i]
    if (d.id) requestDoc(d, () => {
      i += 1
      if (i < doc.length) next();
      else cb();
    });
  }
  next();
});

// gulp.task('google:doc', function(callback) {
//   runSequence('google:getdoc', 'html:dev',
//     callback
//   )
// });

var requestSheet = (opt, cb) => {
  var base = 'https://docs.google.com/spreadsheets/u/1/d';
  var url = `${base}/${opt.id}/export?format=csv&sheet=${opt.sheet}&gid=${opt.gid}`;
  request(url, (error, response, body) => {
    var data = dsv.csvParse(body);
    var file = `${opt.filepath}`
    if (opt.format === "json") {
      var str = JSON.stringify(data);
      fs.writeFile(file, str, err => {
        if (err) console.log(err);
        cb()
      });
    } else {
      fs.writeFile(file, body, err => {
        if (err) console.log(err);
        cb()
      });
    }
  });
};

var requestDoc = (opt, cb) => {
  var url = `https://docs.google.com/document/d/${opt.id}/export?format=txt`;
  request(url, (error, response, body) => {
    var parsed = archieml.load(body);
    var str = JSON.stringify(parsed);
    var basePath = process.cwd();
    var file = `${basePath}/${opt.filepath || 'template-data/doc.json'}`;
    fs.writeFile(file, str, err => {
      if (err) console.error(err);
      cb();
    });
  });
};