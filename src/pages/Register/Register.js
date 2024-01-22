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
import ReCAPTCHA from "react-google-recaptcha";
import { validateEmail } from "../../utility/Helper";

function Register() {
  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);
  const [token, setToken] = React.useState("");
  const captchaRef = React.useRef(null);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleChecked = () => {
    setChecked(!checked);
  };

  const onVerify = () => {
    const tokenCaptcha = captchaRef.current.getValue();
    alert(tokenCaptcha);
    setToken(token);
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

  const handleRegister = (event) => {
    event.preventDefault();

    let validationErrors = {};

    // Simple validation for empty fields
    for (const key in formData) {
      if (!formData[key]) {
        validationErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required.`;
      }

      if (key == "email" && !validateEmail(formData[key])) {
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
          <div className="text-title">{"Register Account!"}</div>
          <div className="text-title-info">
            {"Please input your information in the fields below"}
          </div>
          <FormInput
            className={"form-input-email"}
            placeholder={"Enter Full Name"}
            title={"Full Name"}
            type={"text"}
            name={"name"}
            onChange={handleChange}
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Email"}
            title={"Email Address"}
            type={"email"}
            name={"email"}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <FormInput
            className={"form-input-password"}
            placeholder={"Enter Password"}
            title={"Create Password*"}
            type={"password"}
            name={"password"}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <div className="position-recaptcha">
            <ReCAPTCHA
              sitekey="6LfqC1cpAAAAACV-DUbKFKGgVfRDsoQUdrvJ57FT"
              onChange={onVerify}
              ref={captchaRef}
            />
          </div>
          <Checbox
            text={"I agree to terms & conditions"}
            checked={checked}
            handleChecked={handleChecked}
          />
          <FormButton
            className={"form-button-login"}
            onClick={handleRegister}
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
