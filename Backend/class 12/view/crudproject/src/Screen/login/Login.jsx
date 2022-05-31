import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginAction } from "../../store/action/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const { statesuserData, userDataLoading, userDataError, userDataMessage } =
    useSelector((state) => state.LoginReducer);
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      toast.error("REQUIRED FIELD ARE MISSING", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
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
    console.log(userData?.role);
    if (userData && userData?.role == "user") {
      return navigate("/todo");
    }
    if (userData && userData?.role == "admin") {
      return navigate("/admindashboard");
    }
  }, [userDataMessage]);

  return (
    <div>
      <section className="container my-5">
        <h1>LOGIN FORM</h1>

        <form onSubmit={loginHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="email"
              value={email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="password"
              value={password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
          <button
            onClick={() => navigate("/signup")}
            type="submit"
            className="ml-3  btn btn-info"
          >
            SIGNUP
          </button>
        </form>
      </section>
    </div>
  );
};

export default Login;
