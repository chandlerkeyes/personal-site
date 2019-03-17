import React, { Component } from 'react';
import Link from '../link';
import { PAGES } from '../../constants/routes.js';
import './styles.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
       <div className="container">
        <div className="links">
          <Link to={PAGES.HOME} name="Home" />
          <Link to={PAGES.ABOUT} name="About" />
          <Link to={PAGES.TECH} name="Tech" />
          <Link to={PAGES.CONTACT} name="Contact" />
        </div>
       </div>
      </div>
    );
  }
}

export default Navigation;