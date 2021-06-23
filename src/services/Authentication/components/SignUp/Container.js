import React, { useState } from "react";
import Presentation from "./Presentation";
import { handleSignup } from "../../middleware/index";
import { connect } from "react-redux";
const Container = (props) => {
  const { _handleSignup, auth } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { firstName, lastName, email, password };
    _handleSignup(data);
  };
  return (
    <div>
      <Presentation
        auth={auth}
        handleSubmit={handleSubmit}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.firebase.auth.uid);
  return {
    auth: state.firebase.auth,
  };
};
const mapDisPatchToProps = (dispatch) => {
  return {
    _handleSignup: (newUserData) => dispatch(handleSignup(newUserData)),
  };
};
export default connect(mapStateToProps, mapDisPatchToProps)(Container);
