import React, { useState } from "react";

const Home = ({ value, setValue, getvalue }) => {
  const [childState, setChildState] = useState("Talha");
  const stateUpdate = () => {
    getvalue(childState);
    setValue("child");
  };
  return (
    <>
      <h1>CHILD components</h1>
      <h1>{value}</h1>
      <button onClick={stateUpdate}>STATE UPDATE</button>
    </>
  );
};

export default Home;
