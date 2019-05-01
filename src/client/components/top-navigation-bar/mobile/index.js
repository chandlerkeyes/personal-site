import React, { Component } from 'react';
import { ASSETS } from "../../../assets/";
import { Collapse } from "react-collapse";
import { Link } from "react-router-dom";
import { PAGES } from '../../../../client/constants/routes';
import onClickOutside from "react-onclickoutside";
import './styles.scss';

class TopNavigationBarMobile extends Component {
  constructor(props) {
    super(props);

    this.state = { menuOpened: false }
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    this.setState({ menuOpened: false });
  }

  renderCollapsedMenu() {
    return <Collapse isOpened={this.state.menuOpened} className="top-navigation-bar-collapse-content">
      <div className="top-navigation-bar-dropdown-items">
        <Link to={PAGES.HOME}>Home</Link>
        <Link to={PAGES.ABOUT}>About</Link>
        <Link to={PAGES.CONTACT}>Contact</Link>
      </div>
    </Collapse>
  }

  render() {
    return (
      <div className="top-navigation-bar-mobile">
        <div className="top-navigation-bar-container">
        <div className="top-navigation-bar-links-container">
          <div className="top-navigation-dropdown-icon">
            <img src={ASSETS.MOBILE_NAV_MENU_ICON} onClick={() => {
              this.setState({ menuOpened: !this.state.menuOpened });
            }}/>
            {this.renderCollapsedMenu()}
          </div>
          <div className="top-navigation-bar-links">
            <a className="top-nav-link" href="https://github.com/chandlerkeyes" target="_blank" rel="noopener noreferrer"><img src={ASSETS.GITHUB}/></a>
            <a className="top-nav-link" href="https://www.linkedin.com/in/chandlerkeyes/" target="_blank" rel="noopener noreferrer"><img src={ASSETS.LINKEDIN}/></a>
            <a className="top-nav-link" href="https://www.youtube.com/channel/UCkeSKp49ycaZRlGKkCRRi1g" target="_blank" rel="noopener noreferrer"><img src={ASSETS.YOUTUBE}/></a>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default onClickOutside(TopNavigationBarMobile);