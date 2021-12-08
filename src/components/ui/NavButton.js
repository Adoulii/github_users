import React from "react";

function NavButton({ onClick }) {
  return (
    <div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-2 py-2 rounded-md hover:bg-indigo-700 transition duration-500 ease-in-out transform hover:-translate-y hover:scale-110 dark:bg-bg-indigo-600 "
        onClick={onClick}
      >
        Search
      </button>
    </div>
  );
}

export default NavButton;
