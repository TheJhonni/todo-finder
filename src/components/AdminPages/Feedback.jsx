import React, { useEffect, useState } from "react";
import AgreeChart from "../components_2nd_Layer/feedback/AgreeChart";
import CommentsBar from "../components_2nd_Layer/feedback/CommentsBar";

export default function Feedback({ posts, comments }) {
  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <AgreeChart posts={posts} myColor={"spectral"} />
      </div>
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[50%] left-[20%] z-99">
        <CommentsBar posts={posts} comments={comments} />
      </div>
    </div>
  );
}
