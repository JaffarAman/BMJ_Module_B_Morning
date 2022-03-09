import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";
import Loader from "./Loader";
import "./signup.css";
import Toast from "./toast";
import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const dbRef = collection(db, "users");
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [number, setnumber] = useState("");
  const [loading, setLoading] = useState(false);

  const signupHandle = () => {
    console.log(name, email, password, number);
    setLoading(true);
    const userObj = {
      name,
      email,
      number,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        console.log(user.user.uid);
        setLoading(false);
        toast("User successfully signup");
        await addDoc(dbRef, { ...userObj, userUid: user.user.uid });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast("error");
      });
    setName("");
    setpassword("");
    setemail("");
    setnumber("");
  };
  return (
    <section className="signupBox">
      <div className="form-group w-50 mx-auto signUpDiv">
        <h1 className="text-white">SIGNUP FORM</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control my-3"
          value={name}
          placeholder="ENTER YOUR NAME"
        />
        <input
          onChange={(e) => setemail(e.target.value)}
          type="email"
          value={email}
          className="form-control my-3"
          placeholder="ENTER YOUR EMAIL"
        />
        <input
          onChange={(e) => setnumber(e.target.value)}
          value={number}
          type="number"
          className="form-control my-3"
          placeholder="ENTER YOUR NUMBER"
        />
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          className="form-control my-3"
          placeholder="ENTER YOUR PASSWORD"
        />
        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          <button onClick={signupHandle} className="btn btn-info w-100">
            SIGNUP
          </button>
        )}
      </div>
      <Toast />
    </section>
  );
};

export default Signup;
