import React from "react";
import { useNavigate } from "react-router-dom";
import IconEmailConfirm from "../../assets/images/icon_emailConfirm.webp";
import IconLogo from "../../assets/images/logo_investhub.webp";
import FooterAuth from "../../components/FooterAuth";
import FormButton from "../../components/FormButton";
import FrameAuth from "../../widgets/FrameAuth";
import "./EmailConfirm.css";
import Modal from "../../components/Modal";

function EmailConfirm() {
  const navigate = useNavigate();
  const [modalSukses, setModalVisible] = React.useState(false);

  const handleHiddenModal = () => {
    setModalVisible(!modalSukses);
  };
  return (
    <div className="container-split">
      <div className="left-screen">
        <div className="container-header-register">
          <div className="icon-logo-container">
            <img src={IconLogo} alt="icon-logo" className="icon-logo" />
          </div>
        </div>
        <div className="container-title-emailConfirm">
          <img src={IconEmailConfirm} alt="icon-back" className="icon-back" />
          <div className="text-title">{"Email Confirmation"}</div>
          <div className="text-title-info text-title-infoConfirmEmail">
            {
              "Thank you for registering on investhub. To activate your account, please follow the instructions via email that we sent to your email address "
            }
            <span className="text-redEmail">{`user1467@gmail.com`}</span>
          </div>
          <div className="group-button-emailConfirm">
            <FormButton
              className={"form-button-login"}
              onClick={() => setModalVisible(true)}
              title={"Resend"}
              type={"submit"}
              hiddenIcon={true}
            />
            <FormButton
              className={"form-button-login"}
              onClick={() => navigate("/email-change")}
              title={"Change Email"}
              type={"submit"}
              hiddenIcon={true}
            />
          </div>
        </div>
        <FooterAuth hiddenLineOr={true} hiddenButton={true} />
      </div>
      <FrameAuth />
      {modalSukses && (
        <Modal
          handleHiddenModal={handleHiddenModal}
          title={"Done !"}
          desc={
            "Your confirmation email has been sent back to your email address"
          }
          btn1={"Close"}
        />
      )}
    </div>
  );
}

export default EmailConfirm;
