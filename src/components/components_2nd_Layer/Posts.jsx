import React from "react";

export default function Posts({ post }) {
  return (
    <div className="rounded-md w-72 my-7 border transition-all  hover:shadow-lg hover-scale:105 cursor-pointer">
      <img src={post?.img1} alt="Cover Image" />
      <div className="mt-2 p-2">
        <h2 className="font-semibold text-white hover:text-blue-700 text-xl">
          {post?.title}
        </h2>
      </div>
    </div>
  );
}
