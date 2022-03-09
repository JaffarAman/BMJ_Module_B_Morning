import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import WeatherApp from "./Components/WeatherApp";
import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WeatherApp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
      </Routes>
      {/* <WeatherApp />
      <Home /> */}
    </div>
  );
}

export default App;
