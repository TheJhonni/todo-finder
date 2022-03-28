import React, { useState } from "react";
import AgreeChart from "../components_2nd_Layer/feedback/AgreeChart";
import Feedback2 from "../components_2nd_Layer/feedback/Feedback2";

export default function Feedback() {
  const [likes, setLikes] = useState(68);
  const [dislikes, setLDislkes] = useState(4);

  const [likes2, setLikes2] = useState(2);
  const [dislikes2, setLDislkes2] = useState(789);
  const AgreeData = [
    {
      statement: "Generic Posts",
      participation: 32,

      Likes: 20,
      Dislikes: 3,
    },
    {
      statement: "Space Posts",
      participation: 9,
      Likes: 6,
      Dislikes: 32,
    },
    {
      statement: "Ocean's Posts",
      participation: 13,

      Likes: 9,
      Dislikes: 30,
    },
    {
      statement: "Subatomic",
      participation: 7,

      Likes: 18,
      Dislikes: 14,
    },
  ];
  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <AgreeChart
          likes={likes}
          dislikes={dislikes}
          AgreeData={AgreeData}
          myColor={"spectral"}
        />
      </div>
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[50%] left-[20%] z-99">
        <AgreeChart
          likes2={likes2}
          dislikes2={dislikes2}
          AgreeData={AgreeData}
          myColor={"spectral"}
        />
        {/* <Feedback2 /> */}
      </div>
    </div>
  );
}
