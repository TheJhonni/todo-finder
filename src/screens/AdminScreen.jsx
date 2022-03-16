import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Gif from "../components/Spinner/Gif";
import SideBar from "../components/AdminPages/SideBar";
import Dahsboard from "../components/AdminPages/Dahsboard";
import AdminPost from "../components/AdminPages/AdminPost";
import AdminCreateNewPost from "../components/AdminPages/AdminCreateNewPost";

export default function AdminScreen() {
  const navigate = useNavigate();

  // const [notClosed, setNotClosed] = useState(true);

  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const loadPosts = () => {
    fetch(`http://localhost:5000/myPosts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };
  useEffect(() => {
    loadPosts();
    setTimeout(() => {
      setMount(true);
    }, 500);
  }, []);
  return (
    <>
      <div className="img-textLeft h-screen pt-10">
        <h1 className="text-4xl text-gray-200 font-extrabold text-center pt-2 px-10">
          ADMIN SECTION
        </h1>
        <SideBar path={Route.path} />

        {mount ? (
          <Routes>
            <Route exact path="dashboard" element={<Dahsboard />} />
            <Route exact path="posts" element={<AdminPost posts={posts} />} />
            <Route
              exact
              path="createNewPosts"
              element={<AdminCreateNewPost />}
            />
          </Routes>
        ) : (
          <Gif />
        )}
      </div>
    </>
  );
}
