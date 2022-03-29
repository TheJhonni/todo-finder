import React from "react";
import Feedback2 from "../components_2nd_Layer/dashboard/Feedback2";
import MyResponsiveAreaBump from "../components_2nd_Layer/dashboard/MyResponsiveAreaBump";

export default function Dahsboard({ posts, comments }) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <Feedback2 posts={posts} />
      </div>
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[50%] left-[20%] z-99">
        <MyResponsiveAreaBump posts={posts} comments={comments} />
      </div>
    </div>
  );
}
