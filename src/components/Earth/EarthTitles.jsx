import React from "react";
import { Link } from "react-router-dom";

export default function EarthTitles() {
  return (
    <div className="absolute flex flex-col items-center top-0 left-[55%] pt-[10%] z-50">
      <h1 className="m-0 text-[#ffffffce] text-8xl font-bold mt-2">VISIT US</h1>
      <div className="mt-[8%]">
        <Link to="/home">
          <span className="m-0 text-blue-800 bg-white text-8xl font-bold px-[30px] py-[15px] rounded-full">
            See more
          </span>
        </Link>
      </div>
    </div>
  );
}
