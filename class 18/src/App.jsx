import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import PrivateRoute from "./route/PrivateRoute";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
