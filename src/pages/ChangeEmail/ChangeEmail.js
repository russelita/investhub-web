import React from "react";
import { useNavigate } from "react-router-dom";
import IconBack from "../../assets/images/arrow-left.webp";
import IconLogo from "../../assets/images/logo_investhub.webp";
import FooterAuth from "../../components/FooterAuth";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import FrameAuth from "../../widgets/FrameAuth";
import "./ChangeEmail.css";
import { validateEmail } from "../../utility/Helper";

function ChangeEmail() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
  });
  const [errors, setErrors] = React.useState({});

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

  const handleChangeEmail = (event) => {
    event.preventDefault();

    let validationErrors = {};

    // Simple validation for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }

      if (!validateEmail(formData[key])) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } format is wrong.`;
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    navigate("/email-confirm");
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
          <div className="text-title">{"Change Email"}</div>
          <div className="text-title-info">{"Enter your new email"}</div>
          <FormInput
            className={"form-input-top"}
            placeholder={"Enter Email"}
            title={"Email Address"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <FormButton
            className={"form-button-login"}
            onClick={handleChangeEmail}
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
