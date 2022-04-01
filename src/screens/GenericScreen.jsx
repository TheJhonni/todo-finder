import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopUp from "../components/components_2nd_Layer/PopUp";
import Posts from "../components/components_2nd_Layer/Posts";

export default function GenericScreen() {
  const [posts, setPosts] = useState(null);
  const [adv, setAdv] = useState([]);

  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;

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

  // declaring all APIs in .ENV
  const ADV_API = `${process.env.REACT_APP_API_ADV}`;

  const fetchData = async () => {
    try {
      await fetch(`${ADV_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setAdv(data.data);
        })
        .catch((err) => {
          console.log("fetch error" + err);
        });
    } catch (error) {
      console.log("fetch error" + error);
    }
  };

  useEffect(() => {
    loadPosts();
    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <PopUp adv={adv} />
      <div className="md:space-y-10 lg:grid lg:grid-cols-4 py-10 lg:gap-x-6">
        {posts &&
          posts.map((_post) => (
            <div key={_post.id} className="flex justify-center items-center">
              <Link to={`/posts/${_post.id}`}>
                <Posts id={_post.id} src={_post.img1} title={_post.title} />
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
