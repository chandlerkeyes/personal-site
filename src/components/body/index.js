import React, { Component } from 'react';
import './styles.scss';
import { PAGES } from '../../constants/routes';
import About from '../about';
import Tech from '../tech';
import Contact from '../contact';
import { Switch } from 'react-router-dom';
import Home from '../home';

const Route = require("react-router-dom").Route;

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <Switch>
          <Route exact path={PAGES.HOME} component={Home}/>
          <Route exact path={PAGES.ABOUT} component={About}/>
          <Route exact path={PAGES.TECH} component={Tech}/>
          <Route exact path={PAGES.CONTACT} component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Body;
