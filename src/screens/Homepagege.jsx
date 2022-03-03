import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import Posts from "../components/components_2nd_Layer/Posts";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import Cards from "../components/components_2nd_Layer/Cards";

export default function Homepagege() {
  const navigate = useNavigate();
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const uniquePosts = (posts) =>
    Object.keys(posts).reduce((res, key) => {
      !~res.indexOf(posts[key].category) && res.push(posts[key].category);
      return res;
    }, []);

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
    setTimeout(() => {
      setMount(true);
    }, 350);
  }, []);

  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {currentUser && mount ? (
        <div className="w-screen h-full img-textLeft">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <div className="flex justify-center items-center">
                <h2 className="text-6xl mb-7 font-extrabold text-center text-gray-200">
                  Read one of our latest articles
                </h2>
              </div>

              <div className="flex flex-col items-center space-x-4 mb-10">
                <div className="flex justify-between mt-[100px] lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  {posts &&
                    posts.map(
                      (post) =>
                        post.category === "generic" && (
                          <Link to={`/posts/${post.id}`}>
                            <Posts
                              key={post.id}
                              id={post.id}
                              src={post.img1}
                              title={post.title}
                            />
                          </Link>
                        )
                    )}
                </div>
              </div>
              <div className="h-screen flex flex-col mt-5">
                <h2 className="text-4xl my-7 font-extrabold text-center text-gray-200">
                  Our categories
                </h2>
                <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                  {posts &&
                    posts.slice(1, 4).map(
                      (post) =>
                        post.category !== "generic" && (
                          <Link to={`/category=${post.category}`}>
                            <div key={post.id} className="flex">
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
        <Spinner />
      )}
    </>
  );
}
