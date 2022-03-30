import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

export default function Table({ posts }) {
  const [filter, setFilter] = useState("");
  const [filtered, setFiltered] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;

  const deletePost = async (id) => {
    if (window.confirm("Are you sure to delete this post?")) {
      await fetch(`${POST_API}/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "Application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            alert("Post deleted succesfully");

            navigate("/posts");
          }
        })

        .catch((err) => {
          console.log(err, " error");
        });
    }
  };
  useEffect(() => {
    const res = posts.filter((post) =>
      post.title.toLowerCase().includes(filter)
    );
    setFiltered(res);
  }, [filter]);

  return (
    <div className="flex flex-col">
      <div className=" shadow-md sm:rounded-lg">
        <div className="inline-block align-middle">
          <div className="p-4  w-[70%]">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>

            <div className="relative flex justify-between items-center mt-1">
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-g/ray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for posts"
              />
              <span
                onClick={() => navigate("/newPost")}
                className="ml-auto texl-md rounded px-5 py-5 border-2 cursor-pointer bg-gray-300 hover:bg-[#5FD38D]"
              >
                Add new Post
              </span>
            </div>
          </div>

          <div className="overflow-hidden">
            <table className="w-[70%] h-[70%] divide-y divide-gray-300 table-fixed rounded">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Img
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Title Post
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Author
                  </th>
                  <th scope="col" className="p-4 px-6 text-right">
                    <span className="">Edit</span>
                  </th>
                  <th scope="col" className="p-4 px-6 text-right">
                    <span className="">Read it full</span>
                  </th>
                  <th scope="col" className="p-4 px-6 text-right">
                    <span className="text-red-500">DELETE</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300 dark:bg-gray-800 dark:divide-gray-700">
                {filtered &&
                  filtered.map((_post) => (
                    <tr
                      key={_post.id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <img
                          alt="img-post-related"
                          className="w-[60px] h-[60px] object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                          src={_post.img1}
                        />
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {_post.title.slice(0, 15) + "..."}
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {_post.category}
                      </td>
                      <td
                        className={
                          "py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white " +
                          (_post.author === "Unknown" && "text-red-500")
                        }
                      >
                        {_post.author
                          ? _post.author.slice(0, 8) + "..."
                          : "Unknown"}
                      </td>

                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <p
                          onClick={() => navigate(`/edit/${_post.id}`)}
                          className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          Edit
                        </p>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <p
                          onClick={() => navigate(`/posts/${_post.id}`)}
                          className="text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        >
                          See the full article
                        </p>
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
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
