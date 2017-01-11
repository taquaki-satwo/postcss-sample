const fs = require('fs');
const postcss = require('postcss');

const css = fs.readFileSync('sample.css');
const ast = postcss.parse(css);

console.log(ast;
