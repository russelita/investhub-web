import React from "react";
import "./Login.css";
import FrameAuth from "../../widgets/FrameAuth";
import IconLogo from "../../assets/images/logo_investhub.webp";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import FooterAuth from "../../components/FooterAuth";

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

  const handleLogin = () => {
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
            />
            <FormInput
              className={"form-input-password"}
              placeholder={"Enter Password"}
              title={"Password*"}
              type={"password"}
            />
            <Link to={"/password-forgot"} className="text-forgot-password">
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
