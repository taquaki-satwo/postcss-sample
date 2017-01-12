const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const stylelint = require('stylelint');
const reporter = require('postcss-reporter');

fs.readFile('import.css', (err, css) => {
  postcss([
    atImport,
    stylelint,
    reporter,
    autoprefixer,
    cssnano
  ]).process(css)
    .then(result => {
      fs.writeFile('app.css', result.css);
    });
});
