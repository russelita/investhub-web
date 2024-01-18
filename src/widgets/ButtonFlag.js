import React from "react";
import IconFlag from "../assets/images/Uk_Flags.webp";
import "./ButtonFlag.css";

function ButtonFlag({ className }) {
  return (
    <div className={`${className} nav-button-flag`}>
      <img src={IconFlag} alt="flag-icon" className="flag-icon" />
      <i className="fa fa-angle-down ic-flag" aria-hidden="true" />
    </div>
  );
}

export default ButtonFlag;
