import React from "react";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/about.css";
import collapse from "../api/collapse.json";

const About = () => {
  return (
    <div>
      <Header />
      <div className="img-about">
        <div className="overlay-about"></div>
      </div>
      {collapse.map((collapse) => (
        <Collapse
          titre={collapse.titre}
          class2="droplarge"
          class3="dropcontent"
          contenue={<p>{collapse.contenue}</p>}
          key={collapse.id}
        />
      ))}
      <Footer />
    </div>
  );
};

export default About;
