import React from "react";
import { MdThumbUp } from "react-icons/md";
export default function Blogs({
  src,
  id,
  title,
  category,
  author,
  body,
  post,
  howManyLikes,
  filteredC,
}) {
  return (
    <div className="p-8 md:w-[600px] mx-3 mt-10 flex flex-col items-start bg-indigo-50 rounded hover:bg-indigo-200">
      <span className="inline-block py-1 px-2 rounded text-indigo-500 text-xs font-medium tracking-widest">
        {category}
      </span>
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
        {title.slice(0, 15)} ...
      </h2>
      <p className="leading-relaxed mb-8">{body} ...</p>
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        <span className="text-indigo-500 inline-flex items-center">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </span>
        <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          {Math.floor(Math.random() * (999 - 200) + 200).toLocaleString()}
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <svg
            className="w-4 h-4 mr-1"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
          </svg>
          {filteredC.length}
        </span>
        <span className="text-gray-400 inline-flex items-center leading-none text-sm pl-3">
          <MdThumbUp className="mr-1" />
          {howManyLikes + post.likes.length}
        </span>
      </div>
      <span className="inline-flex items-center">
        <img
          alt={title + "image"}
          src={src}
          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
        />
        <span className="flex-grow flex flex-col pl-4">
          <span className="title-font font-medium text-gray-900">
            <p>{author}</p>
          </span>
          <span className="text-gray-400 text-xs tracking-widest mt-0.5">
            SCIENTIST
          </span>
        </span>
      </span>
    </div>
  );
}
