import "./Icon.css";
import React from "react";

const Icon = ({ type, className }) => {
  switch (type) {
    case "user-friends":
      return <i className={`fas fa-user-friends design-icon  ${className}`} />;
    case "paste":
      return <i className={`fas fa-paste design-icon  ${className}`} />;
    case "vimeo":
      return <i className={`fab fa-vimeo-v design-icon  ${className}`} />;
    case "delete":
      return <i className={`fas fa-trash design-icon ${className}`} />;
    case "lock":
      return <i className={`fas fa-lock design-icon ${className}`} />;
    case "exclamation-circle":
      return (
        <i className={`fas fa-exclamation-circle design-icon ${className}`} />
      );
    case "times":
      return <i className={`fas fa-times design-icon ${className}`} />;
    default:
      break;
  }
  return Icon;
};
export default Icon;
