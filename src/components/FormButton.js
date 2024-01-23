import React from "react";
import "./FormButton.css";
import { FaArrowRight } from "react-icons/fa6";

function FormButton({ className, title, type, onClick, input, hiddenIcon }) {
  return (
    <div className={`${className} form-button`}>
      <button
        onClick={onClick}
        type={type}
        {...input}
        className="form-button__button"
      >
        {title}
        {hiddenIcon ? null : (
          <FaArrowRight className="form-button__button_arrow" />
        )}
      </button>
    </div>
  );
}

export default FormButton;
