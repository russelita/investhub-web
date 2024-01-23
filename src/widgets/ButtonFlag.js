import React from "react";
import IconFlag from "../assets/images/Uk_Flags.webp";
import "./ButtonFlag.css";
import { IoIosArrowDown } from "react-icons/io";

function ButtonFlag({ className }) {
  return (
    <div className={`${className} nav-button-flag`}>
      <img src={IconFlag} alt="flag-icon" className="flag-icon" />
      <IoIosArrowDown className="ic-flag" />
    </div>
  );
}

export default ButtonFlag;
