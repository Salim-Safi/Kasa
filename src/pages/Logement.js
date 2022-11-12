import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Logements from "../api/logements.json";
import Caroussel from "../components/Caroussel";
import Header from "../components/Header";
import Tag from "../components/Tag";
import "../styles/logement.css";
import Etoile from "../images/EtoileR.png";
import EtoileG from "../images/EtoileG.png";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

const Logement = () => {
  const { logementId } = useParams();
  const thisLogement = Logements.find((lgmt) => lgmt.id === logementId);

  if (!thisLogement) {
    return <Navigate to="*" />;
  } else {
    return (
      <div>
        <Header />
        <Caroussel thisLogement={thisLogement} />
        <div className="content-logement">
          <div className="location">
            <h1>{thisLogement.title}</h1>
            <p>{thisLogement.location}</p>
            <div className="tagcontent">
              {thisLogement.tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className="host-stars">
            <div className="host">
              <p>{thisLogement.host.name}</p>
              <div className="hostpicture">
                <img
                  src={thisLogement.host.picture}
                  alt={thisLogement.host.name}
                />
              </div>
            </div>
            <div className="stars">
              {[...Array(parseInt(thisLogement.rating))].map((e, i) => (
                <img src={Etoile} alt="etoile rouge" key={i} />
              ))}
              {[...Array(5 - parseInt(thisLogement.rating))].map((e, i) => (
                <img src={EtoileG} alt="etoile gris" key={i} />
              ))}
            </div>
          </div>
        </div>
        <div className="informations">
          <div className="info1">
            <Collapse
              titre="Description"
              class1="dropdcontent"
              class2="drop"
              class3="dropc"
              contenue={<p>{thisLogement.description}</p>}
            />
          </div>
          <div className="info2">
            <Collapse
              titre="Équipements"
              class1="dropdcontent"
              class2="drop"
              class3="dropc"
              contenue={thisLogement.equipments.map((eqpm, index) => (
                <li key={index}>{eqpm}</li>
              ))}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default Logement;
