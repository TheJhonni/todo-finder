import React from "react";
import { useSelector } from "react-redux";
export default function AtomTitles() {
  return (
    <div className="mt-10 flex flex-col items-center container z-50">
      <h1 className="m-0 text-[#1E667C] lg:text-4xl xl:text-5xl font-bold my-2">
        How is that even possible?
      </h1>
      <p className="m-0 text-[#1E667C] lg:text-xl xl:text-2xl font-bold my-1">
        Well, read some of our articles and get your own idea!
      </p>
      <p className="xl:w-[50%] text-[#1E667C] lg:text-sm xl:text-xl my-5">
        Seems like we know nothing. In fact, about our atomic reality, our
        oceans, about what we can actually see from our own eyes and of course
        about our galaxies and universe...
      </p>
      <div className="mx-auto flex items-center justify-center xl:justify-evenly space-x-2">
        <img
          src="/logos/atom.png"
          className="w-[60px] h-[60px] xl:w-[300px] md:h-[100px] xl:h-[300px]"
          alt="logo"
        />
        <img
          src="/logos/ocean.png"
          className="w-[60px] h-[60px] xl:w-[300px] md:h-[100px] xl:h-[300px]"
          alt="logo"
        />

        <img
          src="/logos/ocio.png"
          className="w-[60px] h-[60px] xl:w-[300px] md:h-[100px] xl:h-[300px]"
          alt="logo"
        />
        <img
          src="/logos/universe.png"
          className="w-[60px] h-[60px] xl:w-[300px] md:h-[100px] xl:h-[300px]"
          alt="logo"
        />
      </div>
    </div>
  );
}
