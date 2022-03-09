import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BiHappyAlt } from "react-icons/bi";
import { FaSadCry } from "react-icons/fa";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  const [isHappy, setIsHappy] = useState(true);
  const [update, setUpdate] = useState(false);

  const foo = () => {
    console.log("HELLO CLASS");
  };

  useEffect(foo, [isHappy, update]);
  return (
    // <Todo />
    <div>
      <h1 onClick={() => setIsHappy(!isHappy)}>
        I Am {isHappy ? <BiHappyAlt /> : <FaSadCry />}
      </h1>

      <button onClick={() => setUpdate(!update)}>click</button>

      {/* <h1>USE-EFFECT</h1> */}
    </div>
  );
}

export default App;
