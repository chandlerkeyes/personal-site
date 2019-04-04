import React from 'react';
import './styles.scss';
import Body from '../body';
import { withRouter } from 'react-router-dom';
import TopNavigationBar from "../top-navigation-bar";

class App extends React.Component {
  render() {
    return (
        <div className="app" id="app">
          <TopNavigationBar/>
          <Body/>
        </div>
    );
  }
}

export default withRouter(App);
