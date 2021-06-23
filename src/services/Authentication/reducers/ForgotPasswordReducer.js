import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const ForgotPasswordReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotpasswordLoading: true,
      };
    case ACTION.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotpasswordLoading: false,
      };
    case ACTION.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgotpasswordLoading: false,
      };
    default:
      return {
        state,
      };
  }
};
