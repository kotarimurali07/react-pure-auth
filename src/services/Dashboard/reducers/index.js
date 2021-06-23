import { LogOutReducer } from "./logoutReducer";
import { combineReducers } from "redux";

export const dashboardReducer = combineReducers({
  logout: LogOutReducer,
});
