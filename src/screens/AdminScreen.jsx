import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Gif from "../components/Spinner/Gif";
import SideBar from "../components/AdminPages/SideBar";
import Dahsboard from "../components/AdminPages/Dahsboard";
import AdminPost from "../components/AdminPages/AdminPost";
import User from "../components/AdminPages/User";
import Feedback from "../components/AdminPages/Feedback";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminScreen() {
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);

  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;
  const COMMENTS_API = `${process.env.REACT_APP_API_COMMENTS}`;

  const loadPosts = async () => {
    try {
      await fetch(`${POST_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };
  const loadComments = async () => {
    try {
      await fetch(`${COMMENTS_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setComments(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () => toast("Post deleted");

  const deletePost = async (id) => {
    if (window.confirm("Are you sure to delete this post?")) {
      await fetch(`${POST_API}/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "Application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            notify();
            console.log(res);
            setTimeout(() => {
              loadPosts();
            }, 500);
          }
        })

        .catch((err) => {
          console.log(err, " error");
        });
    }
  };

  useEffect(() => {
    loadPosts();
    loadComments();
    setTimeout(() => {
      setMount(true);
    }, 800);
  }, []);

  return (
    <>
      <div className="relative img-textLeft h-full">
        {mount ? (
          <>
            <div className="py-5 px-5 md:px-0 md:py-[5%]">
              <SideBar path={Route.path} />
            </div>

            <Routes>
              <Route
                exact
                path="dashboard"
                element={<Dahsboard posts={posts} comments={comments} />}
              />
              <Route
                exact
                path="feedbacks"
                element={<Feedback posts={posts} comments={comments} />}
              />
              <Route
                exact
                path="editPosts"
                element={<AdminPost posts={posts} deletePost={deletePost} />}
              />
              <Route exact path="users" element={<User />} />
            </Routes>
          </>
        ) : (
          <div className="h-screen">
            <Gif />
          </div>
        )}
      </div>
    </>
  );
}
