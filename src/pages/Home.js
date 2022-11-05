import React from "react";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="img-header">
        <div className="overlay">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
