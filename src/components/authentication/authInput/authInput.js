import { useState } from "react";
import "./authInput.css";
const AuthInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { lable, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className="authInput">
      <label>{lable}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      ></input>
      <span>{errorMessage}</span>
    </div>
  );
};

export default AuthInput;
