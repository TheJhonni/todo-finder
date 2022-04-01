import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import atoms from "../assets/atoms.gif";
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

  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;
  const COMMENTS_API = `${process.env.REACT_APP_API_COMMENTS}`;
  const loadPosts = async () => {
    try {
      setMount(false);
      await fetch(`${POST_API}`)
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
    } catch (error) {
      console.log(error);
    }
  };

  const loadComments = async () => {
    try {
      await fetch(`${COMMENTS_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPostComments(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    setTimeout(() => {
      loadPosts();
      loadComments();
    }, 800);
  }, []);

  return (
    <div className="w-full h-full img-textLeft">
      {currentUser && mount ? (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              className="w-[300px] md:w-[500px] md:h-[500px] z-[999] mx-auto mt-[-10]"
              src={atoms}
              alt="logo"
            />
            <h2 className="text-center text-3xl sm:text-4xl md:text-6xl md:mt-10 font-extrabold text-gray-200">
              Read one of our latest articles
            </h2>
            <div className="max-w-5xl mx-auto pb-10 sm:py-12 lg:py-32 lg:max-w-none">
              <div className="flex-col items-center md:flex lg:space-x-[200px] lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-2">
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
                            filteredC={postComments.filter(
                              (e) => e.postId === post.id
                            )}
                          />
                        </Link>
                      )
                  )}
              </div>
              <div className="text-gray-600 mx-auto space-y-10 mt-10 flex body-font overflow-hidden">
                <GenericScreen />
              </div>

              <h2 className="text-4xl my-7 font-extrabold text-center text-gray-200">
                Our categories:
              </h2>
              <div className="text-gray-600 flex body-font overflow-hidden">
                <div className="flex flex-col mx-auto space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-2">
                  {posts &&
                    posts.slice(1, 4).map(
                      (post) =>
                        post.category !== "generic" && (
                          <Link key={post.id} to={`/category=${post.category}`}>
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
          </div>

          <Footer />
        </>
      ) : (
        <div className="h-screen">
          <Gif />
        </div>
      )}
    </div>
  );
}
