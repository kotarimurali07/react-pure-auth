import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const SignUpReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.SIGN_UP_REQUEST:
      return {
        ...state,
        SignUpLoading: false,
      };
    case ACTION.SIGN_UP_SUCCESS:
      return {
        ...state,
        SignUpLoading: false,
      };
    case ACTION.SIGN_UP_FAILURE:
      return {
        ...state,
        SignUpLoading: false,
      };
    default:
      return {
        state,
      };
  }
};
