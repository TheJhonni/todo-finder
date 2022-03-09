import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Posts from "../components/components_2nd_Layer/Posts";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";
import SpinnerNoBg from "../components/Spinner/SpinnerNoBg";

export default function GenericScreen() {
  // const [mount, setMount] = useState(false);
  // const [posts, setPosts] = useState(null);

  const navigate = useNavigate();
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const { category } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // store Data in State Data Variable
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
  }, []);

  return (
    <>
      {currentUser && mount ? (
        <div className="absolute left-10 mr-12 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-4xl my-7 font-extrabold text-center text-gray-200">
              Latest Articles
            </h2>
            <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {posts &&
                posts.map((post) => (
                  <div key={post.id} className="flex">
                    <Link to={`/posts/${post.id}`}>
                      <Posts
                        key={post.id}
                        id={post.id}
                        src={post.img1}
                        title={post.title}
                      />
                    </Link>

                    {currentUser.email === "jdilmoro@gmail.com" && (
                      <FiEdit
                        onClick={() => navigate(`/edit/${post.id}`)}
                        className="text-white text-xl cursor-pointer"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <SpinnerNoBg />
      )}
    </>
  );
}
