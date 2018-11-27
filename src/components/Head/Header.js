import "./Header.css";
import React from "react";
import Icon from "../Icon/Icon";

export const Header = ({ iconType, iconColor, title }) => {
  return (
    <div className="header-wrapper">
      <div>
        <Icon type={iconType} className={iconColor} />
        <h1 className="title-text">{title}</h1>
      </div>
      <Icon on type="times" />
    </div>
  );
};
