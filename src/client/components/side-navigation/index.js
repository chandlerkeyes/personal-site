import React from 'react';
import MenuItem from '../menu-item';
import { PAGES } from '../../constants/routes.js';
import './styles.scss';
import { ASSETS } from "../../assets/";
import onClickOutside from "react-onclickoutside";

const CLOSE_MENU_MARGIN = -230;

class SideNavigation extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { menuOpened: false };
    this.menuIconClicked = this.menuIconClicked.bind(this);
  }

  handleClickOutside() {
    this.setState({ menuOpened: false });
  }

  slideMenu() {
    return (this.state.menuOpened ? {}: { marginLeft: CLOSE_MENU_MARGIN })
  }

  menuIconClicked() {
    this.setState({ menuOpened: !this.state.menuOpened });
  }
  
  render() {
    return (
      <div className="side-navigation" style={this.slideMenu()}>
        <div className="menu-icon"><img src={ASSETS.NAV_MENU_ICON} alt="Menu Icon" onClick={() => { this.menuIconClicked() }} /></div>
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

export default onClickOutside(SideNavigation);
