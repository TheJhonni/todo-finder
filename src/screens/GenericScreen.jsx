import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ShowTestimonials from "../components/Comments/ShowTestimonials";
import Posts from "../components/components_2nd_Layer/Posts";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
// import Scene from "../components/Jellyfish/Scene.js";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import SeaTitles from "../components/Jellyfish/SeaTitles";

// const API = process.env.REACT_APP_JSON_API;

export default function GenericScreen() {
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  // const { asin } = useParams();

  const fetchData = () => {
    setTimeout(() => {
      setMount(true);
      fetch("http://localhost:5000/myPosts")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // store Data in State Data Variable
          setPosts(data);
          setMount(false);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {posts ? (
        <div className="w-screen h-full img-textLeft">
          <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-6xl mb-7 font-extrabold text-center text-gray-200">
                Read more
              </h2>
              <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {posts &&
                  posts.map((post) => (
                    <Link to={`/posts/${post.id}`}>
                      <Posts
                        key={post.id}
                        id={post.id}
                        src={post.img1}
                        title={post.title}
                      />
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          <ShowTestimonials />
          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
