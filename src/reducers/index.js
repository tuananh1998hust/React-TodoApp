import { combineReducers } from "redux";

import todoitemReducer from "./todoitemReducer";

export default combineReducers({
  todolist: todoitemReducer
});
