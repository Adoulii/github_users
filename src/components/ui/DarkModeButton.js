import React from "react";
import { FaMoon } from "react-icons/fa";

function DarkModeButton() {
  return (
    <div>
      <button className="dark" onClick={() => setTheme(colorTheme)}>
        <FaMoon />
      </button>
    </div>
  );
}

export default DarkModeButton;
