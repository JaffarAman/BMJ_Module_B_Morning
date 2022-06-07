import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { useEffect, useState } from "react";
import axios from "axios";
import BASE_URI from "./core";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(undefined);
    axios
      .get(`${BASE_URI}user`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data._id) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      })
      .catch((err) => {
        console.log(err);
        setUser(null);
      });
  }, []);
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {user === undefined ? (
            <Route path="/" element={<h1>LOADING</h1>} />
          ) : null}
          {user === null ? <Route path="/" element={<Login />} /> : null}
          {user ? <Route path="/" element={<Home />} /> : null}
          <Route path="*" element={<h1>ERROR 404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
