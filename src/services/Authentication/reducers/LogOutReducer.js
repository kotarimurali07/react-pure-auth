import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const LogOutReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.LOGOUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
      };
    case ACTION.LOGOUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
      };
    case ACTION.LOGOUT_FAILURE:
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
