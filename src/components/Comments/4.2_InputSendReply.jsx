import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InputSendReply({ referenceId, fetchReplies }) {
  const [replyBody, setReplyBody] = useState("");
  const { currentUser } = useSelector((state) => state.user);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const today = new Date();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const notify = () => toast("Replied");

  const sendReply = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost:5000/replies`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          _ID: referenceId,
          id: Math.floor(
            Math.random() * (90000 - 70000) + 70000
          ).toLocaleString(),
          replyAuthor: currentUser?.email || currentUser?.name,
          replyBody,
          replyDate: date + " at:" + time,
        }),
      });
      if (resp.ok) {
        notify();
        console.log(resp);
        setReplyBody("");
        fetchReplies();
      }
    } catch (err) {
      console.log(err, " error");
    }
  };

  useEffect(() => {}, [currentUser]);

  return (
    <div className="flex justify-center mx-auto items-center mt-2">
      <textarea
        type="text"
        rows="1"
        value={replyBody}
        onChange={(e) => setReplyBody(e.target.value)}
        placeholder="reply"
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
