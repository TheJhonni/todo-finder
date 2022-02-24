import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import SeaScreen from "./SeaScreen";
import { useDispatch, useSelector } from "react-redux";

export default function PostScreen() {
  // const savedPosts = useSelector((state) => state.posts.savedPosts);

  const dispatch = useDispatch();
  let { id } = useParams();

  const [post, setPost] = useState(null);

  let sea = post?.category === "sea";

  const fetchData = () => {
    fetch(`http://localhost:3000/myPosts/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // store Data in State Data Variable
        setPost(data);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  // const isSaved = savedPosts.some((_post) => _post.id === post.id);
  // const toggleSaved = isSaved ? removeFromSaved : addToSaved;

  return (
    <>
      <div className="img-textLeft">
        <Navbar />

        <main className="relative z-80 container mx-auto bg-[#ffffffd2] px-4">
          <div className="relative mx-4 top-0 pt-[17%] overflow-hidden">
            <img
              className="absolute inset-0 object-cover object-top w-full h-full filter blur"
              src={post?.img1}
              alt=""
            />
          </div>
          {/* {isSaved ? (
            <div
              div
              className="absolute flex space-x-2 ml-[80%] top-10 z-99 mr-5"
            >
              <AiFillStar
                className="cursor-pointer text-4xl text-yellow-400 hover:scale-150 transition-all delay-50 ease-out hover:text-yellow-700"
                onClick={() => {
                  dispatch(toggleSaved(post._post));
                }}
              />
              <p className="text-3xl text-white z-99">Remove from favourites</p>
            </div>
          ) : (
            <div className="absolute flex space-x-2 ml-[80%] top-10 z-99 mr-5">
              <AiOutlineStar
                className="cursor-pointer text-5xl text-yellow-400 hover:scale-150 transition-all delay-50 ease-out hover:text-yellow-700"
                onClick={() => {
                  dispatch(toggleSaved(homepage[0]));
                }}
              />{" "}
              <p className="text-3xl text-white z-99">Add to favourites</p>
            </div>
          )} */}
          {sea && (
            <div className="mt-[-5%] w-1/2">
              <div className="ml-[-15%] w-1/2 mr-auto">
                <SeaScreen />
              </div>
              <div className="mr-[-85%] w-1/2 ml-auto">
                <SeaScreen />
              </div>
              <div className="ml-[-25%] w-1/2 mr-auto">
                <SeaScreen />
              </div>
            </div>
          )}
          <div className={!sea && "mt-[-10%] w-1/2 mx-auto"}>
            <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
              <img
                className="w-full h-full absolute inset-0 object-cover"
                src={post?.img1}
                alt=""
              />
            </div>
          </div>

          <article className="max-w-prose mx-auto py-8">
            <h1 className="text-2xl font-bold">{post?.title}</h1>
            <h2 className="mt-2 text-sm text-gray-500">
              <a className="hover:text-blue-700" href={post?.authorLink}>
                {post?.author}
              </a>
              , 28 November 2021
            </h2>
            <h2 className="mt-2 text-sm text-gray-500">
              {post?.p}, <br />
              <a className="hover:text-blue-700 text-xs mt-3" href={post?.link}>
                CLICK HERE to read the Original Article
              </a>
            </h2>

            <p className="mt-6">{post?.body[0]}</p>
            <p className="mt-4">{post?.body[1]}</p>
            <p className="mt-4">{post?.body[2]}</p>
            <p className="mt-4">{post?.body[3]}</p>
            <p className="mt-4">{post?.body[4]}</p>
            <p className="mt-4">{post?.body[5]}</p>
            {sea && (
              <div className="mr-[50%]">
                <SeaScreen />
              </div>
            )}

            <p className="mt-4">{post?.body[6]}</p>
            <p className="mt-4">{post?.body[7]}</p>
            <p className="mt-4">{post?.body[8]}</p>
            <p className="mt-4">{post?.body[9]}</p>
            <p className="mt-4">{post?.body[10]}</p>
            {sea && (
              <>
                <div className="mr-[50%]">
                  <SeaScreen />
                </div>
                <div className="ml-[50%]">
                  <SeaScreen />
                </div>
              </>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
