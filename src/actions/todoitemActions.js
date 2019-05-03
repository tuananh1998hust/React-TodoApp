import { GET_TODOITEMS, SUCCESS_CLICK, DELETE_CLICK } from "./types";

export const getTodoitems = () => {
  return {
    type: GET_TODOITEMS
  };
};

export const successClick = id => {
  return {
    type: SUCCESS_CLICK,
    payload: id
  };
};

export const deleteClick = id => {
  return {
    type: DELETE_CLICK,
    payload: id
  };
};
