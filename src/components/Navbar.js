import React from "react";
import "./Navbar.css";
import { Link, useRoutes } from "react-router-dom";
import IconLogo from "../assets/images/logo_investhub.webp";
import { useNavigate } from "react-router-dom";
import ButtonFlag from "../widgets/ButtonFlag";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={IconLogo} alt="logo-icon" className="logo-icon" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Learning
            </Link>
            <i className="fa fa-angle-down ic-learning" aria-hidden="true" />
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Event
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Broker
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          <ButtonFlag />
          <button onClick={() => navigate("/login")} className="bt-sign-in">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
