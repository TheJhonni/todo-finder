import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import sat from "../../assets/sat.gif";

export default function StartTitles() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="m-0 mx-auto text-[#ffffffce] md:text-xl lg:text-3xl xl:text-7xl font-bold my-2">
          5%
        </h1>
        <p className="m-0 text-[#ffffffce] md:text-lg lg:text-2xl xl:text-4xl font-bold my-1">
          This is what we know of the Universe
        </p>
        <p className="container mx-auto p-5 text-[#ffffffce] md:text-sm lg:text-lg xl:text-xl my-1">
          This blog is here with the only purpose to make you feel very small.
        </p>
        <p className="m-0 text-[#ffffffce] md:text-lg lg:text-2xl xl:text-4xl font-bold my-1">
          Just kidding...
        </p>
      </div>
      <div className="flex justify-center items-center space-x-5 mx-auto xl:mt-[-150px]">
        <img
          src={sat}
          className="xl:mt-10 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[500px] xl:h-[500px] z-99"
          alt="logo"
        />
        <Link to={currentUser ? "/homePage" : "/redirectToLogin"}>
          <span className="mt-[5%] text-[#171753d3] bg-white md:text-lg lg:text-xl hover:bg-[#5FD38D] font-normal xl:font-bold px-[5px] py-[5px] lg:px-[20px] lg:py-[10px] xl:px-[30px] xl:py-[15px] rounded-full">
            Learn more
          </span>
        </Link>
      </div>
    </>
  );
}
