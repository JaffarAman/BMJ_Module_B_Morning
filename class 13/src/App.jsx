import React, { useEffect, useState } from "react";
import "./App.css";
import WeatherApp from "./Components/WeatherApp";
function App() {
  // const [name, setName] = useState("Jaffar");
  // let [counter, setCounter] = useState(0);
  // const foo = (e) => {
  //   console.log(e.target);
  // };

  // const add = () => {
  //   setCounter(++counter);
  //   console.log(counter);
  // };
  // const minus = () => {
  //   if (counter <= 0) {
  //     console.log("limit end");
  //     return;
  //   }
  //   setCounter(--counter);
  //   console.log(counter);
  // };

  // const foo10 = () => {
  //   alert("HELLO CLASS...");
  // };
  // useEffect(foo10, [counter, name]);
  return (
    <div>
      {/* <h1>HELLO {name}</h1> */}
      {/* <button onClick={(e) => foo(e)}>CLICK</button> */}
      {/* <button onClick={foo}>CLICK</button> */}
      {/* <button onClick={() => setName("jaffar")}>CLICK</button> */}
      {/* <div className="counterBox">
        <h1>{counter}</h1>
        <div>
          <button onClick={minus}>-</button>
          <button
            onClick={() => {
              add();
            }}
          >
            +
          </button>
        </div>
      </div> */}

      <WeatherApp />
    </div>
  );
}

export default App;
