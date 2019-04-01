import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

import ActiveDot from "../../assets/circle.svg";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  onClickHandler() {
    this.setState({ active: !this.state.active });
  }

  renderActiveDot() {
    return this.state.active ? <div className="active"><img src={ActiveDot} alt="Active Dot"/></div> : null;
  }

  renderItemName() {
    if (this.state.active) {
      return <div className="active-menu-item">{this.renderActiveDot()} <div className="active-menu-item-name">{this.props.name}</div></div>;
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