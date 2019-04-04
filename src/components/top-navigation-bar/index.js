import React, { Component } from 'react';
import './styles.scss';

class TopNavigationBar extends Component {
  render() {
    return (
      <div className="top-navigation-bar">
        <div className="top-navigation-bar-container">
            <a className="top-nav-link" href="https://github.com/chandlerkeyes">GitHub</a>
            <a className="top-nav-link" href="https://www.linkedin.com/in/chandlerkeyes/">LinkedIn</a>
            <a className="top-nav-link" href="https://www.youtube.com/channel/UCkeSKp49ycaZRlGKkCRRi1g">CodingWithChandler</a>
        </div>
      </div>
    );
  }
}

export default TopNavigationBar
