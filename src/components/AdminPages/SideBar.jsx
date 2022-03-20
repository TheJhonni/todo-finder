import React, { useEffect, useState } from "react";
import { IoIosCreate } from "react-icons/io";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  const path = useParams();
  const [notClosed, setNotClosed] = useState(true);
  const [isFoc, setIsFoc] = useState(false);

  // let path = window.location.pathname;
  // console.log(window.location.pathname);

  const location = useLocation();
  console.log(location);
  console.log(path);

  useEffect(() => {
    // if(path === "/")
    setIsFoc(location.pathname === path);
  }, [location, path]);

  return (
    <aside
      className="max-w-[250px] min-h-screen mr-10 relative"
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
                  (isFoc && "active:bg-[#46c277ce] ")
                }
              >
                <svg
                  className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
          <li className="text-sm pt-2">Posts</li>
          <li>
            <Link to="/admin/createNewPosts">
              <p
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] "
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
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] "
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
            <Link to="/admin/users">
              <p className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce]">
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
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
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] "
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] "
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
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
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-[#5FD38D]  active:bg-[#46c277ce] focus:bg-[#89f5b4ce] "
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 "
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
            </a>
          </li>
        </ul>
        {notClosed && (
          <div
            id="dropdown-cta"
            className="p-4 mt-6 bg-blue-50 rounded-lg "
            role="alert"
          >
            <div className="flex items-center mb-3">
              <span className="bg-[#1E667C] text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                Beta
              </span>
              <button
                onClick={() => setNotClosed(false)}
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-full focus:ring-2 focus:ring-blue-400 p-1 hover:bg-[#5FD38D] inline-flex h-6 w-6"
                data-collapse-toggle="dropdown-cta"
                aria-label="Close"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="mb-3 text-sm text-[#1E667C] ">
              Preview the new Flowbite dashboard navigation! You can turn the
              new navigation off for a limited time in your profile.
            </p>
            <a
              onClick={() => setNotClosed(false)}
              className="text-sm text-blue-900 underline hover:text-blue-800 "
              href="#"
            >
              Turn new navigation off
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
