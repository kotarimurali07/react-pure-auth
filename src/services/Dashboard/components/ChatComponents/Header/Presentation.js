import React from "react";
import { useStyles } from "../../../styles/Header";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const Presentation = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "#3f0340" }}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6" className={classes.title}></Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

export default Presentation;
