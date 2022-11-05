import React from "react";
import Flogo from "../images/footer-logo.svg";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Flogo} alt="logo footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;
