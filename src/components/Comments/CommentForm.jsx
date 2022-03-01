import React, { useEffect, useState } from "react";
import SpinnerNoBg from "../Spinner/SpinnerNoBg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";

export default function CommentForm() {
  const [mount, setMount] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();

  const [showComments, setShowComments] = useState(null);

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

  useEffect(() => {
    fetchData(id);
    // sendReply(commentId);
  }, [id]);

  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-800">
      <div className="flex flex-col  w-[60%] h-screen flex-grow border-l border-r border-gray-300">
        <div className="flex-grow h-0 overflow-auto">
          {showComments ? (
            showComments
              .slice(0, 3)
              .map(
                ({ commentAuthor, Link, commentBody, date, id, replies }) => (
                  <SingleComment
                    commentAuthor={commentAuthor}
                    Link={Link}
                    commentBody={commentBody}
                    date={date}
                    CommentId={id}
                    replies={replies}
                  />
                )
              )
          ) : (
            <SpinnerNoBg />
          )}
        </div>
      </div>
    </div>
  );
}
