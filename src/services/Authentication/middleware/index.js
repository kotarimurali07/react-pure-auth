import {
  loginEmailRequest,
  loginEmailSuccess,
  loginEmailFailure,
  loginFaceBookRequest,
  loginFaceBookSuccess,
  loginFaceBookFailure,
  loginGoogleRequest,
  loginGoogleSuccess,
  loginGoogleFailure,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
} from "../actions/actionCreators";
import { Googleprovider } from "../../../config/firebaseConfig";
export const handleGoogleLogin = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    dispatch(loginGoogleRequest());
    firebase
      .auth()
      .getRedirectResult()
      .then((user) => {
        dispatch(loginGoogleSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(loginGoogleFailure());
      });
  };
};

//Login with email and password
export const handleEmailLogin = (cred) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    dispatch(loginEmailRequest());

    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then((userDetails) => {
        const user = userDetails.user;

        console.log("user logged in successfulyy");
        dispatch(loginEmailSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(loginEmailFailure());
        console.log("user logged in failed");
      });
  };
};

//create-new-acount
export const handleSignup = (newUserData) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    dispatch(signUpRequest());
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUserData.email, newUserData.password)
      .then((res) => {
        return firestore
          .collection("USERS")
          .doc(res.user.id)
          .set({
            ...newUserData,
            createdAt: new Date(),
          });
      })
      .then((res) => {
        console.log("USER CREATED SUCCESS FULLY");
        dispatch(signUpSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        console.log("UNABLE TO CREATE - USER");
        dispatch(signUpFailure());
      });
  };
};
//forgot-password
export const ForgotPassword = (data) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch(forgotPasswordRequest());
    const firebase = getFirebase();
    firebase
      .auth()
      .sendPasswordResetEmail(data.email)
      .then(() => {
        console.log("email send to email successfully....................");
        dispatch(forgotPasswordSuccess());
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(forgotPasswordFailure());
        console.log("unable to send email link to email................");
      });
  };
};
