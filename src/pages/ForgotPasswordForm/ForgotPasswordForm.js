import React from "react";
import { useNavigate } from "react-router-dom";
import IconLogo from "../../assets/images/logo_investhub.webp";
import FooterAuth from "../../components/FooterAuth";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import FrameAuth from "../../widgets/FrameAuth";
import "./ForgotPassword.css";
import Modal from "../../components/Modal";

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [modalSukses, setModalVisible] = React.useState(false);

  const handleHiddenModal = () => {
    setModalVisible(!modalSukses);
    navigate("/login");
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
          <div className="text-title">{"Set New Password"}</div>
          <div className="text-title-info">{"Enter your new password"}</div>
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Password"}
            title={"Create Password*"}
            type={"password"}
          />
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Password"}
            title={"Confirm Password*"}
            type={"password"}
          />
          <FormButton
            className={"form-button-login"}
            onClick={() => setModalVisible(!modalSukses)}
            title={"Submit"}
            type={"submit"}
          />
        </div>
        <FooterAuth hiddenButton={true} hiddenLineOr={true} />
      </div>
      <FrameAuth />
      {modalSukses && (
        <Modal
          handleHiddenModal={handleHiddenModal}
          title={"Successfull !"}
          desc={
            "It an account exist for xxxxxx@gmail.com, you will get an email with instructions on resetting your password. If it doesn’t arrive, be sure to check your spam folder"
          }
          btn1={"Back to login"}
        />
      )}
    </div>
  );
}

export default ForgotPasswordForm;
