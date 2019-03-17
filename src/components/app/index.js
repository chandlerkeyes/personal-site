import React, { Component } from 'react';
import './styles.scss';
import Navigation from '../navigation';
import Body from '../body';
import Footer from '../footer';

class App extends React.Component {
  render() {
    return (
        <div className="app" id="app">
          <Navigation />
          <Body/>
          <Footer />
        </div>
    );
  }
}

export default App;
