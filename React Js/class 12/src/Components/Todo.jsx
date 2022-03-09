import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";

const TodoApp = () => {
  const currentUserUid = localStorage.getItem("user");
  console.log(currentUserUid);
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [isPrivatePost, setIsPrivatePost] = useState(false);

  useEffect(async () => {
    const dbRef = collection(db, "todos");
    const getData = await getDocs(dbRef);
    let getTodo = [];
    getData.forEach((doc) => {
      //   console.log(doc.id);
      //   console.log(doc.data());
      getTodo.push({
        key: doc.id,
        todo: doc.data().todo,
        userId: doc.data().uId,
        private: doc.data().privatePost,
      });
    });
    setTodo(getTodo);
    // console.log("getTodo", getTodo);
  }, [refresh]);

  const addTodo = async () => {
    const dbRef = collection(db, "todos");

    try {
      const addData = await addDoc(dbRef, {
        todo: inputValue,
        uId: currentUserUid,
        privatePost: isPrivatePost,
      });

      console.log(addData);
      setRefresh(!refresh);
      setInputValue("");
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = async (key) => {
    const editValue = prompt("enter value");
    const dbRef = doc(db, "todos", key);
    const updateData = await updateDoc(dbRef, {
      todo: editValue,
    });
    setRefresh(!refresh);
  };

  const deleteTodo = async (key) => {
    const dbRef = doc(db, "todos", key);
    const delTodo = await deleteDoc(dbRef);
    setRefresh(!refresh);
  };

  const setPrivateValue = (checkbox) => {
    console.log(checkbox.checked);
    setIsPrivatePost(checkbox.checked);
  };

  return (
    <div>
      <div className="mt-5 container">
        <input
          value={inputValue}
          type="text"
          placeholder="Enter Todo"
          className="input-group form-control"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label htmlFor="">
          Private Post
          <input type="checkbox" onChange={(e) => setPrivateValue(e.target)} />
        </label>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-info mx-2" onClick={addTodo}>
            ADD TODO
          </button>
          <button className="btn btn-danger mx-2">DELETE TODO</button>
        </div>
      </div>

      <div className="">
        <ul>
          {todo.map((val, ind) => {
            console.log(val);

            return val.private ? (
              val.userId === currentUserUid ? (
                <div key={ind}>
                  <li> {val.todo} </li>
                  <button onClick={() => editTodo(val.key)}>EDIT</button>
                  <button onClick={() => deleteTodo(val.key)}>DELETE</button>
                </div>
              ) : null
            ) : (
              <div key={ind}>
                <li> {val.todo} </li>
                <button onClick={() => editTodo(val.key)}>EDIT</button>
                <button onClick={() => deleteTodo(val.key)}>DELETE</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
