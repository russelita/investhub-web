import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./DropDownList.css";

function DropDownList({ listDropdown, className, handleClick }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("dataUser");
    navigate("/login");
  };
  return (
    <div className={`${className} container-dropdown`}>
      <ul
        className={`${
          listDropdown.length > 5 ? "list-dropdown-scrollable" : ""
        } list-dropdown`}
      >
        {listDropdown.map((item, index) => (
          <li key={index}>
            {item.url === "none" ? (
              <>
                <span>
                  {item.icon ? <img src={item.icon} alt="icon-logout" /> : null}
                  {item.value}
                </span>
              </>
            ) : (
              <Link
                // style={{ pointerEvents: item.url === "none" ? "" : "" }}
                to={item.url}
                onClick={
                  item.value === "Logout"
                    ? handleLogout
                    : item.callback
                    ? () => handleClick(item.id)
                    : () => {}
                }
              >
                {item.icon ? <img src={item.icon} alt="icon-logout" /> : null}
                {item.value}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DropDownList;
