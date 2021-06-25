import { LogOutReducer } from "./logoutReducer";
import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
export const dashboardReducer = combineReducers({
  logout: LogOutReducer,
  todos: todoReducer,
});
