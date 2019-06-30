import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
import MediaQuery from 'react-responsive';
import { PAGES } from '../../constants/routes';
import { BREAKPOINTS } from "../../constants/breakpoints.js";

class Home extends React.Component {
  renderDesktopOverlay() {
    return <div className="overlay">
    <h1>Want to work together?</h1>
    <Link to={PAGES.CONTACT}><button>Contact</button></Link>
  </div>;
  }

  renderMobileOverlay() {
    return <div className="overlay-mobile">
    <h1 className="welcome-text">Welcome</h1>
    <h2>Lets Work Together!</h2>
    <Link to={PAGES.CONTACT}><button>Contact</button></Link>
  </div>;
  }

  render() {
    return (
      <div className="home">
        <MediaQuery minWidth={BREAKPOINTS.TABLET_MIN}>
          {this.renderDesktopOverlay()}
        </MediaQuery>
        <MediaQuery maxWidth={BREAKPOINTS.TABLET_MIN - 1}>
          {this.renderMobileOverlay()}
        </MediaQuery>
      </div>
    );
  }
}

export default Home;