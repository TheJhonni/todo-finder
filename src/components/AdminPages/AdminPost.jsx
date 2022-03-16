import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Posts from "../components_2nd_Layer/Posts";
import { FiEdit } from "react-icons/fi";

export default function AdminPost({ posts }) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[10%] left-[20%] h-full">
      <div className="container mx-auto">
        <h1 className="text-4xl text-gray-200 font-extrabold text-center pt-10 px-10">
          Posts
        </h1>
        {/* TO DO ONCLICK APPEARS */}
        <div className="container mx-auto py-10">
          <span
            onClick={() => navigate("/newPost")}
            className="ml-auto texl-md rounded px-5 py-5 border-2 cursor-pointer bg-gray-300 hover:bg-[#5FD38D]"
          >
            Add new Post
          </span>

          <div className="flex justify-start w-full">
            <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-0">
              {posts &&
                posts.map((post) => (
                  <div key={post.id} className="flex relative max-w-[50%]">
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
                      className="absolute text-white text-6xl cursor-pointer right-0 top-0 bottom-15"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
