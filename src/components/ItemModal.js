import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addTodo } from "../actions/todoitemActions";

import "./ItemModal.css";

class ItemModal extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onKeyUp = e => {
    if (e.keyCode === 13) {
      this.props.addTodo(this.state.title);
      this.setState({
        title: ""
      });
    }
  };

  render() {
    return (
      <div className="item-modal">
        <input
          className="input"
          type="text"
          onChange={this.onChange}
          value={this.state.title}
          placeholder="Add new work"
          onKeyUp={this.onKeyUp}
        />
      </div>
    );
  }
}

ItemModal.propTypes = {
  todolist: PropTypes.object.isRequired,
  addTodo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(
  mapStateToProps,
  { addTodo }
)(ItemModal);
