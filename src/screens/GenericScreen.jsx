import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../components/components_2nd_Layer/PopUp";
import Posts from "../components/components_2nd_Layer/Posts";

export default function GenericScreen() {
  const [posts, setPosts] = useState(null);

  const loadPosts = async () => {
    try {
      await fetch(`http://localhost:5000/myPosts`)
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

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <PopUp />
      <div className="md:space-y-10 lg:grid lg:grid-cols-4 py-10 lg:gap-x-6">
        {posts &&
          posts.map((_post) => (
            <div key={_post.id} className="flex justify-center items-center">
              <Link to={`/posts/${_post.id}`}>
                <Posts
                  key={_post.id}
                  id={_post.id}
                  src={_post.img1}
                  title={_post.title}
                />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
