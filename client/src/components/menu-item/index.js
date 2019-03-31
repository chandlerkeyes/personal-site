import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

const ACTIVE_DOT = require('@Client/src/assets/dot.png');

export default class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ active: !this.state.active });
  }

  renderActiveDot() {
    return this.state.active ? <div className="active"><img src=""/></div> : null;
  }

  renderItemName() {
    if (this.state.active) {
      return <div className="active-menu-item">{this.renderActiveDot()} {this.props.name}</div>;
    } 
    return this.props.name;
  }

  render() {
    return (
      <div className="menu-item">
        <Link to={this.props.to} onClick={this.onClickHandler}>{this.renderItemName()}</Link>
      </div>
    );
  }
}
