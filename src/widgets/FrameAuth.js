import React from "react";
import FrameImage from "../assets/images/Hero_Login.png";
import "./FrameAuth.css";
import ButtonFlag from "./ButtonFlag";

function FrameAuth() {
  return (
    <>
      <div className="right-screen">
        <div className="frame-hero-container">
          <ButtonFlag className={"btn-flag-float"} />
          <img src={FrameImage} alt="frame-hero" className="frame-hero" />
        </div>
      </div>
    </>
  );
}

export default FrameAuth;
