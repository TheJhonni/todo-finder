import React, { useEffect, useState } from "react";
import AgreeChart from "../components_2nd_Layer/feedback/AgreeChart";
import Feedback2 from "../components_2nd_Layer/feedback/Feedback2";

export default function Feedback({ posts }) {
  const [likes, setLikes] = useState(68);
  const [dislikes, setLDislkes] = useState(4);

  const [comments, setComments] = useState(2);
  // const [posts, setPosts] = useState(789);

  const fetchPosts = () => {
    try {
      fetch("");
    } catch (error) {}
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <AgreeChart posts={posts} myColor={"spectral"} />
      </div>
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[50%] left-[20%] z-99">
        {/* <Feedback2 posts={posts} comments={comments} /> */}
      </div>
    </div>
  );
}
