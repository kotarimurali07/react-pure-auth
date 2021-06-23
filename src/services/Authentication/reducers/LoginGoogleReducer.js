import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const LoginGoogleReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.LOGIN_GOOGLE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.LOGIN_GOOGLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION.LOGIN_GOOGLE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        state,
      };
  }
};
