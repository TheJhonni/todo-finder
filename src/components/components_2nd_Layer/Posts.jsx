import React from "react";

export default function Posts({ asin, src, title }) {
  return (
    <div
      asin={asin}
      className="relative mb-10 w-full rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1"
    >
      <h3 className="mb-6 text-base font-semibold text-white">{title}</h3>
      <img
        src={src}
        alt={title + "image"}
        className="w-full h-full object-center object-cover hover:opacity-25"
      />
    </div>
  );
}
