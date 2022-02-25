import React, { useEffect, useState } from "react";
import "./App.css";
import { db } from "./config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(async () => {
    const dbRef = collection(db, "todos");
    const data = await getDocs(dbRef);
    let getTodo = [];
    data.forEach((doc) => {
      getTodo.push({ key: doc.id, todo: doc.data().todo });
    });
    setTodo(getTodo);
  }, [refresh]);

  console.log(todo);
  const addTodo = async () => {
    const dbRef = collection(db, "todos");

    // addDoc(DBreference , obj)
    // const addData = await addDoc(dbRef, {
    //   todo: inputValue,
    // });
    // console.log(addData);
    try {
      const addData = await addDoc(dbRef, {
        todo: inputValue,
      });
      setRefresh(!refresh);
      console.log(addData);
    } catch (error) {
      console.log(error);
    }

    setInputValue("");
  };

  // const getData = async () => {
  //   const dbRef = collection(db, "todos");
  //   const data = await getDocs(dbRef);

  //   data.forEach((doc) => {
  //     console.log(doc.id);
  //     console.log(doc.data());
  //   });
  // };

  const updateTodo = async (key) => {
    // import doc , updateDoc
    console.log(key);
    const dbRef = doc(db, "todos", key);
    const editValue = prompt("enter value");
    const obj = {
      todo: editValue,
    };

    try {
      const updateResponse = await updateDoc(dbRef, obj);
      console.log(updateResponse);
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="ENTER YOUR TODO"
      />
      <button onClick={addTodo}>ADD</button>
      {/* <button onClick={getData}>GET DATA</button> */}
      <ul>
        {todo.map((val, ind) => {
          return val.todo !== "" ? (
            <div key={ind}>
              <li> {val.todo} </li>
              <button>DELETE</button>
              <button onClick={() => updateTodo(val.key)}>UPDATE</button>
            </div>
          ) : null;
        })}
      </ul>
    </div>
  );
}

export default App;
