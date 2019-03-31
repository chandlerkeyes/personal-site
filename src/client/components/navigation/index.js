import React from 'react';
import MenuItem from '../menu-item';
import { PAGES } from '../../constants/routes.js';
import './styles.scss';

import NavigationMenuIcon from "../../assets/menu.svg";

const CLOSE_MENU_MARGIN = -230;

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { menuOpened: false };
    this.menuIconClicked = this.menuIconClicked.bind(this);
  }

  slideMenu() {
    return (this.state.menuOpened ? {}: { marginLeft: CLOSE_MENU_MARGIN })
  }

  menuIconClicked() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }
  render() {
    return (
      <div className="navigation" style={this.slideMenu()}>
        <div className="menu-icon"><img src={NavigationMenuIcon} alt="Menu Icon" onClick={() => { this.menuIconClicked() }} /></div>
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