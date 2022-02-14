import React from "react";
import { Link } from "react-router-dom";

function Cards({ name, link, img }) {
  return (
    <Link to={link}>
      <div className="flex flex-col justify-center items-center rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:scale-[0.85] hover:translate-x-3 hover:skew-y-3 transition-all duration-90 ease-in">
        <h1 className="text-xl text-gray-800 font-semibold md:text-2xl lg:text-3xl">
          {name}
        </h1>
        <img
          className="w-[200px] h-[200px] rounded-2xl"
          src={img}
          alt="Mountain"
        />
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Click to see more
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
