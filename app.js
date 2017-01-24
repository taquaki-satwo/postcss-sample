import React from 'react';
import ReactDOM from 'react-dom';
import styles from './style.css';

class App extends React.Component {
  render() {
    return (
      <p className={styles.text}> HELLO CSS Modules </p>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#app')
);
