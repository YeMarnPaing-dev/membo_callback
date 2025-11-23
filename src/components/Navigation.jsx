import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const activeBtn = {
    borderBottom: "2px solid red",
    marginTop: "5px",
  };

  return (
    <div>
      <h1>Navigation</h1>
      <hr />

      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeBtn : undefined)}
      >
        <button className="btn">Home</button>
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => (isActive ? activeBtn : undefined)}
      >
        <button  className="btn">About</button>
      </NavLink>

      <NavLink
        to="/blog"
        style={({ isActive }) => (isActive ? activeBtn : undefined)}
      >
        <button className="btn">Blog</button>
      </NavLink>


        <NavLink
        to="/product"
        style={({ isActive }) => (isActive ? activeBtn : undefined)}
      >
        <button className="btn">Product</button>
      </NavLink>
    </div>
  );
};

export default Navigation;
