import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../ChatComponents/Header";
import SideBar from "../ChatComponents/SideBar";
const Presentation = () => {
  return (
    <div>
      <Grid>
        <Header />
      </Grid>
      <Grid>{/* <SideBar /> */}</Grid>
    </div>
  );
};

export default Presentation;
