import React from "react";
import Presentation from "./Presentation";
const Container = (props) => {
  return (
    <div>
      <Presentation {...props} />
    </div>
  );
};

export default Container;
