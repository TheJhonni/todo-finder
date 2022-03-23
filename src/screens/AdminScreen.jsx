import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Gif from "../components/Spinner/Gif";
import SideBar from "../components/AdminPages/SideBar";
import Dahsboard from "../components/AdminPages/Dahsboard";
import AdminPost from "../components/AdminPages/AdminPost";
import User from "../components/AdminPages/User";
import AdminCreateNewPost from "../components/AdminPages/AdminCreateNewPost";
import Feedback from "../components/AdminPages/Feedback";
import Geolocalization from "../components/AdminPages/Geolocalization";

export default function AdminScreen() {
  const navigate = useNavigate();

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
      {mount ? (
        <div className="img-textLeft py-10">
          <SideBar path={Route.path} />
          <Routes>
            <Route exact path="dashboard" element={<Dahsboard />} />
            <Route exact path="feedbacks" element={<Feedback />} />
            <Route
              exact
              path="editPosts"
              element={<AdminPost posts={posts} />}
            />
            <Route
              exact
              path="createNewPosts"
              element={<AdminCreateNewPost />}
            />
            <Route exact path="users" element={<User />} />
            <Route exact path="geolocalization" element={<Geolocalization />} />
          </Routes>
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}
