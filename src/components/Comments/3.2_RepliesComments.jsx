import React, { useEffect, useState } from "react";
import SingleReply from "./4_SingleReply";

export default function RepliesComments({
  referenceId,
  replies,
  commentAuthor,
}) {
  return (
    <>
      {replies ? (
        replies
          .filter((_r) => _r._ID === referenceId)
          .reverse()
          .map((reply) => (
            <SingleReply
              key={reply?.id}
              id={reply.id}
              reply={reply}
              commentId={reply?._ID}
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
