import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function DarkModeButton() {
  return (
    <div>
      <button className="lightmode" /*onClick={() => setTheme(colorTheme)}*/ >
        <FaSun />
      </button>
    </div>
  );
}

export default DarkModeButton;
