import React, { useState } from "react";
import Presentaion from "./Presentation";
const Container = () => {
  const [email, setEmail] = useState("");
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Presentaion email={email} setEmail={setEmail} open={open} />
    </div>
  );
};

export default Container;
