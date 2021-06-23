import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getFirebase,
  reactReduxFirebase,
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import { rootReducer } from "../services/Authentication/reducers/index";
import firebaseConfig from "../config/firebaseConfig";
import { getFirestore, reduxFirestore } from "redux-firestore";
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      //   ReactReduxFirebaseProvider(firebaseConfig),
      //   reactReduxFirebase(firebaseConfig),
      reduxFirestore(firebaseConfig)
    )
  )
);
