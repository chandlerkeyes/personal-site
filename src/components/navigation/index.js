import React from 'react';
import MenuItem from '../menu-item';
import { PAGES } from '../../constants/routes.js';
import './styles.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
       <div className="container">
        <div className="links">
          <MenuItem to={PAGES.HOME} name="Home" />
          <MenuItem to={PAGES.ABOUT} name="About" />
          <MenuItem to={PAGES.TECH} name="Tech" />
          <MenuItem to={PAGES.CONTACT} name="Contact" />
        </div>
       </div>
      </div>
    );
  }
}

export default Navigation;