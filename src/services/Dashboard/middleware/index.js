import {
  logOutRequest,
  logOutSuccess,
  logOutFailure,
} from "../actions/actionCreators";

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
