import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getFirebase,
  reactReduxFirebase,
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import { rootReducer } from "./rootReducer";
import firebaseConfig from "../config/firebaseConfig";
import { getFirestore, reduxFirestore } from "redux-firestore";
export const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(firebaseConfig, {
        useFirestoreForProfile: true,
        userProfile: "users",
      }),
      reduxFirestore(firebaseConfig)
    )
  )
);
