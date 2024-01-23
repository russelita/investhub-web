import React from "react";
import "./Navbar.css";
import { Link, useRoutes } from "react-router-dom";
import IconLogo from "../assets/images/logo_investhub.webp";
import { useNavigate } from "react-router-dom";
import ButtonFlag from "../widgets/ButtonFlag";
import ButtonUserAvatar from "../widgets/ButtonUserAvatar";
import DropDownList from "./DropDownList";
import iconAvatar from "../assets/images/icon_myProfile.webp";
import iconLogout from "../assets/images/icon_Logout.webp";
import iconCourse from "../assets/images/icon_course.webp";
import iconEbook from "../assets/images/icon_eBook.webp";
import iconDiscuss from "../assets/images/icon_discussion.webp";
import iconGlossarium from "../assets/images/icon_glossarium.webp";
import iconLevelup from "../assets/images/icon_level_star.webp";
import { IoIosArrowDown } from "react-icons/io";

const groupMyProfile = [
  {
    id: 1,
    icon: iconAvatar,
    value: "Avatar",
    url: "none",
  },
  {
    id: 2,
    icon: iconLogout,
    value: "Logout",
    url: "/login",
  },
];

const groupLearning = [
  {
    id: 1,
    icon: iconCourse,
    value: "Avatar",
    url: "",
  },
  {
    id: 2,
    icon: iconEbook,
    value: "E-book",
    url: "",
  },
  {
    id: 3,
    icon: iconDiscuss,
    value: "Discussion Forum",
    url: "",
  },
  {
    id: 4,
    icon: iconGlossarium,
    value: "Glossarium",
    url: "",
  },
  {
    id: 5,
    icon: iconLevelup,
    value: "Level up test",
    url: "",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = React.useState("");
  const [myProfile, setMyProfile] = React.useState(false);
  const [learning, setLearning] = React.useState(false);

  React.useEffect(() => {
    cekUser();
  }, []);

  const cekUser = async () => {
    const userState = await JSON.parse(localStorage.getItem("dataUser"));
    if (userState) {
      setUser(userState);
    }
  };
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={IconLogo} alt="logo-icon" className="logo-icon" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={() => setLearning(!learning)} className="nav-link">
              Learning
            </Link>
            <IoIosArrowDown className="ic-learning" />
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              News
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Event
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Broker
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              FAQ
            </Link>
          </li>
        </ul>
        <div className="nav-right">
          <ButtonFlag />
          {user && user.isLogin ? (
            <ButtonUserAvatar
              myProfile={myProfile}
              setMyProfile={setMyProfile}
              user={"User"}
            />
          ) : (
            <button onClick={() => navigate("/login")} className="bt-sign-in">
              Sign in
            </button>
          )}
        </div>
        {learning && (
          <DropDownList
            className={"position-learning"}
            listDropdown={groupLearning}
          />
        )}
        {myProfile && <DropDownList listDropdown={groupMyProfile} />}
      </div>
    </div>
  );
}

export default Navbar;
