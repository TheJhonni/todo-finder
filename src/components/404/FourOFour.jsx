import React from "react";
import { Link } from "react-router-dom";

export default function FourOFour() {
  return (
    <div className="flex flex-col items-center justify-center space-y-[100px] h-screen">
      <h1 className="m-0 text-[#ffffffce] text-7xl font-bold mt-2">5%</h1>
      <p className="m-0 text-[#ffffffce] text-2xl font-bolder my-1">
        SO SORRY THIS ROUTE ISN'T AVAIABLE, FIRST YOU NEED TO LOG IN!
      </p>
      <div className="mt-[8%]">
        <Link to="/login">
          <span className="m-0 mt-[5%] text-[#171753d3] bg-white text-6xl font-bold px-[30px] py-[15px] rounded-full">
            Login Here!
          </span>
        </Link>
      </div>
    </div>
  );
}
