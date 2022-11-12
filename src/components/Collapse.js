import React, { useState } from "react";
import "../styles/collapseForLogement.css";
import "../styles/collapseForAbout.css";
import FlecheB from "../images/arrow_back_ios-24px 1.svg";
import FlecheH from "../images/arrow_back_ios-24px 2.svg";

const Collapse = (props) => {
  const [show, setShow] = useState(true);
  return (
    <div className={props.class1}>
      <div className={props.class2} onClick={() => setShow(!show)}>
        <p>{props.titre}</p>
        {show ? (
          <img src={FlecheB} alt="flèche vers le bas" />
        ) : (
          <img src={FlecheH} alt="flèche vers le haut" />
        )}
      </div>
      {show ? null : <div className={props.class3}>{props.contenue}</div>}
    </div>
  );
};

export default Collapse;
