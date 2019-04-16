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
        <MediaQuery minDeviceWidth={BREAKPOINTS.TABLET_MIN}>
          {(matches) => {
            if (matches) {
               return <TopNavigationBarDesktop/>;
            } else {
               return <TopNavigationBarMobile/>;
            }
          }}
        </MediaQuery>
      </div>
    );
  }
}

export default TopNavigationBar;