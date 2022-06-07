import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import TodoImg from "../Assets/todo.jpg";
import axios from "axios";
import BASE_URI from "../core";
import InputField from "./TextField";
import { toast } from "react-toastify";

export default function TodoCard({ obj, setRefresh, refresh }) {
  const { username, subject, todo, _id, image } = obj;

  const [editToggle, setEditToggle] = useState(false);
  const [updateSubject, setupdateSubject] = useState("");
  const [updateTodo, setupdateTodo] = useState("");

  const edittodo = () => {
    setEditToggle(!editToggle);
  };

  const updateHandler = () => {
    const udateObj = {
      subject: updateSubject,
      todo: updateTodo,
    };

    axios
      .put(`${BASE_URI}todo/${_id}`, udateObj)
      .then((res) => {
        setEditToggle(!editToggle);
        toast.success("TODO UPDATE SUCCESSFULLY", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setupdateSubject("");
        setupdateTodo("setupdateTodo");
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        component="img"
        height="140"
        image={image ? image : TodoImg}
        alt="green iguana"
        style={{ objectFit: "fill" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
        {editToggle ? (
          <InputField
            settodoValue={setupdateSubject}
            todoValue={updateSubject}
            placeholder={"EDIT SUBJECT"}
          />
        ) : (
          <Typography gutterBottom variant="h5" component="div">
            {subject}
          </Typography>
        )}

        {editToggle ? (
          <InputField
            settodoValue={setupdateTodo}
            todoValue={updateTodo}
            placeholder={"Edit TODO"}
          />
        ) : (
          <Typography variant="body2" color="text.secondary">
            {todo}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        {editToggle ? (
          <Button
            onClick={updateHandler}
            color="success"
            variant="contained"
            size="small"
          >
            UPDATE
          </Button>
        ) : (
          <>
            <Button onClick={edittodo} variant="contained" size="small">
              EDIT
            </Button>
            <Button color="error" variant="outlined" size="small">
              Delete
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}
