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
      <div className="w-full h-full img-textLeft">
        <div className="bg-transparent">
          <Navbar />
          <div className="w-[40%]  md:w-[70%] mx-auto">
            <div className="posts md:grid md:grid-cols-4 gap-12">
              {homepage.map((post) => (
                <Posts post={post} />
              ))}
              {eyePosts.map((post) => (
                <Posts post={post} />
              ))}
              {seaPosts.map((post) => (
                <Posts post={post} />
              ))}
              {spacePosts.map((post) => (
                <Posts post={post} />
              ))}

              {/* <Link to={`/posts/${post.title}`}>
                </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
