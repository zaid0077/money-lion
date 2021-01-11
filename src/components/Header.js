import React from "react";
import logo from "../assests/money-lion-logo.png";
import "../style/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          className="header-logo"
          width="407"
          height="124"
          onClick={() => localStorage.clear()}
        />
      </Link>
    </div>
  );
}
