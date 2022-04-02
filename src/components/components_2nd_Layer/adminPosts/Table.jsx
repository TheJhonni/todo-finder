import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Table({ posts, deletePost }) {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center">
      <div className="shadow-md md:rounded-lg">
        <div className="inline-block md:align-middle">
          <div className="p-2 md:p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>

            <div className="relative flex sm:justify-between lg:justify-center xl:justify-between items-center mt-1">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
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
              </div>
              <input
                type="text"
                value={filter}
                name="filter"
                onChange={handleChange}
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block sm:w-40 lg:w-60 xl:w-80 p-1 pl-8 md:pl-10 md:p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-g/ray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for posts"
              />
              <span
                onClick={() => navigate("/newPost")}
                className="sm:ml-auto lg:mr-auto xl:ml-auto text-sm rounded lg:ml-2 p-1 md:p-2 lg:p-2 2xl:p-4 border-2 cursor-pointer bg-gray-300 hover:bg-[#5FD38D]"
              >
                Add new Post
              </span>
            </div>
          </div>

          <div className="overflow-hidden">
            <table className="divide-y divide-gray-300 table-fixed rounded">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="hidden xl:block xl:py-4 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Img
                  </th>
                  <th
                    scope="col"
                    className="xl:py-3 px-2 md:px-6 text-xs font-medium tracking-wider xl:text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Title Post
                  </th>
                  <th
                    scope="col"
                    className="hidden xl:inline-block xl:py-6 xl:px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="hidden xl:inline-block xl:py-6 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Author
                  </th>
                  <th
                    scope="col"
                    className="px-2 md:p-6 lg:px-5 xl:px-6 xl:text-right"
                  >
                    <span className="">Edit</span>
                  </th>
                  <th scope="col" className="xl:py-6 xl:px-6 xl:text-right">
                    <span className="">Read it full</span>
                  </th>
                  <th scope="col" className="xl:py-6 xl:px-6 xl:text-right">
                    <span className="text-red-500">DELETE</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-700">
                {posts &&
                  posts
                    .filter((post) => post.title.toLowerCase().includes(filter))
                    .map((_post) => (
                      <tr
                        key={_post.id}
                        className="mr-auto hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <td className="hidden xl:inline-block xl:py-4 px-2 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          <img
                            alt="img-post-related"
                            className="inline-block w-[60px] h-[60px] object-cover object-center rounded-full border-2 border-gray-200 bg-gray-100"
                            src={_post.img1}
                          />
                        </td>
                        <td className="py-2 xl:py-4 px-2 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {_post.title.slice(0, 15) + "..."}
                        </td>
                        <td className="hidden xl:inline-block py-4 px-2 md:px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {_post.category}
                        </td>
                        <td
                          className={
                            "hidden xl:inline-block py-4 px-2 md:px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white " +
                            (_post.author === "Unknown" && "text-red-500")
                          }
                        >
                          {_post.author
                            ? _post.author.slice(0, 8) + "..."
                            : "Unknown"}
                        </td>

                        <td className="py-2 xl:py-4 px-2 md:px-6 text-sm font-medium text-right whitespace-nowrap">
                          <p
                            onClick={() => navigate(`/edit/${_post.id}`)}
                            className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                          >
                            Edit
                          </p>
                        </td>
                        <td className="py-2 xl:py-4 px-2 md:px-6 text-sm font-medium text-right whitespace-nowrap">
                          <p
                            onClick={() => navigate(`/posts/${_post.id}`)}
                            className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                          >
                            See the full article
                          </p>
                        </td>
                        <td className="py-2 xl:py-4 px-2 md:px-6 text-sm font-medium text-right whitespace-nowrap">
                          <MdDeleteForever
                            onClick={() => deletePost(_post.id)}
                            className="w-20 h-10 pr-3 text-red-500 hover:text-red-900 cursor-pointer"
                          />
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
