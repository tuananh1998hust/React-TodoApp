import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTodoitems } from "../actions/todoitemActions";

class TodoItem extends Component {
  componentDidMount() {
    this.props.getTodoitems();
  }

  render() {
    const { todolist } = this.props.todolist;
    return (
      <div>
        <ul>
          {todolist.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todolist: PropTypes.object.isRequired,
  getTodoitems: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  todolist: state.todolist
});

export default connect(
  mapStateToProps,
  { getTodoitems }
)(TodoItem);
