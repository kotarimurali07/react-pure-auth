import {
  logOutRequest,
  logOutSuccess,
  logOutFailure,
  channelsDataRequest,
  channelsDataSuccess,
  channelsDataFailure,
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
//get-channels-data

export const getChannelsData = () => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(channelsDataRequest());
    const data = db
      .collection("ROOMS")
      .doc()
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => ({
          id: doc.is,
          name: doc.data().name,
        }));
      });
    console.log(data);
  };
};
