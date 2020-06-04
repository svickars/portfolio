const gulp = require("gulp"),
  fs = require("fs"),
  request = require("request"),
  dsv = require("d3-dsv"),
  archieml = require("archieml");
// runSequence = require('run-sequence');

const configPath = `config.json`,
  config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const { sheet } = config.google;
const { doc } = config.google;

gulp.task("google:sheet", (cb) => {
  let i = 0;
  let next = () => {
    let d = sheet[i];
    if (d.id)
      requestSheet(d, () => {
        i += 1;
        if (i < sheet.length) next();
        else cb();
      });
  };
  next();
});

gulp.task("google:doc", (cb) => {
  if (doc.length > 0) {
    let i = 0;
    let next = () => {
      let d = doc[i];
      if (d.id)
        requestDoc(d, () => {
          i += 1;
          if (i < doc.length) next();
          else cb();
        });
    };
    next();
  } else {
    console.log("no copy doc");
  }
});

const requestSheet = (opt, cb) => {
  const url = `https://docs.google.com/spreadsheets/u/1/d/${opt.id}/export?format=csv&sheet=${opt.sheet}&gid=${opt.gid}`;
  request(url, (error, response, body) => {
    let data = dsv.csvParse(body);
    let file = `${opt.filepath}`;
    if (opt.format === "json") {
      let str = JSON.stringify(data);
      fs.writeFile(file, str, (err) => {
        if (err) console.log(err);
        cb();
      });
    } else {
      fs.writeFile(file, body, (err) => {
        if (err) console.log(err);
        cb();
      });
    }
  });
};

const requestDoc = (opt, cb) => {
  const url = `https://docs.google.com/document/d/${opt.id}/export?format=txt`;
  request(url, (error, response, body) => {
    let parsed = archieml.load(body);
    let str = JSON.stringify(parsed);
    let basePath = process.cwd();
    let file = `${basePath}/${opt.filepath || "template-data/doc.json"}`;
    fs.writeFile(file, str, (err) => {
      if (err) console.error(err);
      cb();
    });
  });
};
