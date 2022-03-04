import React from "react";
import { Link } from "react-router-dom";
import GenericScreen from "../../screens/GenericScreen";
import Footer from "../Footer/Footer";

export default function SeaTitles() {
  return (
    <div className="absolute h-full top-[5%] right-[30%] lg:right-[50%] z-50">
      <div className="flex flex-col items-center pt-[12%]">
        <h1 className="m-0 text-[#ffffffce] text-7xl font-bold mt-2">5%</h1>
        <p className="m-0 text-[#ffffffce] text-4xl font-bolder my-1">
          This is what we know of our oceans.
        </p>
        <div className="mt-[8%] ml-10 text-xl text-white">
          <p>Nautical exploration is as old as humans.</p>
        </div>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>
    </div>
  );
}
