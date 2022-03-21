import React from "react";
import AgreeChart from "../components_2nd_Layer/feedback/AgreeChart";
import Feedback2 from "../components_2nd_Layer/feedback/Feedback2";

export default function Feedback() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <AgreeChart />
      </div>
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[50%] left-[20%] z-99">
        <Feedback2 />
      </div>
    </div>
  );
}
