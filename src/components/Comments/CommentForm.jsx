import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CommentForm() {
  // const [mount, setMount] = useState(false);
  // const dispatch = useDispatch();
  // let { id } = useParams();
  // //   const navigate = useNavigate();

  // const [editPost, setEditPost] = useState(null);

  // const fetchData = () => {
  //   // const API = `${process.env.REACT_APP_JSON_API}`;
  //   setTimeout(() => {
  //     setMount(true);
  //     fetch(`http://localhost:5000/myPosts/${id}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         // store Data in State Data Variable
  //         setEditPost(data);
  //         setMount(false);
  //       })
  //       .catch((err) => {
  //         console.log(err, " error");
  //       });
  //   }, 350);
  // };

  // useEffect(() => {
  //   fetchData(id);
  // }, [id]);

  return (
    <>
      <div className="flex justify-center w-screen h-screen px-4 text-gray-800">
        <div className="flex flex-col  w-[60%] h-screen flex-grow border-l border-r border-gray-300">
          <div className="flex-grow h-0 overflow-auto">
            <div className="flex w-full p-8 border-b border-gray-300">
              <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
              <div className="flex flex-col flex-grow ml-4">
                <div className="flex">
                  <span className="font-semibold">Username</span>
                  <span className="ml-1">@username</span>
                  <span className="ml-auto text-sm">Just now</span>
                </div>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                  <a className="underline" href="#">
                    #hashtag
                  </a>
                </p>
                <div className="flex mt-2">
                  <button className="text-sm font-semibold">Like</button>
                  <button className="ml-2 text-sm font-semibold">Reply</button>
                  <button className="ml-2 text-sm font-semibold">Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
