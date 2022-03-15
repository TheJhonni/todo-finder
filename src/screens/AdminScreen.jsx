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
          <div className="container mx-auto py-10">
            <h1 className="text-4xl text-gray-200 font-extrabold text-center py-5 px-10">
              ADMIN SECTION
            </h1>
            <span
              onClick={() => navigate("/newPost")}
              className="ml-auto texl-md rounded px-5 py-5 border-2 cursor-pointer bg-gray-300 hover:bg-[#5FD38D]"
            >
              Add new Post
            </span>
            <div className="flex justify-between w-full">
              <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2">
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
                      )
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
