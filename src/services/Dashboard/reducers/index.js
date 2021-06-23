import { LogOutReducer } from "./logoutReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

export const dashboardReducer = combineReducers({
  logout: LogOutReducer,
  firebase: firebaseReducer,
});
