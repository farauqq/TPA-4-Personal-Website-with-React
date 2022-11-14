import React from "react";
import icon from "../../assets/icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <img src={icon} alt="icon" width="80" />

        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/portofolio">Portofolio</Link>
          </li>
          <li>
            <Link to="/artikel">Artikel</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Navbar;
