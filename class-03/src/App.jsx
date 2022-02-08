import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Modal from "./components/Modal";
import NavBarCmp from "./components/Navbar";
function App() {
  // let [value, setValue] = useState("JAFFAR AMAN");
  // let [color, setColor] = useState(true);
  // const [childValue, setchildValue] = useState();
  // const valueChange = () => {
  //   value = "Jaffar";
  //   setValue(value);
  // };

  // const changeCOlor = () => {
  //   // setColor(() => setColor("royalBlue"));
  //   setColor(!color);
  // };

  // const getvalue = (value) => {
  //   console.log("value", value);
  //   setchildValue(value);
  // };

  // const getValue = (e) => {
  //   console.log("hello " + e);
  // };

  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const getValue = (e) => {
  //   console.log(e);
  //   setInputValue(e);
  // };
  // console.log(inputValue);
  const addtodo = () => {
    console.log(inputValue);
    todo.push(inputValue);
    setTodo([...todo]);
  };
  // console.log([...todo]);
  return (
    <div
      className="Mainbox"
      // style={{ backgroundColor: color ? "white" : "royalblue" }}
    >
      <div>
        {/* <h1>PARENT components</h1> */}

        {/* <h1>HELLO {value} </h1> */}
        {/* <button onClick={valueChange} >CHANGE VALUE</button> */}
        {/* <button onClick={() => valueChange()}>CHANGE VALUE</button> */}
        {/* <h1>{childValue}</h1> */}
        {/* <Home value={value} getvalue={getvalue} setValue={setValue} /> */}

        {/* <button onClick={() => changeCOlor()}>COLOR THEME</button> */}

        {/* <About getValue={getValue} /> */}

        {/* <button className="btn btn-primary">SUBMIT</button> */}
        {/* <NavBarCmp />
      <Modal />
      <Button>SUBMIT</Button> */}
      </div>
      {/* ///todo */}
      <h1 className="text-center mt-5">TODO LIST</h1>
      <div className="w-50 mx-auto">
        <input
          type="text"
          placeholder="ENTER TODO..."
          className="my-5 form-control input-group"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-info mx-2" onClick={addtodo}>
          ADD TODO
        </button>
        <button className="btn btn-danger">DELETE TODO</button>
      </div>
      <section className="container">
        {todo.map((value, index, array) => {
          return <li key={index}> {value} </li>;
        })}
      </section>
    </div>
  );
}

export default App;
