import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
    backgroundColor: "red",
  };
  return (
    <div className="myNavBar">
      <ul>
        <li>
          {" "}
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : null;
            }}
            className="navlinks"
            to="/"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
            className="navlinks"
            to="/about"
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => {
              return isActive ? activeStyle : undefined;
            }}
            className="navlinks"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
