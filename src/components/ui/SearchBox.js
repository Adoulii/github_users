import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import NavButton from "./NavButton";
import { info } from "autoprefixer";
import { FaSearch } from "react-icons/fa";
import LightModeButton from "./LightModeButton";
function SearchBox({ value, test,user }) {
  return (
    <div className="Search">
      <form className="flex flex-row justify-between items-center  ">
        <div className="flex flex-row space-x-2 items-center">
          <div>
            <FaSearch className=" text-indigo-600" />
          </div>

          <div>
            <input
              className="bg-transparent outline-none border-0 w-full h-full"
              placeholder="Search Github username"
              value={value}
              onChange={(event) => test(event.target.value)}
            ></input>
          </div>
        </div>

        <div>
          <NavButton value={user}/>
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
