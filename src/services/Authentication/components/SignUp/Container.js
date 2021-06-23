import React, { useState } from "react";
import Presentation from "./Presentation";
const Container = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Presentation
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        // auth={auth}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        // buttonDisble={buttonDisble}
        // handleSubmitSignUP={handleSubmitSignUP}
      />
    </div>
  );
};

export default Container;
