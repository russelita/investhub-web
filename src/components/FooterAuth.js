import React from "react";
import "./FooterAuth.css";
import IconIDXMobile from "../assets/images/IDX_Mobile_Logo.webp";
import IconIDX from "../assets/images/IDX_Logo.webp";
import IconTicmi from "../assets/images/TICMI_Logo.webp";
import IconRDIS from "../assets/images/RDIS_Logo.webp";
import IconGoogle from "../assets/images/Google_Logo.webp";
import { Link } from "react-router-dom";

function FooterAuth({ backToLogin, hiddenButton, hiddenLineOr }) {
  return (
    <>
      <div className="container-footer-login">
        {hiddenButton ? (
          <div className="group-info-secure"></div>
        ) : (
          <div className="group-info-secure">
            <i className="fa fa-lock" aria-hidden="true"></i>
            {"Your Info is safely secured"}
          </div>
        )}
        {hiddenLineOr ? (
          <div className="line-or-container"></div>
        ) : (
          <div className="line-or-container">
            <div className="line-or"></div>
            {backToLogin ? (
              <>
                <div className="text-backTo">Back to</div>
                <Link className="nav-link" to={"/login"}>
                  <div className="text-linkRed-login">login</div>
                </Link>
              </>
            ) : (
              <div className="text-or">or</div>
            )}
            <div className="line-or"></div>
          </div>
        )}
        {hiddenButton ? (
          <>
            <div className="group-button-else-top" />
            <div className="group-button-else-bottom" />
          </>
        ) : (
          <>
            <div className="group-button-else-top">
              <button className="btn-item">
                <img src={IconGoogle} alt="btn-item-icon" />
                {"Google"}
              </button>
              <button className="btn-item">
                <img src={IconTicmi} alt="btn-item-icon" />
                {"TICMI"}
              </button>
              <button className="btn-item">
                <img src={IconIDX} alt="btn-item-icon" />
                {"IDX"}
              </button>
            </div>
            <div className="group-button-else-bottom">
              <button className="btn-item">
                <img src={IconRDIS} alt="btn-item-icon" />
                {"RDIS"}
              </button>
              <button className="btn-item">
                <img src={IconIDXMobile} alt="btn-item-icon" />
                {"IDX Mobile"}
              </button>
            </div>
          </>
        )}
      </div>
      <div className="line-dashed" />
      <div className="container-text-footer">
        <div className="text-footer-top">
          All data and information is taken officially from the IDX, RDIS, IDX
          Mobile, TICMIEDU websites.
        </div>
      </div>
      <div className="container-text-footer-bottom">
        <div className="text-footer-bottom">
          {"© 2023"}
          <div>{"Indonesia Stock Exchange"}</div>
        </div>
      </div>
    </>
  );
}

export default FooterAuth;
