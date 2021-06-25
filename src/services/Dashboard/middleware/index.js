import {
  logOutRequest,
  logOutSuccess,
  logOutFailure,
  todoDataRequest,
  todoDataSuccess,
  todoDataFailure,
} from "../actions/actionCreators";
import { db } from "../../../config/firebaseConfig";
//logout

export const handleLogout = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(logOutRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log(`signout successfully`);
        dispatch(logOutSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(logOutFailure());
      });
  };
};

export const handleTodo = () => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    dispatch(todoDataRequest());
    firestore
      .collection("TODOS")
      .get()
      .then((snap) => {
        snap.docs.forEach((doc) => {
          console.log(doc.data());
          dispatch(todoDataSuccess(doc.data()));
        });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(todoDataFailure());
      });
  };
};
