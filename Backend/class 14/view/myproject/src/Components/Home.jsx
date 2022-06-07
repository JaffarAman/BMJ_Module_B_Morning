import axios from "axios";
import React from "react";
import BASE_URI from "../core";

const Home = () => {
  const createProduct = () => {
    axios
      .post(`${BASE_URI}product`, {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={createProduct}>CREATE PRODUCT</button>
    </div>
  );
};

export default Home;
