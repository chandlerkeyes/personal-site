import React, { Component } from 'react';
import './styles.css';
require('dotenv').config()

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Welcome</h2>
        <p>{process.env.REACT_APP_ENVIRONMENT}</p>
      </div>
    );
  }
}

export default App;
