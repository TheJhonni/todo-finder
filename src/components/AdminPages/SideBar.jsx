import React, { useEffect, useState } from "react";
import { IoIosCreate } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { MdFeedback } from "react-icons/md";
import { BsFillGeoAltFill } from "react-icons/bs";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {}, []);

  return (
    <aside
      className="max-w-[250px] min-h-screen my-auto mr-10 relative"
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto py-4 px-4 bg-gray-50 rounded">
        <span
          onClick={() => window.history.back()}
          className="text-bold text-xl text-[#0B1728] cursor-pointer mr-auto py-1 px-3 rounded-lg hover:bg-gray-300"
        >
          Go Back
        </span>
        <div
          onClick={() => navigate("/homePage")}
          className="rounded mt-5 mb-10"
        >
          <img
            className="object-cover relative 
             bg-transparent shadow-sm w-[100px] h-[50px] mx-auto cursor-pointer"
            src="/logos/logo.png"
          />
        </div>

        <ul className="space-y-2">
          <li className="text-sm pt-2">Diagrams</li>
          <li>
            <Link to="/admin/dashboard">
              <p
                id="dashboard"
                className={
                  "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D] active:bg-[#46c277ce] focus:bg-[#89f5b4ce] " +
                  (location.pathname === "/admin/dashboard"
                    ? "bg-[#46c277ce] "
                    : "")
                }
              >
                <svg
                  className="w-5 h-6 transition duration-75 group-hover:text-gray-900 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">Dashboard</span>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/admin/feedbacks">
              <p
                id="feedbacks"
                className={
                  "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D] active:bg-[#46c277ce] focus:bg-[#89f5b4ce] " +
                  (location.pathname === "/admin/feedbacks"
                    ? "bg-[#46c277ce] "
                    : "")
                }
              >
                <MdFeedback />
                <span className="ml-3">Feedbacks</span>
              </p>
            </Link>
          </li>

          <li className="text-sm pt-2">Users</li>
          <li>
            <Link to="/admin/users">
              <p
                className={
                  "flex items-center p-2 mb-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] " +
                  (location.pathname === "/admin/users"
                    ? "bg-[#46c277ce] "
                    : "")
                }
              >
                <svg
                  className="flex-shrink-0 w-5 h-6 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </p>
            </Link>
          </li>
          <Link to="/admin/geolocalization">
            <li>
              <p
                className={
                  "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] " +
                  (location.pathname === "/admin/geolocalization"
                    ? "bg-[#46c277ce] "
                    : "")
                }
              >
                <BsFillGeoAltFill />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Geo Localization
                </span>
              </p>
            </li>
          </Link>

          <li className="text-sm pt-2">Posts</li>
          <li>
            <Link to="/admin/createNewPosts">
              <p
                href="#"
                className={
                  "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] " +
                  (location.pathname === "/admin/createNewPosts"
                    ? "bg-[#46c277ce] "
                    : "")
                }
              >
                <IoIosCreate />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Create new Post
                </span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-white bg-[#1E667C] rounded-full">
                  3
                </span>
              </p>
            </Link>
          </li>
          <li>
            <Link to="/admin/editPosts">
              <p
                href="#"
                className={
                  "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] " +
                  (location.pathname === "/admin/editPosts"
                    ? "bg-[#46c277ce] "
                    : "")
                }
              >
                <AiOutlineEdit />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Edit posts
                </span>
                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
                  Pro
                </span>
              </p>
            </Link>
          </li>

          <li>
            <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] ">
              <svg
                className="flex-shrink-0 w-5 h-6 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                onClick={() => navigate("/login")}
                className="flex-1 ml-3 whitespace-nowrap"
              >
                Sign In
              </span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] ">
              <svg
                className="flex-shrink-0 w-5 h-6 transition duration-75 group-hover:text-gray-900 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                onClick={() => navigate("/register")}
                className="flex-1 ml-3 whitespace-nowrap"
              >
                Sign Up
              </span>
            </p>
          </li>
        </ul>
      </div>
    </aside>
  );
}
