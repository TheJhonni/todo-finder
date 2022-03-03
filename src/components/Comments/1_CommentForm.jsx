import React, { useEffect, useState } from "react";
import SpinnerNoBg from "../Spinner/SpinnerNoBg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./2_SingleComment";

export default function CommentForm() {
  const [mount, setMount] = useState(false);
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(null);

  const { currentUser } = useSelector((state) => state.user);

  const fetchData = () => {
    setTimeout(() => {
      setMount(true);
      fetch(`http://localhost:5000/comments`)
        .then((res) => {
          return res.json();
        })
        .then((comments) => {
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

  const deleteComment = (id) => {
    // console.log(id);
    if (window.confirm("Are you sure to delete this Comment?")) {
      setTimeout(() => {
        setMount(true);
        fetch(`http://localhost:5000/comments/${id}`, {
          method: "DELETE",
          headers: { "Content-type": "Application/json" },
        })
          .then((res) => {
            return res.json();
          })
          .then(() => {
            // console.log(replies);
            // store Data in State Data Variable
            // setShowComments(comments);
            setMount(false);
          })
          .catch((err) => {
            console.log(err, " error");
          });
      }, 350);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-800">
      <div className="flex flex-col  w-[60%] h-screen flex-grow border-l border-r border-gray-300">
        <div className="flex-grow h-0 overflow-auto">
          {showComments ? (
            showComments
              .sort(() => Math.random() - Math.random())
              .slice(0, 3)
              .map((comment) => (
                <SingleComment
                  comment={comment}
                  commentAuthor={comment?.commentAuthor || currentUser.email}
                  Link={comment?.Link}
                  commentBody={comment?.commentBody}
                  date={comment?.date}
                  CommentId={comment?.id}
                  replies={comment?.replies}
                  deleteComment={deleteComment}
                />
              ))
          ) : (
            <SpinnerNoBg />
          )}
        </div>
      </div>
    </div>
  );
}
