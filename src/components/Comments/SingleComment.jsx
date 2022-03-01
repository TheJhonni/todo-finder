import React, { useState } from "react";
import RepliesComments from "./RepliesComments";
import InputSendReply from "./InputSendReply";

export default function SingleComment({
  commentAuthor,
  Link,
  commentBody,
  date,
  commentId,
  replies,
}) {
  const [input, setInput] = useState(null);
  const [reply, setReply] = useState(null);

  return (
    <div key={commentId} className="flex w-full p-8 border-b border-gray-300">
      <img
        src={Link}
        className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"
      />
      <div className="flex flex-col flex-grow ml-4">
        <div className="flex items-center">
          <span className="font-semibold">{commentAuthor}</span>
          <span className="ml-1">@ {commentAuthor}</span>

          <span className="text-sm ml-[300px]">at: {date}</span>
        </div>
        <p className="mt-1">
          {commentBody}
          <a className="underline" href="#">
            #hashtag
          </a>
        </p>
        <div className="flex mt-2">
          <button className="text-sm font-semibold hover:underline">
            Like
          </button>
          <button
            onClick={() => setInput(!input)}
            className="ml-2 text-sm font-semibold hover:underline"
          >
            Reply
          </button>
          <button
            onClick={() => setReply(!reply)}
            className="ml-2 text-sm font-semibold hover:underline"
          >
            {reply ? "Hide replies" : "See replies"}
          </button>
        </div>
        {input && (
          <InputSendReply
            replies={replies}
            commentAuthor={commentAuthor}
            commentId={commentId}
          />
        )}
        {reply && (
          <RepliesComments
            replies={replies}
            commentAuthor={commentAuthor}
            commentId={commentId}
          />
        )}
      </div>
    </div>
  );
}
