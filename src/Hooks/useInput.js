import { useState } from "react";
import PropTypes from "prop-types";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  return [value, onChangeValue];
};

useInput.propTypes = {
  defaultValue: PropTypes.string,
};

export default useInput;
