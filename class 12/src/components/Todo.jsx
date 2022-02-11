import React, { useState } from "react";
// import { FaBeer } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  // console.log("inputValue", inputValue);

  const addtodo = () => {
    console.log(inputValue);
    todo.push(inputValue);
    setTodo([...todo]);
    setInputValue("");
  };

  const deleteAll = () => {
    setTodo([]);
  };

  const deleteTodo = (ind) => {
    console.log("hello", ind);
    todo.splice(ind, 1);
    setTodo([...todo]);
  };

  const editTodo = (ind) => {
    // console.log(ind);
    // const updateValue = prompt("update value");
    // console.log(updateValue);
    // todo.splice(ind, 1, updateValue);
    // setTodo([...todo]);
    console.log(ind);
    setIndexValue(ind);
  };

  const updateValue = () => {
    console.log(editInputValue);
    todo.splice(indexValue, 1, editInputValue);
    setTodo([...todo]);
    setIndexValue("");
    setEditInputValue("");
  };
  console.log("todo", todo);
  return (
    <div className="Mainbox">
      <h1 className="text-center mt-5">
        TODO LIST
        <BiEdit />
      </h1>
      <div className="w-50 mx-auto">
        <input
          type="text"
          value={inputValue}
          placeholder="ENTER TODO..."
          className="my-5 form-control input-group"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-info mx-2" onClick={addtodo}>
          ADD TODO
        </button>
        <button className="btn btn-danger" onClick={deleteAll}>
          DELETE TODO
        </button>
      </div>

      {/* ////ui /// */}
      <section className="container">
        {todo.map((value, index, array) => {
          return index === indexValue ? (
            <>
              <input
                key={index}
                placeholder="edit value"
                value={editInputValue}
                className="mt-3 input-group w-50 form-control d-inline-block mx-3"
                onChange={(e) => setEditInputValue(e.target.value)}
              />
              <button className="btn btn-info" onClick={updateValue}>
                update
              </button>
            </>
          ) : (
            <div key={index} className="mt-3">
              <li className="w-50  d-inline-block mx-3"> {value} </li>
              <span onClick={() => deleteTodo(index)}>
                <AiFillDelete color="orange" size={35} />
              </span>
              {/* <button className="btn btn-info">EDIT</button> */}
              <span onClick={() => editTodo(index)}>
                <BiEdit color="orange" size={35} />
              </span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Todo;
