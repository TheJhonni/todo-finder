import React from "react";

export default function Posts({ id, src, title }) {
  return (
    <div className="md:mb-10 mx-auto w-full rounded-lg overflow-hidden">
      <h3 className="mb-6 text-base font-semibold text-white">
        {title.slice(0, 15) + (title.length > 15 ? "..." : "")}
      </h3>
      <img
        src={src}
        alt={title + "image"}
        className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-[700px] mx-auto h-[200px] object-center object-cover hover:opacity-25 rounded-lg"
      />
    </div>
  );
}
