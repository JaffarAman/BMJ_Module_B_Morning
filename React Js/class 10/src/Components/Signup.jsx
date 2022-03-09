import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signupHandler = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        console.log(result.uid);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>SIGN UP FORM</h1>
      <form onSubmit={signupHandler} className="container mt-5">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
          className="form-control mt-3 input-group"
        />
        <input
          onChange={(e) => setemail(e.target.value)}
          type="text"
          placeholder="email"
          className="form-control mt-3 input-group"
        />
        <input
          type="password"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="password"
          className="form-control mt-3 input-group"
        />
        <button className="btn btn-info mt-3">SIGNUP</button>
      </form>
    </div>
  );
};

export default Signup;
