import { ForgotPasswordReducer } from "./ForgotPasswordReducer";
import { LoginEmailReducer } from "./LoginEmailReducer";
import { LoginFacebookReducer } from "./LoginFaceBookReducer";
import { LoginGoogleReducer } from "./LoginGoogleReducer";
import { LogOutReducer } from "./LogOutReducer";
import { SignUpReducer } from "./SignUpReducer";
import { combineReducers } from "redux";

export const authReducer = combineReducers({
  emailLogin: LoginEmailReducer,
  facebookLogin: LoginFacebookReducer,
  googleLogin: LoginGoogleReducer,
  logout: LogOutReducer,
  signup: SignUpReducer,
  forgotPassword: ForgotPasswordReducer,
});
