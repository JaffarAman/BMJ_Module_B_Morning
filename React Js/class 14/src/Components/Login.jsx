import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/action/authAction";

import styles from "./login.module.css";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginAction({ email, password }));
    console.log(email, password);
  };
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className={styles.inputBox}
          placeholder="ENTER YOUR EMAIL"
        />

        <input
          type="text"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="ENTER YOUR PASSWORD"
        />
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
