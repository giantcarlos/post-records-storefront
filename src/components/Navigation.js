import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <nav>
    <div className="site-title">Post-Records</div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/shop">
        Shop
      </NavLink>
      <NavLink exact to="/collection">
        Collection
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Navigation;