import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BASE_URI from "../../core";

import TodoCard from "../../Components/TodoCard";
import InputField from "../../Components/TextField";
import styles from "./todo.module.css";
import AppButton from "../../Components/Button";
import { Grid } from "@mui/material";
import NavBar from "../../Components/Navbar";

import { toast } from "react-toastify";

const Todo = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [todoValue, settodoValue] = useState("");
  const [subjectValue, setsubjectVAlue] = useState("");
  const [todoObj, setTodoObj] = useState([]);
  const [getToggle, setGetToggle] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [loader, setLoader] = useState(false);

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
      image: imageUrl,
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
        setGetToggle(!getToggle);
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
  }, [getToggle, refresh]);

  const imageHandler = (image) => {
    setLoader(true);
    const todoImg = image[0];
    const formData = new FormData();
    formData.append("image", todoImg);
    axios
      .post(`${BASE_URI}imageupload`, formData)
      .then((res) => {
        console.log(res.data.secure_url, "res");
        setImageUrl(res.data.secure_url);
        setLoader(false);
      })
      .catch((err) => {
        console.log("err", err);
        setLoader(false);
      });
  };

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
          <input
            className="my-2"
            type="file"
            onChange={(e) => {
              imageHandler(e.target.files);
            }}
          />
        </div>
        {loader ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <AppButton onClick={createTodo} text="CREATE TODO" />
        )}
      </div>

      <div>
        <Grid container spacing={2} padding="2rem">
          {todoObj.map((obj, ind) => {
            return (
              <Grid item key={ind} xs={12} sm={4}>
                <div className={styles.todoCardWrapper} key={ind}>
                  <TodoCard
                    refresh={refresh}
                    setRefresh={setRefresh}
                    obj={obj}
                  />
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
