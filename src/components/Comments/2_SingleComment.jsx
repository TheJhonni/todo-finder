import React, { useEffect, useState } from "react";
import RepliesComments from "./3.2_RepliesComments";
import { FcFullTrash } from "react-icons/fc";

export default function SingleComment({
  id,
  comment,
  commentAuthor,
  Link,
  commentBody,
  date,
  commentId,
  deleteComment,
}) {
  // const [newShowComments, setNewShowComments] = showComments;
  const [replies, setReplies] = useState([]);
  const [showReplies, setShowReplies] = useState(null);

  const fetchReplies = () => {
    setTimeout(() => {
      fetch(`http://localhost:5000/replies`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          // store Data in State Data Variable
          setReplies(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    fetchReplies();
  }, []);

  return (
    <>
      {replies && (
        <div className="flex w-full p-8 border-b border-gray-300">
          <img
            src={
              Link
                ? Link
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7_bT_czT7mCBeTP9GA98FIBGTQBAHks8XA&usqp=CAU"
            }
            className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"
          />
          <div className="flex flex-col flex-grow ml-4">
            <div className="flex items-center">
              <span className="font-semibold">{commentAuthor}</span>
              {/* <span className="ml-1">@ {commentAuthor}</span> */}

              <span className="text-sm ml-[300px]">at: {date}</span>
            </div>
            <p className="mt-1 ">{commentBody}</p>
            <div className="flex mt-2">
              <button className="text-sm font-semibold hover:underline">
                Like
              </button>
              <button
                onClick={() => setShowReplies(!showReplies)}
                className="ml-2 text-sm font-semibold hover:underline"
              >
                {showReplies ? "Hide replies" : "See replies"}
              </button>
              <span
                onClick={() => deleteComment(commentId)}
                className="cursor-pointer ml-10 hover:scale-125 transition duration-75 ease-in"
              >
                <FcFullTrash className="w-5 h-5" />
              </span>
            </div>
            {showReplies && (
              <RepliesComments
                postId={id}
                replies={replies}
                commentAuthor={commentAuthor}
              />
            )}
            {replies.length < 0 && <span className="mt-3">No comment yet</span>}
          </div>
        </div>
      )}
    </>
  );
}
