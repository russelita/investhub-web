import React from "react";
import "./Login.css";
import FrameAuth from "../../widgets/FrameAuth";
import IconLogo from "../../assets/images/logo_investhub.webp";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import FooterAuth from "../../components/FooterAuth";
import { validateEmail } from "../../utility/Helper";

const initialAuthState = {
  loading: true,
  isLogin: false,
  isProfileUpdated: false,
  user: null,
  initialRoute: "Home",
  token: null,
  fcmToken: null,
};

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
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

  const handleLogin = (event) => {
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
    let temp = initialAuthState;
    temp.isLogin = true;
    localStorage.setItem("dataUser", JSON.stringify(temp));
    navigate("/update-profile");
  };
  return (
    <>
      <div className="container-split">
        <div className="left-screen">
          <div className="container-header">
            <div className="icon-logo-container">
              <img src={IconLogo} alt="icon-logo" className="icon-logo" />
            </div>
            <div className="sub-right-container">
              <div className="text-ask">{"Doesn’t have an account?"}</div>
              <Link to={"/register"} className="text-register">
                {"Register"}
              </Link>
            </div>
          </div>
          <div className="container-title">
            <div className="text-title">{"Login!"}</div>
            <div className="text-title-info">
              {"Please input your information in the fields below"}
            </div>
            <FormInput
              className={"form-input-email"}
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
              title={"Password*"}
              type={"password"}
              name={"password"}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
            <Link to={"/password-forgot-form"} className="text-forgot-password">
              {"Forgot your password?"}
            </Link>

            <FormButton
              className={"form-button-login"}
              onClick={handleLogin}
              title={"Login"}
              type={"submit"}
            />
          </div>
          <FooterAuth />
        </div>
        <FrameAuth />
      </div>
    </>
  );
}

export default Login;
