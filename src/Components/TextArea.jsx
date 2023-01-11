import React from "react";

const TextArea = ({
  className,
  placeholder,
  spellCheck = false,
  name,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      spellCheck={spellCheck}
      onChange={onChange}
      className={className}
    ></textarea>
  );
};

export default TextArea;
