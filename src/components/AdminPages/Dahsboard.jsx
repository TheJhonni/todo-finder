import React from "react";
import Feedback2 from "../components_2nd_Layer/dashboard/Feedback2";
import MyResponsiveAreaBump from "../components_2nd_Layer/dashboard/MyResponsiveAreaBump";

export default function Dahsboard({ posts, comments }) {
  return (
    <div className="flex flex-col xl:space-y-5">
      <div className="px-5 py-5 absolute lg:left-[35%] lg:top-[8%] lg:h-[40%] lg:w-[60%] xl:left-[30%] 2xl:w-[70%] 2xl:top-[10%] 2xl:left-[20%] rounded bg-gray-300 z-99">
        <Feedback2 posts={posts} />
      </div>
      <div className="px-5 py-5 absolute lg:h-[40%] lg:w-[60%] lg:top-[50%] lg:left-[35%] xl:left-[30%] 2xl:w-[70%] 2xl:left-[20%] rounded bg-gray-300 z-99">
        <MyResponsiveAreaBump posts={posts} comments={comments} />
      </div>
    </div>
  );
}
