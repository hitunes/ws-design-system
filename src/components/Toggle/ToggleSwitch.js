import "./ToggleSwitch.css";

import React from "react";

export const ToggleSwitch = params => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  );
};
