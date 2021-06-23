import React, { useState } from "react";
import Presentation from "./Presentation";
const Container = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Presentation
        email={email}
        setEmail={setEmail}
        password={password}
        // auth={auth}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Container;
