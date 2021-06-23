import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const LoginFacebookReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.LOGIN_FACEBOOK_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.LOGIN_FACEBOOK_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION.LOGIN_FACEBOOK_FAILURE:
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
