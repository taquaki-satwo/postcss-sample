var React = require('react');
var ReactDOM = require('react-dom');

const postcssJs = require('postcss-js');
const proccesor = postcssJs.sync([]);

const style = proccesor({
  color: "red"
});

ReactDOM.render(
  <h1 style={style}>postcss-js in React.js</h1>,
  document.getElementById('app')
);
