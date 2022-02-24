import React, { useEffect, useState } from "react";
import DropdownRender from "./Dropdown";
import ProfileImg from "./ProfileImg";
import { IoMdArrowDropdown } from "react-icons/io";
import Logout from "./Logout";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { logoutInitiate } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sureToLogout, setSureToLogout] = useState(false);

  return (
    <div>
      <nav className="img-textLeft opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ProfileImg
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqkuHvwY9wnqd1tV53y2GZYdSHNZ7q-JjTA&usqp=CAU"
                  }
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline justify-between space-x-4">
                  <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Calendar
                  </a>

                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a>
                  <div className="ml-auto">
                    <span
                      onClick={() => setSureToLogout(!sureToLogout)}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {sureToLogout && <Logout />}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

{
  /* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 w-screen shadow-md mb-5">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
         
          <DropdownRender />
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col justify-between mr-5 items-center lg:flex-row list-none lg:ml-auto">
              {/* <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Tweet</span>
                </a>
              </li> */
}
//         <li className="nav-item mr-2">
//           <ProfileImg
//             img={
//               "https://media-exp1.licdn.com/dms/image/C4E03AQEgNFJ49Vnc1w/profile-displayphoto-shrink_400_400/0/1642584038544?e=1649894400&v=beta&t=rp56U7xamh1EJue1VcESjTbiPVHHhgFV1RF9eVIuLjY"
//             }
//           />
//         </li>
//       </ul>

//       <div className="ml-2">
//         <IoMdArrowDropdown
//           onClick={toggleLogout}
//           className="text-white text-2xl cursor-pointer"
//         />
//         {/* Logout onClick hidden div => display toggled */}
//         {isToggled && (
//
//       </div>
//     </div>
//   </div>
// </nav>
