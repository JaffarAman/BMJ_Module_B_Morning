import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterMinusAction,
  counterPlusAction,
} from "./store/action/counterAction";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.counterReducer);
  console.log(state, "JAFFAR");

  let [counter, setCounter] = useState(0);

  const counterHandle = () => {
    dispatch(counterPlusAction("JAFFAR"));
  };

  const counterMinus = () => {
    dispatch(counterMinusAction());
  };

  return (
    <div>
      {/* <h1>COUNTER...</h1>

      <div className="myDiv">
        <button onClick={counterMinus}>-</button>
        <p> {state} </p>
        <button onClick={counterHandle}>+</button>
      </div> */}

      <Login />
      <Dashboard />
    </div>
  );
}

export default App;
