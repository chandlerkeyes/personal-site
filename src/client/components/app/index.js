import React from 'react';
import './styles.scss';
import Body from '../body';

class App extends React.Component {
  render() {
    return (
        <div className="app" id="app">
          <Body/>
        </div>
    );
  }
}

export default App;
