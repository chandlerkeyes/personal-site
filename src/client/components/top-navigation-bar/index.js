import React from 'react';
import { BREAKPOINTS } from "../../constants/breakpoints.js";
import MediaQuery from 'react-responsive';
import TopNavigationBarDesktop from './desktop';
import TopNavigationBarMobile from './mobile';
import "./styles.scss"

class TopNavigationBar extends React.Component {
  render() {
    return (
      <div className="navigation">
        <MediaQuery minWidth={BREAKPOINTS.TABLET_MIN}>
          <TopNavigationBarDesktop/>
        </MediaQuery>
        <MediaQuery maxWidth={BREAKPOINTS.TABLET_MIN}>
          <TopNavigationBarMobile/>
        </MediaQuery>
      </div>
    );
  }
}

export default TopNavigationBar;