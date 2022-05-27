import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginAction } from "../../store/action/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const { statesuserData, userDataLoading, userDataError, userDataMessage } =
    useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  const userData = localStorage.getItem("user");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      return alert("ENTER EMPTY FIELDS");
    }

    const userObj = {
      email,
      password,
    };
    dispatch(LoginAction(userObj));
  };

  useEffect(() => {
    if (userDataMessage) {
      navigate("/", { replace: true });
    }
  }, [userDataMessage]);

  useEffect(() => {
    if (userData) {
      return navigate("/todo");
    }
  }, [userDataMessage]);

  return (
    <div>
      <h1>LOGIN FORM</h1>
      <form onSubmit={loginHandler}>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          value={email}
        />
        <br />
        <br />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          value={password}
        />
        <br />
        <br />

        <button>LOGIN</button>
        <button onClick={() => navigate("/signup")}>SIGNUP</button>
      </form>
    </div>
  );
};

export default Login;
