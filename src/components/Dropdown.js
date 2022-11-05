import React, { useState } from "react";
import "../styles/dropdown.css";
import FlecheB from "../images/arrow_back_ios-24px 1.svg";
import FlecheH from "../images/arrow_back_ios-24px 2.svg";

const Dropdownlarge = ({ titre, contenue }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="dropdcontent">
      <div className="drop" onClick={() => setShow(!show)}>
        <p>{titre}</p>
        {show ? (
          <img src={FlecheB} alt="flèche vers le bas" />
        ) : (
          <img src={FlecheH} alt="flèche vers le bas" />
        )}
      </div>
      {show ? null : <div className="dropc">{contenue}</div>}
    </div>
  );
};

export default Dropdownlarge;
