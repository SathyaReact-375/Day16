import React from 'react';
import {NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ textAlign: "center", margin: "20px 0" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          margin: "0 10px",
          textDecoration: "none",
          color: isActive ? "green" : "black",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          margin: "0 10px",
          textDecoration: "none",
          color: isActive ? "green" : "black",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          margin: "0 10px",
          textDecoration: "none",
          color: isActive ? "green" : "black",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar