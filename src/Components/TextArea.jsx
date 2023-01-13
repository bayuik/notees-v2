import React from "react";
import PropTypes from "prop-types";

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

TextArea.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  spellCheck: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextArea;
