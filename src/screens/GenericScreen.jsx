import React from "react";
import { Link } from "react-router-dom";
import Posts from "../components/components_2nd_Layer/Posts";
import Navbar from "../components/Navbar/Navbar";
// import Scene from "../components/Jellyfish/Scene.js";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import SeaTitles from "../components/Jellyfish/SeaTitles";

export default function GenericScreen({
  homepage,
  eyePosts,
  seaPosts,
  spacePosts,
}) {
  return (
    <>
      <div className="w-screen h-full img-textLeft">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-gray-200">Read more</h2>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {homepage.map((post) => (
                <Link to={"/posts/" + post.asin}>
                  {console.log(post)}
                  <Posts
                    p={post.p}
                    key={post.asin}
                    asin={post.asin}
                    src={post.img1}
                    title={post.title}
                  />
                </Link>
              ))}
              {eyePosts.map((post) => (
                <Posts
                  key={post.asin}
                  asin={post.asin}
                  post={post}
                  src={post.img1}
                  title={post.title}
                />
              ))}
              {seaPosts.map((post) => (
                <Posts
                  key={post.asin}
                  asin={post.asin}
                  post={post}
                  src={post.img1}
                  title={post.title}
                />
              ))}
              {spacePosts.map((post) => (
                <Posts
                  key={post.asin}
                  asin={post.asin}
                  post={post}
                  src={post.img1}
                  title={post.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
