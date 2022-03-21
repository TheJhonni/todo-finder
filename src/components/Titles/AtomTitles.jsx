import React from "react";
import { useSelector } from "react-redux";
export default function AtomTitles() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="ml-10 mt-10 flex flex-col items-center z-50">
      <h1 className="m-0 text-[#1E667C] text-5xl font-bold my-2">
        How is that even possible?
      </h1>
      <p className="m-0 text-[#1E667C] text-2xl font-bold my-1">
        Well, read some of our articles and get your own idea!
      </p>
      <p className="w-[50%] text-[#1E667C] text-xl my-5">
        Seems like we know nothing. In fact, about our atomic reality, our
        oceans, about what we can actually see from our own eyes and of course
        about our galaxies and universe...
      </p>
      <div className="container flex items-center justify-evenly">
        <img src="/logos/atom.png" className="w-[300px] h-[300px]" alt="logo" />
        <img
          src="/logos/ocean.png"
          className="w-[300px] h-[300px]"
          alt="logo"
        />

        <img src="/logos/ocio.png" className="w-[300px] h-[300px]" alt="logo" />
        <img
          src="/logos/universe.png"
          className="w-[300px] h-[300px]"
          alt="logo"
        />
      </div>
    </div>
  );
}
