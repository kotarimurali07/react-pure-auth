import React, { useState, useEffect } from "react";
import Presentation from "./Presentation";
import { db } from "../../../../../config/firebaseConfig";
import { handleTodo } from "../../../middleware/index";
import { connect } from "react-redux";
const Container = (props) => {
  const { _handleTodo } = props;
  const [input, setinput] = useState("");
  const [todos, settodos] = useState([]);
  const Addtodo = (e) => {
    settodos([...todos, input]);
    setinput("");
    e.preventDefault();
    const key = Date.now;
    console.log(key);
    // _handleTodo(...todos, input);
  };
  const DeleteTodo = (index) => {
    const Tododata = todos.filter((todo, i) => index !== i);
    settodos(Tododata);
  };
  useEffect(() => {
    if (input) {
      db.collection("TODOS").add({
        meassage: input,
      });
    }
  }, []);
  return (
    <div>
      <Presentation
        input={input}
        todos={todos}
        setinput={setinput}
        settodos={settodos}
        Addtodo={Addtodo}
        DeleteTodo={DeleteTodo}
      />
    </div>
  );
};
const mapStatetoProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    _handleTodo: () => dispatch(handleTodo()),
  };
};
export default connect(mapStatetoProps, mapDispatchToProps)(Container);
