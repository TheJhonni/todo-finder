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
  postId,
  fetchComments,
  replies,
  fetchReplies,
}) {
  const [showReplies, setShowReplies] = useState(null);
  const [inputReply, setInputReply] = useState(null);
  const notify = () => toast("Deleted");

  // declaring all APIs in .ENV
  const COMMENTS_API = `${process.env.REACT_APP_API_COMMENTS}`;
  // console.log(`${COMMENTS_API}/${id}`);

  const deleteComment = async (postId) => {
    if (window.confirm("Are you sure to delete this Comment?")) {
      await fetch(`${COMMENTS_API}/${postId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            notify();
            console.log(res);
            setTimeout(() => {
              fetchComments();
            }, 500);
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
        <div className="flex my-2 border-b border-gray-300">
          <img
            src={
              Link
                ? Link
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7_bT_czT7mCBeTP9GA98FIBGTQBAHks8XA&usqp=CAU"
            }
            className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"
          />
          <div className="flex flex-col flex-grow items-start justify-start ml-4">
            <div className="flex items-center">
              <span className="font-semibold">{commentAuthor}</span>
              {/* <span className="ml-1">@ {commentAuthor}</span> */}

              <span className="text-sm ml-[270px]">at: {date}</span>
            </div>
            <p className="mt-1 ">{commentBody}</p>
            <div className="flex mt-2">
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
                onClick={() => deleteComment(postId)}
                className="cursor-pointer ml-10 hover:scale-125 transition duration-75 ease-in"
              >
                <FcFullTrash className="w-5 h-5" />
              </span>
            </div>
            <div className="mr-auto">
              {showReplies &&
                (replies.length < 0 ? (
                  <span className="mt-3">No replies yet</span>
                ) : (
                  <RepliesComments
                    referenceId={postId}
                    replies={replies}
                    commentAuthor={commentAuthor}
                    fetchComments={fetchComments}
                    fetchReplies={fetchReplies}
                  />
                ))}
              {inputReply && (
                <InputSendReply
                  referenceId={postId}
                  fetchReplies={fetchReplies}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
