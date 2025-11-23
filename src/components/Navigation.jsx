import React from "react";

import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <div>
      <h1>Navigation</h1>
      <hr />
      <NavLink to="./Home">
        <button className="btn">Home</button>
      </NavLink>

       <NavLink to="./About">
        <button className="btn">About</button>
      </NavLink>

       <NavLink to="./Blog">
        <button className="btn">Blog</button>
      </NavLink>
    </div>
  );
};

export default Navigation;
