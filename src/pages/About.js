import React from "react";
import Dropdownlarge from "../components/Dropdownlarge";
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
        <Dropdownlarge key={collapse.id} collapse={collapse} />
      ))}
      <Footer />
    </div>
  );
};

export default About;
