import React, { useEffect, useState } from "react";
import SpinnerNoBg from "../Spinner/SpinnerNoBg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./2_SingleComment";
import { FcFullTrash } from "react-icons/fc";

export default function CommentForm() {
  const [c, setC] = useState(null);
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const fetchComments = () => {
    setTimeout(() => {
      fetch(`http://localhost:5000/comments`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          // store Data in State Data Variable
          setC(data);
          // setCommentId(comments.commentId);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 300);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-800 ">
      <div className="flex flex-col h-full flex-grow border-l border-r border-gray-300">
        <div className="flex-grow h-0 overflow-auto">
          {c &&
            c
              .filter((_c) => _c.postId === id)
              .reverse()
              .map((comment) => (
                <div key={comment.id} className="flex">
                  <SingleComment
                    key={comment.id}
                    commentAuthor={comment.commentAuthor || "Unknown-Anonymous"}
                    Link={comment?.Link}
                    commentBody={comment?.commentBody}
                    date={comment?.date}
                    postId={comment?.postId}
                    referenceId={comment?.id}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
