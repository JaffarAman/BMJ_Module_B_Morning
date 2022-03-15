import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../store/action/authAction";
import styles from "./dashboard.module.css";
const Dashboard = () => {
  const { userEmail, userPassword } = useSelector(
    (state) => state.loginReducer
  );
  console.log(userEmail, userPassword);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };
  return (
    <div>
      DASHBOARD
      <p> {userEmail && `EMAIL: ${userEmail}`} </p>
      <p> {userPassword && `PASSWORD: ${userEmail}`} </p>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
