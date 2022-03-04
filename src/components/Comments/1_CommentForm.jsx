import React, { useEffect, useState } from "react";
import SpinnerNoBg from "../Spinner/SpinnerNoBg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./2_SingleComment";
import { FcFullTrash } from "react-icons/fc";

export default function CommentForm() {
  const [mount, setMount] = useState(false);
  const [showComments, setShowComments] = useState(null);
  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const fetchComments = () => {
    setTimeout(() => {
      setMount(true);
      fetch(`http://localhost:5000/myPosts/${id}?_embed-comments`)
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

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-800">
      <div className="flex flex-col  w-[60%] h-full flex-grow border-l border-r border-gray-300">
        <div className="flex-grow h-0 overflow-auto">
          {showComments ? (
            showComments.map((comment) => (
              <div className="flex">
                <SingleComment
                  key={comment.id}
                  comment={comment}
                  commentAuthor={comment?.commentAuthor || currentUser.email}
                  Link={comment?.Link}
                  commentBody={comment?.commentBody}
                  date={comment?.date}
                  postId={comment?.postId}
                  commentId={comment?.id}
                />
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
