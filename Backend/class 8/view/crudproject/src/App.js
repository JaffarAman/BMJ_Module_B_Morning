import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Signup from "./Components/Signup";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;
