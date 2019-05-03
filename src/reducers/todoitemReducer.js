import uuid from "uuid";
import {
  GET_TODOITEMS,
  SUCCESS_CLICK,
  DELETE_CLICK,
  ADD_TODO
} from "../actions/types";

const inititalState = {
  todolist: [
    { id: uuid(), title: "Go to School", isCompleted: true },
    { id: uuid(), title: "Study", isCompleted: false },
    { id: uuid(), title: "Come back home", isCompleted: false }
  ]
};

export default function(state = inititalState, action) {
  switch (action.type) {
    case GET_TODOITEMS:
      return {
        ...state,
        todolist: [...state.todolist]
      };

    case SUCCESS_CLICK:
      return {
        ...state,
        todolist: state.todolist.map(item => {
          if (item.id === action.payload) {
            item.isCompleted = !item.isCompleted;
          }
          return item;
        })
      };

    case DELETE_CLICK:
      return {
        ...state,
        todolist: state.todolist.filter(item => item.id !== action.payload)
      };

    case ADD_TODO:
      return {
        ...state,
        todolist: [{ id: uuid(), title: action.payload }, ...state.todolist]
      };

    default:
      return state;
  }
}
