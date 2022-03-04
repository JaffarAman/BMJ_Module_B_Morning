import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../config/firebase";

const Dashboard = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const dbRef = collection(db, "users");
  const [currentUser, setCurrentuser] = useState({});
  useEffect(async () => {
    console.log(user);
    const userData = await getDocs(dbRef);
    userData.forEach((data) => {
      if (user === data.data().userUid) {
        setCurrentuser(data.data());
      }
    });
  }, []);

  console.log(currentUser);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <h1>DASHBOARD</h1>
      <div>
        <h4>{currentUser.name}</h4>
        <h4>{currentUser.number}</h4>
        <h4>{currentUser.email}</h4>
      </div>
    </div>
  );
};

export default Dashboard;
