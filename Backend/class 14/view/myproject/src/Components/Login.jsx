import axios from "axios";
import React, { useState } from "react";
import BASE_URI from "../core";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();

  const loginHandler = () => {
    const userObj = {
      email,
      password,
    };
    axios
      .post(`${BASE_URI}login`, userObj, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        placeholder="enter your email"
      />
      <br />
      <br />
      <input
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        type="text"
        placeholder="enter your password"
      />
      <br />
      <br />
      <button
        onClick={() => {
          loginHandler();
        }}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Login;
