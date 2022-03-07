import React, { useEffect, useState } from "react";
import SpinnerNoBg from "../Spinner/SpinnerNoBg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./2_SingleComment";
import { FcFullTrash } from "react-icons/fc";

export default function CommentForm() {
  const [c, setC] = useState(null);
  const { id } = useParams();
  // console.log(id);
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

  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure to delete this Comment?")) {
      // setNewShowComments(
      //   showComments.filter((commentToGo) => commentId !== commentToGo)
      // );
    }
  };
  // fetch(`http://localhost:5000/myPosts/${id}?_embed-comments`, {
  //   method: "PUT",
  //   headers: { "Content-type": "Application/json" },
  // })
  //   .then((res) => {
  //     if (res.status === 200) {
  //       console.log(res);
  //       setShowComments(
  //         // ...showComments,
  //         showComments.filter((filterId) => filterId === commentId)
  //       );
  //       console.log(res);
  //       alert("Comment deleted succesfully");
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err, " error");
  //   });

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex justify-center w-screen h-screen px-4 text-gray-800">
      <div className="flex flex-col  w-[60%] h-full flex-grow border-l border-r border-gray-300">
        <div className="flex-grow h-0 overflow-auto">
          {c &&
            c
              .filter((_c) => _c.postId === id)
              .reverse()
              .map((_c) => (
                <div className="flex">
                  <SingleComment
                    id={id}
                    key={_c.id}
                    _c={_c}
                    commentAuthor={_c.commentAuthor || "Unknown-Anonymous"}
                    Link={_c?.Link}
                    commentBody={_c?.commentBody}
                    date={_c?.date}
                    postId={_c?.postId}
                    referenceId={_c?.id}
                    deleteComment={deleteComment}
                  />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
