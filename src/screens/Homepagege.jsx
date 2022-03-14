import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import Posts from "../components/components_2nd_Layer/Posts";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import Cards from "../components/components_2nd_Layer/Cards";
import Blogs from "../components/components_2nd_Layer/Blogs";
import GenericScreen from "./GenericScreen";
import Gif from "../components/Spinner/Gif";

export default function Homepagege() {
  const navigate = useNavigate();
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);
  const [postComments, setPostComments] = useState([]);
  const [howManyLikes, setHowManyLikes] = useState(84);

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // store Data in State Data Variable
          setPosts(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 1000);
  };

  const loadComments = () => {
    fetch("http://localhost:5000/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPostComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadPosts();
    loadComments();
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {currentUser && mount ? (
        <div className="w-screen h-full img-textLeft">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <div className="flex justify-between items-center">
                <h2 className="text-center text-6xl mb-7 font-extrabold text-gray-200">
                  Read one of our latest articles
                </h2>

                <span
                  onClick={() => navigate("/newPost")}
                  className="ml-auto texl-md rounded px-5 py-5 border-2 cursor-pointer bg-gray-300 hover:bg-gray-500"
                >
                  Add new Post
                </span>
              </div>

              <div className="text-gray-600 flex body-font overflow-hidden">
                {posts &&
                  postComments &&
                  posts.map(
                    (post) =>
                      post.category === "generic" && (
                        <Link to={`/posts/${post.id}`} key={post?.id}>
                          <Blogs
                            id={post?.id}
                            src={post?.img1}
                            title={post?.title}
                            category={post?.category}
                            author={post?.author}
                            body={post?.body.slice(0, 200)}
                            post={post}
                            howManyLikes={howManyLikes}
                            filteredC={postComments.filter(
                              (e) => e.postId === post.id
                            )}
                          />
                        </Link>
                      )
                  )}
              </div>
              <div className="flex justify-between w-full mb-[200px]">
                <GenericScreen />
                <div className="h-screen ml-[70%] top-12 flex flex-col mt-5">
                  <h2 className="text-4xl my-7 font-extrabold text-center text-gray-200">
                    Our categories:
                  </h2>
                  <div className="flex flex-col space-y-12 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-2">
                    {posts &&
                      posts.slice(1, 4).map(
                        (post) =>
                          post.category !== "generic" && (
                            <Link
                              key={post.id}
                              to={`/category=${post.category}`}
                            >
                              <div className="flex">
                                <Cards
                                  name={
                                    post.category === undefined && null
                                      ? "To be continued..."
                                      : post.category
                                  }
                                  img={
                                    (post.category === "generic" &&
                                      "logos/logo.png") ||
                                    (post.category === "sea" &&
                                      "logos/ocean.png") ||
                                    (post.category === "space" &&
                                      "logos/universe.png") ||
                                    (post.category === "eye" &&
                                      "logos/ocio.png") ||
                                    (post.category === undefined &&
                                      "logos/atom.png")
                                  }
                                />
                              </div>
                            </Link>
                          )
                      )}
                  </div>
                </div>
              </div>

              {/* {currentUser.email === "jdilmoro@gmail.com" && (
                        <FiEdit
                          onClick={() => navigate(`/edit/${post.id}`)}
                          className="text-white text-xl cursor-pointer"
                        />
                      )} */}
            </div>
          </div>

          <Footer />
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}
