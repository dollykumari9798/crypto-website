import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nv-left">
        {/* <img src="" alt="" /> */}
        <span>LOGO</span>
      </div>
      <div className="nv-middle">
        <ul>
          <li>Recharge</li>
          <li>Travel Booking</li>
          <li>Gift Cards</li>
          <li>Exchange</li>
        </ul>
      </div>
      <div className="nv-right">
        <ul>
          <li>
            <Link className="NavBtn" to="/login">
              LOGIN
            </Link>
          </li>
          <li>
            <Link className="NavBtn" to="/register">
              SIGN UP
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
