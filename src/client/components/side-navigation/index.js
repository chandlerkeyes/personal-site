import React from 'react';
import { BREAKPOINTS } from "../../constants/breakpoints.js";
import MediaQuery from 'react-responsive';
import SideNavigationDesktop from './desktop';
import SideNavigationMobile from './mobile';
import "./styles.scss"

class SideNavigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <MediaQuery minWidth={BREAKPOINTS.TABLET_MIN}>
          <SideNavigationDesktop/>
        </MediaQuery>
        <MediaQuery maxWidth={BREAKPOINTS.TABLET_MIN}>
          <SideNavigationMobile/>
        </MediaQuery>
      </div>
    );
  }
}

export default SideNavigation;