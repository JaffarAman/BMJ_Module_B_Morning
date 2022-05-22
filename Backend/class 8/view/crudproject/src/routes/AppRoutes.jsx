import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Login, Signup, Todo } from "../Components";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
