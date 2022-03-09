import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [myName, setMyName] = useState();

//   useEffect(() => {
//     console.log("use effect");
//   }, [myName]);


  return (
    <div>
      <h1>USE EFFECT</h1>
      <h3> {myName} </h3>
      <button onClick={() => setMyName("JAFFAR AMAN")}>SET VALUE</button>
    </div>
  );
};

export default UseEffect;
