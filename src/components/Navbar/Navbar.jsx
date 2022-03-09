import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Logout from "./Logout";
import { Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { SiSpacemacs } from "react-icons/si";
import { FaRegEye } from "react-icons/fa";
import { GiBigWave } from "react-icons/gi";

export default function Navbar() {
  const [sure, setSure] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <nav className="relative bg-trasparent border-b-2 border-blue-200 text-gray-300">
        <div className="container mx-auto flex justify-between align-center">
          <div onClick={() => navigate("/homePage")} className="my-auto">
            <div className="rounded">
              <img
                className="object-cover relative 
           bg-transparent shadow-sm w-[100px] h-[50px] cursor-pointer"
                src="/logos/logo.png"
              />
            </div>
          </div>

          <ul className="flex">
            <li
              onClick={() => navigate("/homePage")}
              className="hover:bg-blue-800 hover:text-white"
            >
              <span className="relative block py-6 px-2 lg:p-6 text-sm lg:text-base font-bold cursor-pointer">
                Home
              </span>
            </li>

            <li className="hoverable hover:bg-blue-800 hover:text-white">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white"
              >
                Navigate
              </a>
              <div className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-blue-800">
                <div className="container w-full flex flex-wrap justify-between mx-2">
                  <div className="w-full text-white mb-8">
                    <h2 className="font-bold text-2xl">
                      Read one of our articles
                    </h2>
                    <p>just click on one of them</p>
                  </div>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div className="flex items-center">
                      <svg
                        className="h-8 mb-3 mr-3 fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                      </svg>
                      <h3 className="font-bold text-xl text-white text-bold mb-2">
                        POSTS
                      </h3>
                    </div>
                    <p className="text-gray-100 text-sm">
                      We know just 5% of everything.
                    </p>
                    <div className="flex items-center py-3">
                      <svg
                        className="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                      </svg>
                      <NavLink to="/category=generic">
                        <p className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
                          Find out more...
                        </p>
                      </NavLink>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div className="flex items-center">
                      <img
                        className="cover w-[60px] h-[40px] mr-5"
                        src="/logos/logo.png"
                        alt=""
                      />
                      <h3 className="font-bold text-xl text-white text-bold mb-2">
                        NASA'S PICS OF THE DAY
                      </h3>
                    </div>
                    <p className="text-gray-100 text-sm">
                      Prioritize these line items game-plan draw a line in the
                      sand come up with something buzzworthy UX upstream
                      selling.
                    </p>
                    <div className="flex items-center py-3">
                      <svg
                        className="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                      </svg>
                      <NavLink to="/picOfTheDay">
                        <p className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
                          Find out more...
                        </p>
                      </NavLink>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                    <div className="flex items-center">
                      <img
                        className="cover w-[60px] h-[40px] mr-5"
                        src="/logos/logo.png"
                        alt=""
                      />
                      <h3 className="font-bold text-xl text-white text-bold mb-2">
                        FAQ section
                      </h3>
                    </div>
                    <p className="text-gray-100 text-sm">
                      This section is about our Frequently Asked Questions. An
                      FAQ page is one of the best ways to help people visiting
                      or using our site. Get inspired by Q&As.
                    </p>
                    <div className="flex items-center py-3">
                      <svg
                        className="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                      </svg>
                      <NavLink to="/Faq">
                        <p className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
                          Find out more...
                        </p>
                      </NavLink>
                    </div>
                  </ul>
                  <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                    <div className="flex items-center">
                      <img
                        className="cover w-[60px] h-[40px] mr-5"
                        src="/logos/logo.png"
                        alt=""
                      />
                      <h3 className="font-bold text-xl text-white text-bold mb-2">
                        MEET THE TEAM
                      </h3>
                    </div>
                    <p className="text-gray-100 text-sm">
                      Collaborative problem solving leads to better outcomes.
                      People are more likely to take calculated risks that lead
                      to innovation if they have the support of a team behind
                      them.
                    </p>
                    <div className="flex items-center py-3">
                      <svg
                        className="h-6 pr-3 fill-current text-blue-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                      </svg>
                      <NavLink to="/ourTeam">
                        <p className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
                          Find out more...
                        </p>
                      </NavLink>
                    </div>
                  </ul>
                </div>
              </div>
            </li>
            <li className="hoverable hover:bg-blue-800 hover:text-white">
              <a
                href="#"
                className="relative block py-6 px-4 lg:p-6 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-white"
              >
                X
              </a>
              <div className="p-6 mega-menu mb-16 ml-auto sm:mb-0 shadow-xl bg-blue-800">
                <h2
                  onClick={() => setSure(!sure)}
                  className="cursor-pointer font-bold text-2xl ml-[90%] mr-10"
                >
                  Logout
                </h2>
              </div>
            </li>

            {/* Logout onClick hidden div => display toggled */}
          </ul>
        </div>
      </nav>
      {sure && <Logout />}
    </>
  );
}
