import { Button } from "@material-ui/core";
import React from "react";
import { Redirect } from "react-router";
const Presentation = (props) => {
  const { handleLogin, auth } = props;
  return (
    <div>
      {auth.uid ? <Redirect to="/" /> : null}
      <Button onClick={handleLogin}>Google</Button>
    </div>
  );
};

export default Presentation;
