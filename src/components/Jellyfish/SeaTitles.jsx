import React from "react";
import { Link } from "react-router-dom";

export default function SeaTitles() {
  return (
    <div className="container">
      <div className="absolute flex flex-col items-center top-0 right-[55%] pt-[12%] z-50">
        <h1 className="m-0 text-[#ffffffce] text-7xl font-bold mt-2">5%</h1>
        <p className="m-0 text-[#ffffffce] text-4xl font-bolder my-1">
          This is what we know of our oceans.
        </p>
        <div className="mt-[8%] ml-10 text-white">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
            optio illum exercitationem! Corporis harum architecto nostrum, iure
            minus amet exercitationem ut reiciendis nisi. Nulla expedita
            obcaecati, reiciendis recusandae in harum.
          </p>
        </div>
      </div>
    </div>
  );
}
