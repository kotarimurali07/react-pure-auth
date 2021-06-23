import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { authReducer } from "../services/Authentication/reducers/index";
import { dashboardReducer } from "../services/Dashboard/reducers/index";

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
});
