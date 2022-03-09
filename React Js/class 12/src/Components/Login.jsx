import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Loader from "./Loader";
import Toast from "./toast";

const Login = () => {
  const user = localStorage.getItem("user");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginHandler = () => {
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setLoading(false);
        navigate("dashboard");
        localStorage.setItem("user", user.user.uid);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setemail("");
    setpassword("");
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);
  return (
    <section className="signupBox">
      <div className="form-group w-50 mx-auto signUpDiv">
        <h1 className="text-white">LOGIN FORM</h1>
        <input
          onChange={(e) => setemail(e.target.value)}
          type="email"
          className="form-control my-3"
          value={email}
          placeholder="ENTER YOUR EMAIL"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          value={password}
          className="form-control my-3"
          placeholder="ENTER YOUR PASSOWORD"
        />

        {loading ? (
          <div className="text-center">
            <Loader />
          </div>
        ) : (
          <button onClick={loginHandler} className="btn btn-info w-100">
            LOGIN
          </button>
        )}
      </div>
      <Toast />
    </section>
  );
};

export default Login;
