import React, { useEffect, useState } from "react";
import Presentation from "./Presentation";
import { useParams } from "react-router-dom";
import { db } from "../../../../../config/firebaseConfig";

const Container = () => {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);
  useEffect(() => {
    if (roomId) {
      db.collection("ROOMS")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("ROOMS")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log(roomDetails);
  console.log(roomMessages);
  return (
    <div>
      <Presentation
        roomId={roomId}
        roomDetails={roomDetails}
        roomMessages={roomMessages}
      />
    </div>
  );
};

export default Container;
