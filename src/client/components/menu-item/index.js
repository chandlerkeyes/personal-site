import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
// import ACTIVE_DOT from "../../assets/circle.svg";

// const ACTIVE_DOT = require('../../assets/circle.svg');

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: false };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ active: !this.state.active });
  }

  renderActiveDot() {
    return this.state.active ? <div className="active"><img src={""}/></div> : null;
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
