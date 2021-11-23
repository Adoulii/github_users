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
  // const dateFormatter = new Intl.DateTimeFormat("en-US", {
  //   year: 'numeric',
  //   month: 'short',
  //   day: 'numeric',
  // });

  // const joinedAt = (() => {
  //   if (!data.created_at) {
  //     return ''
  //   }
  //   else {
  //     const date = new Date(data.created_at);
  //   }
  //   return dateFormatter.format(date);
  // })
  return (
    <>
      <div className="grid grid-cols-7 ">
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
                      <h1 className="text-gray-700 font-mono font-extrabold   ">
                        {data.name}
                      </h1>
                    </div>
                    <div>
                      <span>{data.created_at}</span>
                    </div>
                  </div>
                  <div className="flex flex-col px-5 space-y-3">
                    <div>
                      <h1 className="text-indigo-600 font-extrabold ">
                        {data.login}
                      </h1>
                    </div>
                    <div className="bio">
                      <span className="overflow-ellipsis text-xs ">
                        {data.bio}
                      </span>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="bg-indigo-100 rounded-xl flex flex-row justify-between px-8 py-2 ">
                      <div className="flex flex-col space-y-2 items-center">
                        <h1 className="text-gray-700 text-xs font-medium">
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
                  <div className="contact grid grid-cols-5 py-4">
                    <div className=" col-start-1 col-span-1 space-y-4 itmes-center px-4 ">
                      <div>
                        <FaMapMarkerAlt className="text-lg text-gray-600" />
                        <h1>{data.location}</h1>
                      </div>
                      <div>
                        <FaLink className="text-lg text-gray-600" />
                        <h1>{data.html_url}</h1>
                      </div>
                    </div>
                    <div className=" col-start-4 col-span-2 space-y-4 itmes-center ">
                      <div>
                        {data.twitter_username !== null ? (
                          <>
                            <FaTwitter className="text-lg text-gray-600" />
                            <h1>{data.twitter_username}</h1>
                          </>
                        ) : (
                          <>
                            <FaTwitter className="text-lg text-gray-600" />
                            <h1>Not Available</h1>
                          </>
                        )}
                      </div>
                      <div>
                        <FaCode className="text-lg text-gray-600" />
                        <h1>{data.company}</h1>
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
