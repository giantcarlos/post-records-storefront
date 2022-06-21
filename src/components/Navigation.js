import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function Navigation() {
  return (
    <div>
      <h1>Post Records</h1>
      <NavLink 
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        About
      </NavLink>
      <NavLink
        to="/shop"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Shop
      </NavLink>
      <NavLink
        to="/collection"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Collection
      </NavLink>
    </div>
  );
}

export default Navigation;