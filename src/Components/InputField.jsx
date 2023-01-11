import React from "react";

const InputField = ({ type, className, placeholder, name, onChange }) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  );
};

export default InputField;
