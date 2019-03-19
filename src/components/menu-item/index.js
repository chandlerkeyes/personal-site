import React from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

export default class MenuItem extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ active: true });
  }

  renderActiveDot() {
    return this.state.active ? <div className="active">.</div> : null;
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
