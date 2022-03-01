import React, { useEffect, useState } from "react";
import SpinnerNoBg from "../Spinner/SpinnerNoBg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RepliesComments from "./RepliesComments";

export default function CommentForm() {
  const [mount, setMount] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();
  let { commentId } = useParams();
  const navigate = useNavigate();

  const [showComments, setShowComments] = useState(null);
  // const [reply, setReply] = useState(null);
  const [replyBody, setReplyBody] = useState("");

  const fetchData = (id) => {
    // const API = `${process.env.REACT_APP_JSON_API}`;
    setTimeout(() => {
      setMount(true);
      fetch(`http://localhost:5000/myPosts/${id}`)
        .then((res) => {
          return res.json();
        })
        .then(({ comments }) => {
          console.log(comments);
          // store Data in State Data Variable
          setShowComments(comments);
          setMount(false);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  const sendReply = async (e, id, commentId) => {
    e.preventDefault();
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }
    try {
      const resp = await fetch(`http://localhost:5000/myPosts/${id}/comments`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          replyBody,
          replyId: Math.floor(
            Math.random() * (999 - 200) + 200
          ).toLocaleString(),
          replyDate: randomDate(
            new Date(2020, 0, 1),
            new Date()
          ).toLocaleString(),
        }),
      });
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

  useEffect(() => {
    fetchData(id);
    sendReply(commentId);
  }, [id, commentId]);

  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-800">
      <div className="flex flex-col  w-[60%] h-screen flex-grow border-l border-r border-gray-300">
        <div className="flex-grow h-0 overflow-auto">
          {showComments ? (
            showComments
              .slice(0, 3)
              .map(({ commentAuthor, Link, commentBody, date, commentId }) => (
                <div
                  key={commentId}
                  className="flex w-full p-8 border-b border-gray-300"
                >
                  <img
                    src={Link}
                    className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"
                  />
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex items-center">
                      <span className="font-semibold">{commentAuthor}</span>
                      <span className="ml-1">@ {commentAuthor}</span>

                      <span className="text-sm ml-[300px]">at: {date}</span>
                    </div>
                    <p className="mt-1">
                      {commentBody}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold hover:underline">
                        Like
                      </button>
                      <button
                        // onClick={() => setReply(!reply)}
                        className="ml-2 text-sm font-semibold hover:underline"
                      >
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold hover:underline">
                        Share
                      </button>
                    </div>
                    <RepliesComments />
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
                  </div>
                </div>
              ))
          ) : (
            <SpinnerNoBg />
          )}
        </div>
      </div>
    </div>
  );
}
