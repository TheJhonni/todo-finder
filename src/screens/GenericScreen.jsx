import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PopUp from "../components/components_2nd_Layer/PopUp";
import Posts from "../components/components_2nd_Layer/Posts";

export default function GenericScreen() {
  // const [mount, setMount] = useState(false);
  // const [posts, setPosts] = useState(null);

  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);

  const loadPosts = () => {
    setTimeout(() => {
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          // store Data in State Data Variable
          setPosts(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <PopUp />
      <div className="md:space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
        {posts &&
          posts.map((_post) => (
            <div
              key={_post.id}
              className="flex justify-center items-center mt-10"
            >
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
