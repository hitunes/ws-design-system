import "./Footer.css";
import React from "react";

export const Footer = ({ className, children }) => {
  return <div className={`footer-wrapper ${className}`}>{children}</div>;
};
