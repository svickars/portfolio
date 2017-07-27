var replace = require("replace");

replace({
  regex: /\<\!\-\-\n/g,
  replacement: '<div class="table_outer_container">',
  paths: ['.'],
  recursive: true,
  silent: true,
});

// const replace = require('replace-in-file');
// const options = {
//
//   //Multiple files or globs
//   files: [
//     'hamrlro01.html'
//   ],
//
//   //Replacement to make (string or regex)
//   from: /\<\!\-\-\n/g,
//   to: '<div class="table_outer_container">',
//
//   //Specify if empty/invalid file paths are allowed (defaults to false)
//   //If set to true these paths will fail silently and no error will be thrown.
//   allowEmptyPaths: false,
//
//   //Character encoding for reading/writing files (defaults to utf-8)
//   encoding: 'utf8',
// };
