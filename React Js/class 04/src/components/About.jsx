import React, { useState } from "react";

const About = ({ getValue }) => {
  const [name, setName] = useState("Jaffar Aman");
  return (
    <div>
      <h1>ABOUT PAGE</h1>
      <button onClick={() => getValue(name)}>CLICK !</button>
    </div>
  );
};

export default About;
