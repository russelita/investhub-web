import React from "react";
import { useNavigate } from "react-router-dom";
import IconBack from "../../assets/images/arrow-left.webp";
import IconLogo from "../../assets/images/logo_investhub.webp";
import FooterAuth from "../../components/FooterAuth";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import FrameAuth from "../../widgets/FrameAuth";
import "./ChangeEmail.css";

function ChangeEmail() {
  const navigate = useNavigate();
  return (
    <div className="container-split">
      <div className="left-screen">
        <div className="container-header-register">
          <div className="icon-logo-container">
            <img src={IconLogo} alt="icon-logo" className="icon-logo" />
          </div>
        </div>
        <div className="container-title">
          <img
            onClick={() => navigate("/login")}
            src={IconBack}
            alt="icon-back"
            className="icon-back"
          />
          <div className="text-title">{"Change Email"}</div>
          <div className="text-title-info">{"Enter your new email"}</div>
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Email"}
            title={"Email Address"}
            type={"email"}
          />
          <FormButton
            className={"form-button-login"}
            onClick={() => navigate("/email-confirm")}
            title={"Send"}
            type={"submit"}
          />
        </div>
        <FooterAuth hiddenButton={true} backToLogin={true} />
      </div>
      <FrameAuth />
    </div>
  );
}

export default ChangeEmail;
