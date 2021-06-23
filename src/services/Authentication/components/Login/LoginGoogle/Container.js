import React from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { handleGoogleLogin } from "../../../middleware/index";
const Container = (props) => {
  const { auth, _handleGoogleLogin } = props;
  const handleLogin = (e) => {
    e.preventDefault();
    _handleGoogleLogin();
  };
  return (
    <div>
      <Presentation handleLogin={handleLogin} auth={auth} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid);
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleGoogleLogin: () => dispatch(handleGoogleLogin()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
