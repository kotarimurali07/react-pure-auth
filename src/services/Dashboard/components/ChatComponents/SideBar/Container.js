import React, { useState, useEffect } from "react";
import Presentation from "./Presentation";
import { connect } from "react-redux";
import { getChannelsData } from "../../../middleware/index";
import { db } from "../../../../../config/firebaseConfig";
const Container = (props) => {
  const { auth } = props;
  console.log(auth);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("ROOMS").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);
  return (
    <div>
      <Presentation channels={channels} email={auth} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps, null)(Container);
