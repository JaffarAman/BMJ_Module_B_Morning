import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Screen/Home";
import LoginRoute from "../Screen/LoginRoute";
import PageNotFound from "../Screen/PageNotFound";
import User from "../Screen/User";

const AppRoutes = () => {
  const [user, setUser] = useState(false);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginRoute />} />
        <Route path="user/:id" element={<User />} />

        {/* <Route path="*" element={  <PageNotFound />  }  /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
