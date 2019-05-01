import React from 'react';
import './styles.scss';
import { PAGES } from '../../constants/routes';
import About from '../about';
import Contact from '../contact';
import { Switch } from 'react-router-dom';
import Home from '../home';
import MediaQuery from 'react-responsive';
import SideNavigation from '../side-navigation';
import Footer from '../footer';
import TopNavigationBar from "../top-navigation-bar/";
import { BREAKPOINTS } from '../../constants/breakpoints';

const Route = require("react-router-dom").Route;

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <MediaQuery minWidth={BREAKPOINTS.TABLET_MIN}>
          <SideNavigation/>
        </MediaQuery>
        <TopNavigationBar/>
          <Switch>
            <Route exact path={PAGES.HOME} component={Home}/>
            <Route exact path={PAGES.ABOUT} component={About}/>
            <Route exact path={PAGES.CONTACT} component={Contact}/>
          </Switch>
          <Footer/>
      </div>
    );
  }
}

export default Body;
