import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const todoReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.TODO_DATA_REQUEST:
      return {
        ...state,
        logOutLoading: true,
      };
    case ACTION.TODO_DATA_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };
    case ACTION.TODO_DATA_FAILURE:
      return {
        ...state,
        logOutLoading: false,
      };
    default:
      return {
        state,
      };
  }
};
