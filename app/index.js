var React = require('react');
var ReactDom = require('react-dom');
require('./index.css')

//A Component is concerned about the 3 different things:
// - state
// - lifecycle event
// - UI (user interface), use the render() method.

class App extends React.Component {
  render () {
    return (
      // Just regularly called JSX. isn't valie Javascript syntax
      <div>
        Hello React Training!
      </div>
      // Run thru webpack, and transformed with Babel.
      // It will be 'Transpiled' onto React.createElement
      // It will going to change to some like this.
      // return React.createElement("div", null, "Hello World!");
    )
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);

// After rendering the Component.
// After this Transpile the JSX things.

// Go ahead an create 'webpack.config.js'
// npm install --save-dev babel-core babel-loader babel-preset-env babel-preset-react css-loader style-loader html-webpack-plugin webpack webpack-dev-server
