import React, { useEffect, useState } from "react";
import SingleReply from "./4_SingleReply";

export default function RepliesComments({ replies, commentAuthor }) {
  return (
    <>
      {replies ? (
        replies
          .slice(0, 4)
          .map((reply) => (
            <SingleReply
              id={reply.id}
              commentAuthor={commentAuthor}
              replyDate={reply.replyDate}
              replyBody={reply.replyBody}
            />
          ))
      ) : (
        <span className="mt-3">No comment yet</span>
      )}
    </>
  );
}
