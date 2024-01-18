import React from "react";
import "./FormButton.css";

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
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        )}
      </button>
    </div>
  );
}

export default FormButton;
