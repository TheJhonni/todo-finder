import React from "react";

export default function Posts({ asin, src, title, p }) {
  return (
    <div key={asin} className="group relative">
      <div className="relative w-full rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={src}
          alt={title + "image"}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-6 text-sm text-gray-400">
        <a href="#">
          <span className="absolute inset-0 "></span>
          {p}
        </a>
      </h3>
      <p className="text-base font-semibold text-white ">{title}</p>
    </div>
  );
}
