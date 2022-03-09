import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <div>
      <h1>USER {id} </h1>
    </div>
  );
};

export default User;
