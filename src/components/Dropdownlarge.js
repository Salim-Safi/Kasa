import React, { useState } from "react";
import "../styles/dropdownlarge.css";
import FlecheB from "../images/arrow_back_ios-24px 1.svg";
import FlecheH from "../images/arrow_back_ios-24px 2.svg";

const Dropdownlarge = ({ collapse }) => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div className="droplarge" onClick={() => setShow(!show)}>
        <p>{collapse.titre}</p>
        {show ? (
          <img src={FlecheB} alt="flèche vers le bas" />
        ) : (
          <img src={FlecheH} alt="flèche vers le bas" />
        )}
      </div>
      {show ? null : (
        <div className="dropcontent">
          <p>{collapse.contenue}</p>
        </div>
      )}
    </div>
  );
};

export default Dropdownlarge;
