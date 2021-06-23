import React, { useState } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { handleEmailLogin } from "../../../middleware/index";
const Container = (props) => {
  const { _handleEmailLogin, auth } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    _handleEmailLogin(data);
  };
  return (
    <div>
      <Presentation
        auth={auth}
        email={email}
        setEmail={setEmail}
        password={password}
        handleSubmit={handleSubmit}
        setPassword={setPassword}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleEmailLogin: (creds) => dispatch(handleEmailLogin(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
