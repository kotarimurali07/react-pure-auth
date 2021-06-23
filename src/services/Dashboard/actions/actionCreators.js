import { ACTION } from "./actionTypes";
//setlistner
export const setListener = (listener, type) => ({
  type: ACTION.SET_LISTENER,
  payload: {
    listener,
    type,
  },
});
//logout
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
//channels-data
export const channelsDataRequest = () => {
  return {
    type: ACTION.CHANNELS_DATA_REQUEST,
  };
};

export const channelsDataSuccess = (payload) => {
  return {
    type: ACTION.CHANNELS_DATA_SUCCESS,
    payload,
  };
};

export const channelsDataFailure = () => {
  return {
    type: ACTION.CHANNELS_DATA_FAILURE,
  };
};
