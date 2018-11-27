import "./Button.css";
import React from "react";

const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button className={`main-button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
