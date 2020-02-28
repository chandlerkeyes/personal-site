import React from 'react';
import './styles.scss';
import Body from '../body';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
          <Body/>
    );
  }
}

export default withRouter(App);
