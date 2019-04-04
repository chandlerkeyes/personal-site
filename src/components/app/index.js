import React, { Component } from 'react';
import TopNavigationBar from "../top-navigation-bar";
import './styles.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <TopNavigationBar/>
      </div>
    );
  }
}

export default App;
