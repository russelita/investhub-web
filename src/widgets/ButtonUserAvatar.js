import React from "react";
import IconAvatar from "../assets/images/avatar.png";
import "./ButtonUserAvatar.css";
import { IoIosArrowDown } from "react-icons/io";

function ButtonUserAvatar({ className, user, setMyProfile, myProfile }) {
  return (
    <div
      onClick={() => setMyProfile(!myProfile)}
      className={`${className} nav-button-avatar`}
    >
      <img src={IconAvatar} alt="flag-icon" className="flag-icon" />
      {user}
      <IoIosArrowDown className="ic-flag" />
    </div>
  );
}

export default ButtonUserAvatar;
