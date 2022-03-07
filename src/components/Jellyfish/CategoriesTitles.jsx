import GenericScreen from "../../screens/GenericScreen";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Posts from "../components_2nd_Layer/Posts";
import { FiEdit } from "react-icons/fi";
import { useSelector } from "react-redux";

export default function CategoriesTitles({ posts }) {
  const navigate = useNavigate();
  const { category } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {}, [currentUser]);

  return (
    <div className="absolute left-[10%] h-full top-[5%] right-[30%] lg:right-[50%] z-50">
      <div className="flex flex-col items-center pt-[12%]">
        <h1 className="m-0 text-[#ffffffce] text-7xl font-bold mt-2">5%</h1>
        <p className="m-0 text-[#ffffffce] text-4xl font-bolder my-1">
          It's silly How mutch we don't know about our{" "}
          {(category === "sea" && "Oceans") ||
            (category === "eye" && "Limited View") ||
            (category === "space" && "Universe")}
        </p>
        <div className="mt-[8%] ml-10 text-xl text-white">
          <p>
            {(category === "sea" &&
              "Nautical exploration is as old as humans.") ||
              (category === "eye" &&
                "How mutch can we really see around us?") ||
              (category === "space" &&
                "We know more about our Universe than our oceans, crazy isn't it?!")}
          </p>
        </div>
      </div>
      <div className="absolute left-[5%] top-[60%] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {posts &&
          posts.map((post) => (
            <div className="flex">
              <Link to={`/posts/${post.id}`}>
                <Posts
                  key={post.id}
                  id={post.id}
                  src={post.img1}
                  title={post.title}
                />
              </Link>

              {currentUser.email === "jdilmoro@gmail.com" && (
                <FiEdit
                  onClick={() => navigate(`/edit/${post.id}`)}
                  className="text-white text-xl cursor-pointer"
                />
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
