import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import IMG from "../images/LOGO.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <img src={IMG} alt="Logo Kaza" />
      </div>
      <div className="nav-header">
        <ul className="ul-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "li-nav active" : "li-nav"
            }
          >
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "li-nav active" : "li-nav"
            }
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
