import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTodoitems, successClick } from "../actions/todoitemActions";

import check from "../images/check.png";
import success from "../images/success.png";

import "./TodoItem.css";

class TodoItem extends Component {
  componentDidMount() {
    this.props.getTodoitems();
  }

  onSuccessClick = id => {
    this.props.successClick(id);
  };

  render() {
    const { todolist } = this.props.todolist;
    return (
      <div>
        <ul className="list">
          {todolist.map(item => (
            <li
              className="item"
              key={item.id}
              onClick={this.onSuccessClick.bind(this, item.id)}
            >
              <img
                className="img"
                src={item.isCompleted ? success : check}
                alt="check"
              />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todolist: PropTypes.object.isRequired,
  getTodoitems: PropTypes.func.isRequired,
  successClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(
  mapStateToProps,
  { getTodoitems, successClick }
)(TodoItem);
