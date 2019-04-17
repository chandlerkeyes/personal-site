import React, { Component } from 'react';
import { ASSETS } from "../../../assets/";
import './styles.scss';

class TopNavigationBarMobile extends Component {
  render() {
    return (
      <div className="top-navigation-bar-mobile">
        <div className="top-navigation-bar-container">
        <div className="top-navigation-bar-links-container">
            <a className="top-nav-link" href="https://github.com/chandlerkeyes" target="_blank" rel="noopener noreferrer"><img src={ASSETS.GITHUB}/></a>
            <a className="top-nav-link" href="https://www.linkedin.com/in/chandlerkeyes/" target="_blank" rel="noopener noreferrer"><img src={ASSETS.LINKEDIN}/></a>
            <a className="top-nav-link" href="https://www.youtube.com/channel/UCkeSKp49ycaZRlGKkCRRi1g" target="_blank" rel="noopener noreferrer"><img src={ASSETS.YOUTUBE}/></a>
        </div>
        </div>
      </div>
    );
  }
}

export default TopNavigationBarMobile;