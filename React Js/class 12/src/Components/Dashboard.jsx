import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";
import TodoApp from "./Todo";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const dbRef = collection(db, "users");
  const [currentUser, setCurrentuser] = useState({});
  const [signout, setSignout] = useState(false);

  useEffect(async () => {
    // console.log(user);
    const userData = await getDocs(dbRef);
    userData.forEach((data) => {
      if (user === data.data().userUid) {
        setCurrentuser(data.data());
      }
    });
    console.log(user);
  }, []);

  console.log(currentUser);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [signout]);

  const logout = () => {
    localStorage.removeItem("user");
    setSignout(true);
  };
  return (
    <div>
      <section className="d-flex justify-content-between px-5">
        <h1>DASHBOARD</h1>
        <button className="btn btn-dark" onClick={logout}>
          LOGOUT
        </button>
      </section>

      <div>
        <h4>{currentUser.name}</h4>
        <h4>{currentUser.number}</h4>
        <h4>{currentUser.email}</h4>
      </div>
      <TodoApp />
    </div>
  );
};

export default Dashboard;
