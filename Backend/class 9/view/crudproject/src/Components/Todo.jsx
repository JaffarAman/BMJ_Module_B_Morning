import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URI from "../core";

import TodoCard from "./TodoCard";
import InputField from "./TextField";
import styles from "./todo.module.css";
import AppButton from "./Button";
import { Grid } from "@mui/material";
import NavBar from "./Navbar";

import { toast } from "react-toastify";

const Todo = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [todoValue, settodoValue] = useState("");
  const [subjectValue, setsubjectVAlue] = useState("");
  const [todoObj, setTodoObj] = useState([]);

  useEffect(() => {
    if (!userData) {
      return navigate("/");
    }
  }, []);

  const createTodo = () => {
    if (!subjectValue || !todoValue) {
      toast.error("REQUIRED FIELD ARE MISSING", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const todoObj = {
      username: userData.username,
      subject: subjectValue,
      todo: todoValue,
    };
    axios
      .post(`${BASE_URI}todo`, todoObj)
      .then((res) => {
        toast.success("TODO CREATED SUCCESSFULLY", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        settodoValue("");
        setsubjectVAlue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    // get api
    axios
      .get(`${BASE_URI}todo`)
      .then((res) => {
        setTodoObj(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div className={styles.formWrapper}>
        <div className={styles.inputBox}>
          <InputField
            placeholder="SUBJECT"
            todoValue={subjectValue}
            settodoValue={setsubjectVAlue}
          />
          <InputField
            placeholder="TODO"
            todoValue={todoValue}
            settodoValue={settodoValue}
          />
        </div>
        <AppButton onClick={createTodo} text="CREATE TODO" />
      </div>

      <div>
        <Grid container spacing={2} padding="2rem">
          {todoObj.map((obj, ind) => {
            return (
              <Grid item xs={12} sm={4}>
                <div className={styles.todoCardWrapper} key={ind}>
                  <TodoCard obj={obj} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Todo;
