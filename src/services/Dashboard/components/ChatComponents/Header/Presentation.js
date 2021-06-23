import React from "react";
import { useStyles } from "../../../styles/Header";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router";

const Presentation = (props) => {
  const { auth, handleLogout } = props;
  const classes = useStyles();
  return (
    <div>
      <div>
        {!auth.uid ? <Redirect to="/Login" /> : null}
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                TODO-LIST
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                LOGOUT
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
