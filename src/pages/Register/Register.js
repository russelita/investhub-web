import React from "react";
import "./Register.css";
import FrameAuth from "../../widgets/FrameAuth";
import IconLogo from "../../assets/images/logo_investhub.webp";
import IconBack from "../../assets/images/arrow-left.webp";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import FooterAuth from "../../components/FooterAuth";
import Checbox from "../../widgets/Checbox";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };
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
          <div className="text-title">{"Register Account!"}</div>
          <div className="text-title-info">
            {"Please input your information in the fields below"}
          </div>
          <FormInput
            className={"form-input-email"}
            placeholder={"Enter Full Name"}
            title={"Full Name"}
            type={"text"}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Email"}
            title={"Email Address"}
            type={"email"}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Password"}
            title={"Create Password*"}
            type={"password"}
          />
          <Checbox
            text={"I agree to terms & conditions"}
            checked={checked}
            handleChecked={handleChecked}
          />
          <FormButton
            className={"form-button-login"}
            onClick={() => navigate("/email-confirm")}
            title={"Register Account"}
            type={"submit"}
          />
        </div>
        <FooterAuth />
      </div>
      <FrameAuth />
    </div>
  );
}

export default Register;
