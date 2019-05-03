import uuid from "uuid";
import { GET_TODOITEMS } from "../actions/types";

const inititalState = {
  todolist: [
    { id: uuid(), title: "Go to School", isCompleted: false },
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
    default:
      return state;
  }
}
