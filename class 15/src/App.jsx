import React, { useEffect, useState } from "react";
import "./App.css";
import { About, Contact } from "./components/About";
import UseEffect from "./components/useEffect";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      {/* <About />
      <Contact /> */}
      {/* <UseEffect /> */}
      {/* <h1>NAVBAR</h1> */}
      <NavBar />
      <Routes>
        <Route index element={<h1>HOME PAGE</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
