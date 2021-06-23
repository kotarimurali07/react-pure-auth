import { ACTION } from "../actions/actionTypes";
import { initialState } from "./initialState";

export const channelReducer = (state, action = initialState) => {
  switch (action.type) {
    case ACTION.CHANNELS_DATA_REQUEST:
      return {
        ...state,
        logOutLoading: true,
      };
    case ACTION.CHANNELS_DATA_SUCCESS:
      return {
        ...state,
        channels: action.payload,
      };
    case ACTION.CHANNELS_DATA_FAILURE:
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
