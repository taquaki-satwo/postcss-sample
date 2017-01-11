const fs = require('fs');
const postcss = require('postcss');
const atImport = require('postcss-import');
const cssnano = require('cssnano');

fs.readFile('import.css', (err, css) => {
  postcss([atImport, cssnano])
    .process(css)
    .then(result => {
      fs.writeFile('app.css', result.css);
    });
});
