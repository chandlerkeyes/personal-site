import React, { Component } from 'react';
import './styles.scss';

class TopNavigationBar extends Component {
  render() {
    return (
      <div className="top-navigation-bar">
        <div className="top-navigation-bar-container">
            <a className="top-nav-link" href="https://github.com/chandlerkeyes" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="top-nav-link" href="https://www.linkedin.com/in/chandlerkeyes/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="top-nav-link" href="https://www.youtube.com/channel/UCkeSKp49ycaZRlGKkCRRi1g" target="_blank" rel="noopener noreferrer">CodingWithChandler</a>
        </div>
      </div>
    );
  }
}

export default TopNavigationBar
