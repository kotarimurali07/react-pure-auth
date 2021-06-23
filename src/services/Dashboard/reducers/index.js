import { LogOutReducer } from "./logoutReducer";
import { combineReducers } from "redux";
import { channelReducer } from "./channelReducer";
export const dashboardReducer = combineReducers({
  logout: LogOutReducer,
  channels: channelReducer,
});
