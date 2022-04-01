import React from "react";

export default function Posts({ src, title }) {
  return (
    <div className="flex-col my-5 mx-2 justify-start space-y-2 items-center rounded-lg overflow-hidden">
      <h3 className="text-base font-semibold text-white">
        {title.slice(0, 15) + (title.length > 15 ? "..." : "")}
      </h3>
      <img
        src={src}
        alt={title + "image"}
        className="w-[300px] sm:w-[500px] md:w-[600px] h-[200px] object-center object-cover hover:opacity-25 rounded-lg"
      />
    </div>
  );
}
