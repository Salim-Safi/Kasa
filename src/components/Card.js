import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

const Card = ({ logement }) => {
  return (
    <div className="logement-card">
      <Link to={`/logement/${logement.id}`}>
        <div className="overlay1">
          <img src={logement.cover} alt={"Photo " + logement.title} />
          <p className="title-card">{logement.title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
