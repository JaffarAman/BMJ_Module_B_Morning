import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar";
import BASE_URI from "../../core";

const AdminDashboard = () => {
  const { role } = JSON.parse(localStorage.getItem("user"));
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_URI}getuser/${role}`)
      .then((res) => {
        console.log(res.data);
        setAllUser(res.data);
      })
      .catch((err) => console.log(err, "err"));
  }, []);

  const blockUser = (id) => {
    const user = allUser.find((val) => val._id === id);
    const updateUser = {
      ...user,
      status: "block",
    };
    axios
      .put(`${BASE_URI}edituser/${id}`, updateUser)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  const unBlockUser = (id) => {
    const user = allUser.find((val) => val._id === id);
    const updateUser = {
      ...user,
      status: "active",
    };
    axios
      .put(`${BASE_URI}edituser/${id}`, updateUser)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <table border="1" className="w-100">
          <thead>
            <tr>
              <th>ID:</th>
              <th>USERNAME:</th>
              <th>EMAIL:</th>
              <th>ROLE:</th>
              <th>OPTIONS:</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((val, ind) => {
              return (
                <tr key={ind}>
                  <td>{val._id}</td>
                  <td>{val.username}</td>
                  <td>{val.email}</td>
                  <td>{val.role}</td>
                  <td>
                    {val.status == "block" ? (
                      <button
                        className="btn btn-danger"
                        onClick={() => unBlockUser(val._id)}
                      >
                        UNBLOCK
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => blockUser(val._id)}
                      >
                        BLOCK
                      </button>
                    )}
                    <button className="btn btn-info">EDIT</button>
                  </td>
                  {/* <td>
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
