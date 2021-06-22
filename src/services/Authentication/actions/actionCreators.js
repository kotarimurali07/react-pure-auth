import { ACTION } from "./actionTypes";
//login email
export const loginEmailRequest = () => {
  return {
    type: ACTION.LOGIN_EMAIL_REQUEST,
  };
};

export const loginEmailSuccess = () => {
  return {
    type: ACTION.LOGIN_EMAIL_SUCCESS,
  };
};

export const loginEmailFailure = () => {
  return {
    type: ACTION.LOGIN_EMAIL_FAILURE,
  };
};
//login google
export const loginGoogleRequest = () => {
  return {
    type: ACTION.LOGIN_GOOGLE_REQUEST,
  };
};

export const loginGoogleSuccess = () => {
  return {
    type: ACTION.LOGIN_GOOGLE_SUCCESS,
  };
};

export const loginGoogleFailure = () => {
  return {
    type: ACTION.LOGIN_GOOGLE_FAILURE,
  };
};
//login facebook
export const loginFaceBookRequest = () => {
  return {
    type: ACTION.LOGIN_FACEBOOK_REQUEST,
  };
};

export const loginFaceBookSuccess = () => {
  return {
    type: ACTION.LOGIN_FACEBOOK_SUCCESS,
  };
};

export const loginFaceBookFailure = () => {
  return {
    type: ACTION.LOGIN_FACEBOOK_FAILURE,
  };
};
//forgot-password
export const forgotPasswordRequest = () => {
  return {
    type: ACTION.FORGOT_PASSWORD_REQUEST,
  };
};
export const forgotPasswordSuccess = () => {
  return {
    type: ACTION.FORGOT_PASSWORD_SUCCESS,
  };
};
export const forgotPasswordFailure = () => {
  return {
    type: ACTION.FORGOT_PASSWORD_FAILURE,
  };
};
//sign-up
export const signUpRequest = () => {
  return {
    type: ACTION.SIGN_UP_REQUEST,
  };
};

export const signUpSuccess = () => {
  return {
    type: ACTION.SIGN_UP_SUCCESS,
  };
};

export const signUpFailure = () => {
  return {
    type: ACTION.SIGN_UP_FAILURE,
  };
};

//log-out

export const logOutRequest = () => {
  return {
    type: ACTION.LOGOUT_FAILURE,
  };
};

export const logOutSuccess = () => {
  return {
    type: ACTION.LOGOUT_SUCCESS,
  };
};

export const logOutFailure = () => {
  return {
    type: ACTION.LOGOUT_FAILURE,
  };
};
