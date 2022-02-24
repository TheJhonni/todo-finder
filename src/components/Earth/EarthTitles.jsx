import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function EarthTitles() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="absolute flex flex-col items-center top-0 left-[55%] pt-[12%] z-50">
      <h1 className="m-0 text-[#ffffffce] text-7xl font-bold mt-2">5%</h1>
      <p className="m-0 text-[#ffffffce] text-4xl font-bolder my-1">
        This is what we know of the Universe
      </p>
      <div className="mt-[8%]">
        <Link to={currentUser ? "/posts" : "/404"}>
          <span className="m-0 mt-[5%] text-[#171753d3] bg-white text-6xl font-bold px-[30px] py-[15px] rounded-full">
            Learn more
          </span>
        </Link>
      </div>
    </div>
  );
}
