import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Posts from "../components/components_2nd_Layer/Posts";
import atoms from "../assets/atoms.gif";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import SpinnerNoBg from "../components/Spinner/SpinnerNoBg";
import Gif from "../components/Spinner/Gif";

export default function GenericScreen() {
  // const [mount, setMount] = useState(false);
  // const [posts, setPosts] = useState(null);

  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const loadPosts = () => {
    setTimeout(() => {
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          // store Data in State Data Variable
          setPosts(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    // const filtered = posts.filter((post) =>
    //   post.title.toLowerCase().includes(query)
    // );
    // setFiltered(filtered);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="container">
      <div className="mt-5 flex justify-center space-x-5 items-center">
        <img
          src={atoms}
          style={{
            width: "500px",
            height: "500px",
            zIndex: "999",
          }}
          alt="logo"
        />
        <div className="flex flex-col items-center">
          <h2 className="text-2xl my-7 font-extrabold text-center text-gray-200">
            Filter the articles
          </h2>

          <span className="flex justify-evenly items-center">
            <input
              type="text"
              value={query}
              name="query"
              onChange={handleChange}
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-g/ray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          </span>
        </div>
      </div>

      <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {posts &&
          posts
            .filter((posts) => posts.title.toLowerCase().includes(query))
            .map((_post) => (
              <div key={_post.id} className="flex">
                <Link to={`/posts/${_post.id}`}>
                  <Posts
                    key={_post.id}
                    id={_post.id}
                    src={_post.img1}
                    title={_post.title}
                  />
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
