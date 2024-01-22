import React from "react";
import "./FormInput.css";

function FormInput({
  className,
  title,
  type,
  placeholder,
  input,
  onChange,
  name,
}) {
  const [visible, setVisible] = React.useState(true);
  return (
    <div className={`${className} form-input`}>
      <label className="form-input__label">{title}</label>
      {type === "password" ? (
        <>
          <input
            type={visible ? type : "text"}
            name={name}
            placeholder={placeholder}
            {...input}
            className="form-input__input"
            onChange={onChange}
          />
          <div onClick={() => setVisible(!visible)} className="text-show">
            {"Show"}
          </div>
        </>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          {...input}
          className="form-input__input"
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default FormInput;
