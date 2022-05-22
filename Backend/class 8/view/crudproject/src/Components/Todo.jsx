import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URI from "../core";

const Todo = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [todoValue, settodoValue] = useState("");

  useEffect(() => {
    if (!userData) {
      return navigate("/");
    }
  }, []);

  const todoSubmit = () => {
    console.log("todoValue", todoValue);
    const todoObj = {
      username: userData.username,
      subject: "todo",
      todo: todoValue,
    };
    axios
      .post(`${BASE_URI}todo`, todoObj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(()=>{
    // get api
  } , [])

  return (
    <div>
      <h1>TODO</h1>
      <div>
        <input
          value={todoValue}
          onChange={(e) => settodoValue(e.target.value)}
          type="text"
          placeholder="enter your todo"
        />
        <button onClick={todoSubmit}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Todo;
