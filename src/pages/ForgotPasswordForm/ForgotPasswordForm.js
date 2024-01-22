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
  const [formData, setFormData] = React.useState({
    password: "",
    passwordConfirm: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleHiddenModal = () => {
    setModalVisible(!modalSukses);
    navigate("/login");
  };

  const handleChange = (event) => {
    const {
      target: { name, value },
    } = event;
    // const value =
    //   event.target.type === "file" ? event.target.files[0] : event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error for a field once it has been changed
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();

    let validationErrors = {};

    // Simple validation for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }

      if (formData[key] !== formData["password"]) {
        validationErrors[key] = `${
          "confirm Password".charAt(0).toUpperCase() +
          "confirm Password".slice(1)
        } not same.`;
      }

      if (formData[key] !== formData["passwordConfirm"]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } not same.`;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
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
        <div className="container-title">
          <div className="text-title">{"Set New Password"}</div>
          <div className="text-title-info">{"Enter your new password"}</div>
          <FormInput
            className={"form-input-top"}
            placeholder={"Enter Password"}
            title={"Create Password*"}
            type={"password"}
            name={"password"}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Password"}
            title={"Confirm Password*"}
            type={"password"}
            name={"passwordConfirm"}
            onChange={handleChange}
          />
          {errors.passwordConfirm && (
            <div className="error">{errors.passwordConfirm}</div>
          )}
          <FormButton
            className={"form-button-login"}
            onClick={handleForgotPassword}
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
