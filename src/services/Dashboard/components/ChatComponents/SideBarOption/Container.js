import React from "react";
import Presentation from "./Presentation";

import { db } from "../../../../../config/firebaseConfig";
const Container = (props) => {
  const addChannel = () => {
    const channelName = prompt("enter the channel name");
    if (channelName) {
      db.collection("ROOMS").add({
        name: channelName,
      });
    }
  };
  return (
    <div>
      <Presentation {...props} addChannel={addChannel} />
    </div>
  );
};

export default Container;
