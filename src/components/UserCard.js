import userEvent, { useEffect } from "@testing-library/user-event";
import React from "react";
import SearchBar from "./SearchBar";
import Spinner from "./ui/Spinner";
import {
  FaMapMarkerAlt,
  FaTwitter,
  FaGithub,
  FaLink,
  FaGit,
  FaFacebook,
  FaCode,
  FaPlaceOfWorship,
} from "react-icons/fa";
function UserCard({ data, loading }) {
  const dateFormatter = () => {
    const date_user = data.created_at;
    const date = new Date(date_user);
    // const joined_date = new Intl.DateTimeFormat("en-US", {
    //   year: "numeric",
    //   month: "short",
    //   day: "2-digit",
    // }).format(date);
    // return joined_date;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-7  ">
        <div className="col-start-3 w-auto col-span-3 bg-indigo-50 px-4 py-4 items-center rounded-xl  ">
          <div className="grid grid-cols-4 ">
            {loading ? (
              <div className="items-center col-start-3 py-24">
                {" "}
                <Spinner />{" "}
              </div>
            ) : (
              <>
                <div className=" col-start-1 col-span-1">
                  <img
                    src={data.avatar_url}
                    alt=""
                    className=" rounded-full overflow-hidden w-24 h-24 shadow-sm "
                  ></img>
                </div>
                <div className="col-start-2 col-span-3">
                  <div className="info pt-4 flex flex-row justify-between px-4">
                    <div>
                      <h3 className="text-gray-700  font-extrabold font-Outfit">
                        {data.name}
                      </h3>
                    </div>
                    <div>
                      <span className="font-Outfit">{"Joined at " + dateFormatter()}</span>
                    </div>
                  </div>
                  <div className="flex flex-col px-5 space-y-3">
                    <div>
                      <h1 className="text-indigo-600 font-extrabold font-Outfit ">
                        {data.login}
                      </h1>
                    </div>
                    <div className="bio">
                      <span className="overflow-ellipsis text-sm font-Outfit ">
                        {data.bio}
                      </span>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="bg-indigo-100 rounded-xl flex flex-row justify-between px-8 py-2 flex-wrap ">
                      <div className="flex flex-col space-y-2 items-center ">
                        <h1 className="text-gray-700 text-xs font-medium ">
                          Repos
                        </h1>
                        <h1 className="text-gray-700 text-xs">
                          {data.public_repos}
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-2 items-center">
                        <h1 className="text-gray-700 text-xs font-medium">
                          Followers
                        </h1>
                        <h1 className="text-gray-700 text-xs">
                          {data.followers}
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-2 items-center">
                        <h1 className="text-gray-700 text-xs font-medium">
                          Following
                        </h1>
                        <h1 className="text-gray-700 text-xs">
                          {data.following}
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="contact block sm:grid grid-cols-5 space-x-4   ">
                    <div className=" col-start-1 col-span-2 space-y-4 itmes-center px-4 ">
                      <div className="space-x-2">
                        <FaMapMarkerAlt className="text-lg text-gray-600 inline-block" />
                        <h1 className="font-Outfit inline-block">{data.location}</h1>
                      </div>
                      <div className="space-x-2">
                        <FaLink className="text-lg text-gray-600 inline-block" />
                        <h1 className="font-Outfit inline-block">{data.html_url}</h1>
                      </div>
                    </div>
                    <div className=" col-start-4 col-span-2 space-y-4 itmes-center   ">
                      <div className="space-x-2">
                        {data.twitter_username !== null ? (
                          <>
                            <FaTwitter className="text-lg text-gray-600 inline-block" />
                            <h1 className="font-Outfit inline-block">{data.twitter_username}</h1>
                          </>
                        ) : (
                          <>
                            <FaTwitter className="text-lg text-gray-600 inline-block" />
                            <h1 className="font-Outfit inline-block">Not Available</h1>
                          </>
                        )}
                      </div>
                      <div className="space-x-2">
                        <FaCode className="text-lg text-gray-600 inline-block" />
                        <h1 className="font-Outfit inline-block">{data.company}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
