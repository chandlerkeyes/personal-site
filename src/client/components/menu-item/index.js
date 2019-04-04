import React from 'react';
import { Link } from "react-router-dom";
import ActiveDot from "../../assets/circle.svg";
import store from '../../store/index.js';
import { Actions } from '../../actions';
import { connect } from "react-redux";
import './styles.scss';

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    store.dispatch(Actions.menuItemClickedAction(this.props.name));
  }

  renderActiveDot() {
    if (this.props.activeMenuItem === this.props.name) {
      return <div className="active"><img src={ActiveDot} alt="Active Dot"/></div>
    }
    return null;
  }

  renderItemName() {
    if (this.props.activeMenuItem === this.props.name) {
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

const mapStateToProps = (state) => {
  return { activeMenuItem: state.activeMenuItem };
};

const MenuItemComponent = connect(mapStateToProps,{},null)(MenuItem);

export default MenuItemComponent;