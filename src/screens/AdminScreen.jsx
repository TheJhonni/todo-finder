import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Gif from "../components/Spinner/Gif";
import Footer from "../components/Footer/Footer";
import { FiEdit } from "react-icons/fi";
import Posts from "../components/components_2nd_Layer/Posts";

export default function AdminScreen() {
  const navigate = useNavigate();

  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    loadPosts();
    setTimeout(() => {
      setMount(true);
    }, 1000);
  }, []);
  return (
    <>
      {mount ? (
        <div className="w-full h-full img-textLeft">
          <h1 className="text-4xl text-gray-200 font-extrabold text-center py-5 px-10">
            ADMIN SECTION
          </h1>
          <aside class="w-64" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
              <ul class="space-y-2">
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span class="ml-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    class="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-example"
                    data-collapse-toggle="dropdown-example"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      class="flex-1 ml-3 text-left whitespace-nowrap"
                      sidebar-toggle-item
                    >
                      E-commerce
                    </span>
                    <svg
                      sidebar-toggle-item
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <ul id="dropdown-example" class="hidden py-2 space-y-2">
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Billing
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        Invoice
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                    <span class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                      Pro
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                    <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                      3
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>

                    <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* TO DO ONCLICK APPEARS */}
          <div className="container mx-auto py-10">
            <span
              onClick={() => navigate("/newPost")}
              className="ml-auto texl-md rounded px-5 py-5 border-2 cursor-pointer bg-gray-300 hover:bg-[#5FD38D]"
            >
              Add new Post
            </span>

            <div className="flex justify-between w-full">
              <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12">
                {posts &&
                  posts.map((post) => (
                    <div key={post.id} className="flex max-w-[300px]">
                      <Link to={`/posts/${post.id}`}>
                        <Posts
                          key={post.id}
                          id={post.id}
                          src={post.img1}
                          title={post.title}
                        />
                      </Link>
                      <FiEdit
                        onClick={() => navigate(`/edit/${post.id}`)}
                        className="text-white text-xl cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="shadow-2xl mt-10 text-gray-200 border-b-4 border-[#0082CA]">
            <Footer />
          </div>
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}
