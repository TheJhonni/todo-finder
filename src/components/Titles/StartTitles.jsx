import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function StartTitles() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="relative w-[40%] h-[50%] mx-auto mt-10 flex flex-col items-center z-50">
      <h1 className="m-0 text-[#ffffffce] text-7xl font-bold my-2">5%</h1>
      <p className="m-0 text-[#ffffffce] text-4xl font-bold my-1">
        This is what we know of the Universe
      </p>
      <p className="container self-end p-5 text-[#ffffffce] text-xl my-1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nam
        vitae ipsam qui repudiandae temporibus perspiciatis deserunt ad.
        Similique itaque aperiam aspernatur fugit? Officiis earum facilis
        dolorum distinctio a amet.
      </p>
      <div className="mt-[20px]">
        <Link to={currentUser ? "/homePage" : "/redirectToLogin"}>
          <span className="m-0 mt-[5%] text-[#171753d3] bg-white text-xl hover:bg-[#5FD38D] font-bold px-[30px] py-[15px] rounded-full">
            Learn more
          </span>
        </Link>
      </div>
    </div>
  );
}
