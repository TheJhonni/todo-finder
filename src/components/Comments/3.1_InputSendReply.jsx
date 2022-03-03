import React, { useEffect, useState } from "react";

export default function InputSendReply() {
  const [commentBody, setCommentBody] = useState("");

  const sendReply = async (e) => {
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

  return (
    <div className="flex justify-center mx-auto items-center mt-2">
      <textarea
        type="text"
        rows="1"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
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
