import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../ChatComponents/Header";
import SideBar from "../ChatComponents/SideBar";
const Presentation = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={4}>
          <SideBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Presentation;
