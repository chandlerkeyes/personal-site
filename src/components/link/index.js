import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './styles.scss';

class link extends React.Component {
  render() {
    return (
      <div className="link">
        <Link to={this.props.to}>{this.props.name}</Link>
      </div>
    );
  }
}

export default link;