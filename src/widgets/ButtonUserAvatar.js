import React from "react";
import IconAvatar from "../assets/images/avatar.png";
import "./ButtonUserAvatar.css";

function ButtonUserAvatar({ className, user, setMyProfile, myProfile }) {
  return (
    <div
      onClick={() => setMyProfile(!myProfile)}
      className={`${className} nav-button-avatar`}
    >
      <img src={IconAvatar} alt="flag-icon" className="flag-icon" />
      {user}
      <i className="fa fa-angle-down ic-flag" aria-hidden="true" />
    </div>
  );
}

export default ButtonUserAvatar;
