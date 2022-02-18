import React, { useState } from "react";
import DropdownRender from "./Dropdown";
import ProfileImg from "./ProfileImg";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [isToggled, setIsToggled] = useState(false);

  function toggleLogout() {
    setIsToggled(!isToggled);
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 w-screen shadow-md mb-5">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <ProfileImg
            img={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqkuHvwY9wnqd1tV53y2GZYdSHNZ7q-JjTA&usqp=CAU"
            }
          />
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
              </li> */}
              <li className="nav-item mr-2">
                <ProfileImg
                  img={
                    "https://media-exp1.licdn.com/dms/image/C4E03AQEgNFJ49Vnc1w/profile-displayphoto-shrink_400_400/0/1642584038544?e=1649894400&v=beta&t=rp56U7xamh1EJue1VcESjTbiPVHHhgFV1RF9eVIuLjY"
                  }
                />
              </li>
            </ul>

            <div className="ml-2">
              <IoMdArrowDropdown
                onClick={toggleLogout}
                className="text-white text-2xl cursor-pointer"
              />
              {/* Logout onClick hidden div => display toggled */}
              {isToggled && (
                <div className="mt-2 ml-auto bg-white ">
                  <span className="text-blue p-5 cursor-pointer hover:text-[#05051df1]">
                    Logout
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
