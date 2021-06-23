import { ACTION } from "./actionTypes";
//log-out

export const logOutRequest = () => {
  return {
    type: ACTION.LOGOUT_FAILURE,
  };
};

export const logOutSuccess = () => {
  return {
    type: ACTION.LOGOUT_SUCCESS,
  };
};

export const logOutFailure = () => {
  return {
    type: ACTION.LOGOUT_FAILURE,
  };
};
