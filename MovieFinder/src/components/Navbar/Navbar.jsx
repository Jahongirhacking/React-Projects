import React from "react";
import "./Navbar.css";
import logo from "../../images.png";

const Navbar = ({ searched, onChange, onSubmit }) => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" id="logo" />
      <form onSubmit={onSubmit}>
        <input
          placeholder="Type the title..."
          value={searched}
          onChange={onChange}
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
