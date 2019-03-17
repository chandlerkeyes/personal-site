import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { PAGES } from "../../constants/routes.js";
import './styles.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
       <div className="container">
        <div className="links">
          <Link to={PAGES.ABOUT}>ABOUT</Link>
          <Link to={PAGES.TECH}>TECH</Link>
          <Link to={PAGES.CONTACT}>CONTACT</Link>
        </div>
       </div>
      </div>
    );
  }
}

export default Navigation;