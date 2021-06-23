import React from "react";
import Presentation from "./Presentation";
import { handleLogout } from "../../../middleware/index";
import { connect } from "react-redux";
const Container = (props) => {
  const { auth, _handleLogout } = props;
  const handleLogout = () => {
    _handleLogout();
  };
  return (
    <div>
      <Presentation auth={auth} handleLogout={handleLogout} />
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
    _handleLogout: () => dispatch(handleLogout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
