import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../Toasts/Toast";

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

  // declaring all APIs in .ENV
  const API = `${process.env.REACT_APP_API_REPLIES}`;

  const sendReply = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`${API}`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          _ID: referenceId,
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
    <div className="flex justify-center mx-auto items-center mr-auto mt-2">
      <Toast bg={"#1E667C"} />
      <textarea
        type="text"
        rows="1"
        value={replyBody}
        onChange={(e) => setReplyBody(e.target.value)}
        placeholder="reply"
        className="px-4 py-2 w-fit"
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
