import logo from "./logo.svg";
import "./App.css";
import UserCard from "./Components/UserCard";
import styles from "./Components/userCard.module.css";
import { useRef, useState } from "react";
function App() {
  const [inputValue, setInputValue] = useState("");
  const inputTag = useRef();
  const inputHandler = (e) => {
    e.preventDefault();
    const searchValue = inputTag.current.value;
    setInputValue(searchValue);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>GITHUB USER FINDER</h1>
      <form onSubmit={inputHandler} className={styles.inputBox}>
        <input
          // value={inputValue}
          // onChange={(e) => setInputValue(e.target.value)}
          type="search"
          placeholder="Enter user name"
          ref={inputTag}
        />
      </form>

      <UserCard inputValue={inputValue} />
    </div>
  );
}

export default App;
