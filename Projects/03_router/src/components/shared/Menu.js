import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Link to="/">Home</Link>|<Link to="/about">About Us</Link>|
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Menu;
