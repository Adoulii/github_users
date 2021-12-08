import React from "react";
import SearchBox from "./ui/SearchBox";
import UseDarkMode from "../hook/UseDarkMode";
function SearchBar({ searchRequest }) {
  return (
    <div className=" block sm:grid grid-cols-7  pt-24 pb-3">
      <div className="col-start-3 col-span-3 bg-indigo-50 px-4 py-4 items-center rounded-xl dark:bg-gray-700  ">
        <SearchBox searchRequest={searchRequest} />
      </div>
    </div>
  );
}

export default SearchBar;
