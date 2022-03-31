export default function InputSendComment({
  commentBody,
  setCommentBody,
  sendComment,
}) {
  return (
    <div className="flex justify-center mx-auto items-center mt-2">
      <textarea
        type="text"
        rows="1"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        placeholder="place your comment here"
        className="px-4 py-2 w-[90%] rounded"
      />
      <p
        onClick={sendComment}
        className="mr-auto px-2 py-2 bg-white cursor-pointer text-gray-700 hover:bg-gray-400"
      >
        send
      </p>
    </div>
  );
}
