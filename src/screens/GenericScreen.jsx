import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import Posts from "../components/components_2nd_Layer/Posts";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function GenericScreen() {
  // const [mount, setMount] = useState(false);
  // const [posts, setPosts] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch("http://localhost:5000/myPosts")
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
      {posts ? (
        <div className="w-screen h-full img-textLeft">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <div className="flex justify-center items-center">
                <h2 className="text-6xl mb-7 font-extrabold text-center text-gray-200">
                  Read more
                </h2>
                <span
                  onClick={() => navigate("/newPost")}
                  className="ml-auto texl-md rounded px-5 py-5 border-2 cursor-pointer bg-gray-300 hover:bg-gray-500"
                >
                  Add new Post
                </span>
              </div>
              <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {posts &&
                  posts.map((post) => (
                    <div className="flex">
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

          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
