import React from 'react';
import './styles.scss';
import Body from '../body';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <div className="app" id="app">
          <Body/>
        </div>
    );
  }
}

export default withRouter(App);
