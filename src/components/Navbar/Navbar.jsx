import React, { useEffect, useState } from "react";
import Logout from "./Logout";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
// import onClickOutside from "react-onclickoutside";

export default function Navbar() {
  const savedPosts = useSelector((state) => state.favorites.favoritePosts);
  const loc = window.location.pathname;

  const [sure, setSure] = useState(false);
  const navigate = useNavigate();

  const [posts, setPosts] = useState(null);
  const [showPosts, setShowPosts] = useState([]);
  const [query, setQuery] = useState("");

  const fetchPosts = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    try {
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setShowPosts(
            data.filter((posts) => posts.title.toLowerCase().includes(query))
          );
        })

        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  // Navbar.handleClickOutside = () => {
  //   setQuery("");
  // };

  return (
    <>
      {loc === "*" ||
      loc === "/admin" ||
      loc === "/admin/dashboard" ||
      loc === "/admin/feedbacks" ||
      loc === "/admin/editPosts" ||
      loc === "/admin/createNewPosts" ||
      loc === "/admin/users" ||
      loc === "/admin/geolocalization" ? (
        <></>
      ) : (
        <>
          <nav className="relative bg-trasparent border-b-2 border-blue-200 text-gray-300">
            <div
              // onClick={() => setShowSearch(false)}
              className="container mx-auto flex justify-between align-center"
            >
              <div onClick={() => navigate("/homePage")} className="my-auto">
                <div className="rounded">
                  <img
                    className="object-cover relative 
             bg-transparent shadow-sm w-[80px] ml-[30px] md:ml-0 sm:w-[100px] sm:h-[50px] md:w-[100px] md:h-[50px] cursor-pointer"
                    src="/logos/logo.png"
                  />
                </div>
              </div>

              <ul className="flex">
                <li>
                  <div className="hidden md:flex items-center relative space-x-2 pt-6 px-2">
                    <input
                      type="text"
                      value={query}
                      name="query"
                      onChange={fetchPosts}
                      id="table-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-g/ray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search for posts"
                    />
                    <svg
                      className="w-5 h-5 text-gray-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>

                    {query.length !== 0 && (
                      <div className="absolute flex flex-col space-y-1 left-0 right-0 top-[50px] justify-between items-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2">
                        {showPosts &&
                          showPosts.map((_post) => (
                            <Link to={`/posts/${_post.id}`}>
                              <div
                                key={_post.id}
                                className="flex justify-between items-center w-full border-gray-200 border-b p-2 rounded-lg hover:bg-blue-300"
                              >
                                <span className="flex items-center space-x-2">
                                  <img
                                    src={_post.img1}
                                    alt="team"
                                    className="w-10 h-10 bg-gray-100 object-cover object-center rounded-full"
                                  />

                                  <p className="text-gray-900">
                                    {_post.title.slice(0, 20) + "..."}
                                  </p>
                                </span>
                                <h2 className="text-gray-500 title-font font-medium">
                                  {_post.author.slice(0, 10) + "..."}
                                </h2>
                              </div>
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                </li>
                <li
                  onClick={() => navigate("/favorites")}
                  className="hover:bg-blue-800 hover:text-white"
                >
                  <div className="hidden md:flex items-center relative space-x-2 py-6 px-2">
                    <span className="text-sm lg:text-base font-bold cursor-pointer">
                      {savedPosts.length}
                    </span>
                    <AiOutlineHeart
                      className={
                        "w-[10px] lg:w-[30px] h-6 cursor-pointer hover:scale-125 transition-all duration-75 ease-in "
                      }
                    />
                  </div>
                </li>
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
                          Prioritize these line items game-plan draw a line in
                          the sand come up with something buzzworthy UX upstream
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
                          This section is about our Frequently Asked Questions.
                          An FAQ page is one of the best ways to help people
                          visiting or using our site. Get inspired by Q&As.
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
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
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
                          Collaborative problem solving leads to better
                          outcomes. People are more likely to take calculated
                          risks that lead to innovation if they have the support
                          of a team behind them.
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
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                        <div className="flex items-center">
                          <img
                            className="cover w-[60px] h-[40px] mr-5"
                            src="/logos/logo.png"
                            alt=""
                          />
                          <h3 className="font-bold text-xl text-white text-bold mb-2">
                            Contact Us
                          </h3>
                        </div>

                        <div className="flex items-center py-3">
                          <svg
                            className="h-6 pr-3 fill-current text-blue-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                          </svg>
                          <NavLink to="/contact">
                            <p className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
                              Contact
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
                  ></a>
                  <div className="p-6 mega-menu mb-16 ml-auto sm:mb-0 shadow-xl bg-blue-800">
                    <div className="container w-full flex flex-wrap justify-end ml-auto">
                      <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 ">
                        <li className="flex items-center border-gray-500 border-b pt-6 lg:pt-3 pl-10">
                          <div className="w-full text-white mb-8">
                            <h2
                              onClick={() => setSure(!sure)}
                              className="cursor-pointer font-bold text-xl text-white text-bold mb-2 hover:text-blue-300"
                            >
                              Logout
                            </h2>
                            <p>Click to logout now</p>
                          </div>
                        </li>
                        <li className="flex items-center pb-6 pt-6 lg:pt-3 pl-10">
                          <div className="flex flex-col items-center">
                            <h3 className="font-bold text-xl text-white text-bold pr-8 mb-2">
                              Dashboard
                            </h3>

                            <div className="flex items-center py-3">
                              <svg
                                className="h-6 pr-3 fill-current text-blue-300"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                              </svg>
                              <NavLink to="/admin/dashboard">
                                <p className="text-white bold border-b-2 border-blue-300 hover:text-blue-300">
                                  Check statistics
                                </p>
                              </NavLink>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Logout onClick hidden div => display toggled */}
              </ul>
            </div>
          </nav>
          {sure && <Logout />}
        </>
      )}
    </>
  );
}

// const clickOutsideConfig = {
//   handleClickOutside: () => Navbar.handleClickOutside,
// };
// export default onClickOutside(DropdownLink, clickOutsideConfig);
