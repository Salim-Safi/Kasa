import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import "../styles/notfound.css";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="notfound">
        <h2>404</h2>
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
        <NavLink to="/">
          <p>Retourner sur la page d'accueil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
