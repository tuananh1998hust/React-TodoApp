import React, { Component } from "react";

// Components
import TodoItem from "./components/TodoItem";
import ItemModal from "./components/ItemModal";

class App extends Component {
  render() {
    return (
      <div>
        <h2>Todo App</h2>
        <ItemModal />
        <TodoItem />
      </div>
    );
  }
}

export default App;
