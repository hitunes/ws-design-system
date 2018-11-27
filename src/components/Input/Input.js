import "./Input.css";
import React from "react";

const Input = ({ type, name, className, ...rest }) => {
  switch (type) {
    case "text":
      return (
        <input
          type="text"
          name={name}
          className={`main-input ${className}`}
          {...rest}
        />
      );
    case "password":
      return (
        <input
          type="password"
          name={name}
          className={`main-input ${className}`}
          {...rest}
        />
      );
    case "email":
      return (
        <input
          type="email"
          name={name}
          className={`main-input ${className}`}
          {...rest}
        />
      );
    default:
      break;
  }
  return Input;
};
export default Input;
