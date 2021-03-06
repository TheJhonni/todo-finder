import React, { useEffect, useState } from "react";
import SingleReply from "./4_SingleReply";

export default function RepliesComments({
  referenceId,
  replies,
  commentAuthor,
  fetchComments,
  fetchReplies,
}) {
  return (
    <>
      {replies.length > 0 ? (
        replies
          .filter((_r) => _r._ID === referenceId)
          .reverse()
          .map((reply) => (
            <SingleReply
              key={reply?.id}
              repId={reply.id}
              reply={reply}
              replies={replies}
              commentAuthor={commentAuthor}
              replyDate={reply?.replyDate}
              replyBody={reply?.replyBody}
              fetchComments={fetchComments}
              fetchReplies={fetchReplies}
            />
          ))
      ) : (
        <span className="mt-3 text-black text-xl">No reply yet</span>
      )}
    </>
  );
}
