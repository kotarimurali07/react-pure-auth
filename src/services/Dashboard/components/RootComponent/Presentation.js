import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Header from "../ChatComponents/Header";
import SideBar from "../ChatComponents/Sidebar";
import Chat from "../ChatComponents/Chat";
const Presentation = () => {
  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Paper>
            <Header />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <Chat />
        </Grid>
      </Grid>
    </div>
  );
};

export default Presentation;
