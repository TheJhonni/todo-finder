import React, { useEffect, useState } from "react";
import AgreeChart from "../components_2nd_Layer/feedback/AgreeChart";
import CommentsBar from "../components_2nd_Layer/feedback/CommentsBar";

export default function Feedback({ posts, comments }) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between md:flex-col xl:space-y-5">
      <div className="lg:px-2 lg:py-2 xl:px-0 xl:py-0 absolute left-[10%] w-[80%] h-[35%] top-[15%] sm:w-[40%] sm:left-[7%] sm:h-[55%] sm:top-[25%] md:h-[30%] md:w-[60%] md:left-[35%] md:top-[10%] lg:top-[12%] lg:h-[35%] xl:left-[30%] 2xl:w-[70%] 2xl:top-[10%] 2xl:left-[20%] rounded bg-gray-300 z-99">
        <AgreeChart posts={posts} myColor={"spectral"} />
      </div>
      <div className="mt-2 md:mt-0 px-5 md:px-0 lg:py-1 xl:py-0 absolute left-[10%] w-[80%] h-[35%] top-[55%] sm:w-[40%] sm:left-[55%] sm:h-[55%] sm:top-[23%] md:h-[30%] md:w-[60%] md:left-[35%] md:top-[45%] lg:top-[50%] lg:h-[35%] xl:left-[30%] 2xl:w-[70%] 2xl:left-[20%] rounded bg-gray-300 z-99">
        <CommentsBar posts={posts} comments={comments} />
      </div>
    </div>
  );
}
