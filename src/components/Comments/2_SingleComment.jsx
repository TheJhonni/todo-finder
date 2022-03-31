import React, { useState } from "react";
import RepliesComments from "./3.2_RepliesComments";
import { FcFullTrash } from "react-icons/fc";
import InputSendReply from "./4.2_InputSendReply";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../Toasts/Toast";

export default function SingleComment({
  commentAuthor,
  Link,
  commentBody,
  date,
  referenceId,
  fetchComments,
  replies,
  fetchReplies,
}) {
  const [showReplies, setShowReplies] = useState(null);
  const [inputReply, setInputReply] = useState(null);

  const notify = () => toast("Deleted");

  // declaring all APIs in .ENV
  const COMMENTS_API = `${process.env.REACT_APP_API_COMMENTS}`;

  const deleteComment = () => {
    if (window.confirm("Are you sure to delete this Comment?")) {
      fetch(`${COMMENTS_API}/${referenceId}`, {
        method: "DELETE",
        headers: { "Content-type": "Application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            notify();
            fetchComments();
          }
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }
  };

  return (
    <>
      {replies && (
        <div className="flex p-8 border-b border-gray-300">
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
                {showReplies ? "Hide replies " : "See replies "}
              </button>
              <button
                onClick={() => setInputReply(!inputReply)}
                className="ml-2 text-sm font-semibold hover:underline"
              >
                Reply
              </button>
              <span
                onClick={() => deleteComment(referenceId)}
                className="cursor-pointer ml-10 hover:scale-125 transition duration-75 ease-in"
              >
                <FcFullTrash className="w-5 h-5" />
              </span>
            </div>
            {inputReply && (
              <InputSendReply
                referenceId={referenceId}
                fetchReplies={fetchReplies}
              />
            )}
            {showReplies &&
              (replies.length < 0 ? (
                <span className="mt-3">No replies yet</span>
              ) : (
                <RepliesComments
                  referenceId={referenceId}
                  replies={replies}
                  commentAuthor={commentAuthor}
                  fetchReplies={fetchReplies}
                />
              ))}
          </div>
        </div>
      )}
    </>
  );
}
