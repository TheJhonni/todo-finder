import React, { useEffect, useState } from "react";
import SingleReply from "./4_SingleReply";

export default function RepliesComments({ postId, replies, commentAuthor }) {
  return (
    <>
      {replies.filter((_r) => _r.replyId === postId) ? (
        replies
          .filter((_r) => _r.replyId === postId)
          .reverse()
          .slice(0, 4)
          .map((reply) => (
            <SingleReply
              key={reply?.id}
              postId={reply?.replyId}
              commentId={reply?.replyId}
              commentAuthor={commentAuthor}
              replyDate={reply?.replyDate}
              replyBody={reply?.replyBody}
            />
          ))
      ) : (
        <span className="mt-3 text-black text-xl">No comment yet</span>
      )}
    </>
  );
}
