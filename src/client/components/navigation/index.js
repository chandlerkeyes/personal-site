import React from 'react';
import { BREAKPOINTS } from "../../constants/breakpoints.js";
import MediaQuery from 'react-responsive';
import NavigationDesktop from './desktop';
import NavigationMobile from './mobile';
import "./styles.scss"

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <MediaQuery minDeviceWidth={BREAKPOINTS.TABLET_MIN}>
          {(matches) => {
            if (matches) {
               return <NavigationDesktop/>;
            } else {
               return <NavigationMobile/>;
            }
          }}
        </MediaQuery>
      </div>
    );
  }
}

export default Navigation;