import React, { useState } from "react";
import Presentaion from "./Presentation";
import { connect } from "react-redux";
import { ForgotPassword } from "../../middleware/index";
const Container = (props) => {
  const { _ForgotPassword } = props;
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(true);
  const handleSubmit = () => {
    const data = { email };
    _ForgotPassword(data);
  };

  return (
    <div>
      <Presentaion
        email={email}
        setEmail={setEmail}
        open={open}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    _ForgotPassword: (email) => dispatch(ForgotPassword(email)),
  };
};
export default connect(null, mapDispatchToProps)(Container);
