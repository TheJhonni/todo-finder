import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InputSendReply({ replies, commentAuthor }) {
  const [replyBody, setReplyBody] = useState("");

  const { id } = useParams();

  const sendReply = async (e) => {
    e.preventDefault();
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }
    try {
      const resp = await fetch(
        `http://localhost:5000/myPosts/${id}/?comments?/replies`,
        {
          method: "POST",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            replyBody,
            replyDate: randomDate(
              new Date(2020, 0, 1),
              new Date()
            ).toLocaleString(),
          }),
        }
      );
      if (resp.ok) {
        // setMount(true);
        alert("replied");
        console.log(resp);
        setReplyBody("");
        // navigate(`/posts/${id}`);
      }
    } catch (err) {
      console.log(err, " error");
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex justify-start items-center mt-2">
      <textarea
        type="text"
        rows="1"
        value={replyBody}
        onChange={(e) => setReplyBody(e.target.value)}
        placeholder="place your comment here"
        className="px-4 py-2 w-[40%]"
      />
      <p
        onClick={sendReply}
        className="mr-auto px-2 py-2 bg-white cursor-pointer text-gray-700 hover:bg-gray-400"
      >
        send
      </p>
    </div>
  );
}
