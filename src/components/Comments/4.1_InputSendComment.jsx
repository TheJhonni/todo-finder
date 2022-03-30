import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function InputSendComment() {
  const [commentBody, setCommentBody] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();

  const sendComment = async (e) => {
    e.preventDefault();
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }
    try {
      const resp = await fetch(`http://localhost:5000/comments`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          id: Math.floor(Math.random() * (1400 - 1200) + 1200).toLocaleString(),
          postId: id,
          commentId: Math.floor(
            Math.random() * (90000 - 70000) + 70000
          ).toLocaleString(),
          commentAuthor: currentUser?.email || currentUser?.name,
          commentBody,
          date: randomDate(new Date(2020, 0, 1), new Date()).toLocaleString(),
        }),
      });
      if (resp.ok) {
        // setMount(true);
        alert("replied");
        console.log(resp);
        setCommentBody("");
        // navigate(`/posts/${id}`);
      }
    } catch (err) {
      console.log(err, " error");
    }
  };

  useEffect(() => {}, [currentUser, id]);

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
