import axios from "axios";
import React, { useState } from "react";
import BASE_URI from "../../core";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
  });

  const signupHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post(`${BASE_URI}signup`, userData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={signupHandler}>
        <input
          type="text"
          value={userData?.username}
          onChange={(e) => {
            setUserData({ username: e.target.value });
          }}
          placeholder="username"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setUserData({ ...userData, email: e.target.value });
          }}
          placeholder="email"
          value={userData?.email}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setUserData({ ...userData, password: e.target.value });
          }}
          placeholder="password"
          value={userData?.password}
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => {
            setUserData({ ...userData, contact: e.target.value });
          }}
          placeholder="contact"
          value={userData?.contact}
        />
        <br />
        <br />
        <button>SIGNUP</button>
      </form>
    </div>
  );
};

export default Signup;
