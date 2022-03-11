import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Gif from "../Spinner/Gif";

export default function EditPost() {
  const [mount, setMount] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const { author, title, body, p, img1 } = post ?? {};

  const fetchData = (id) => {
    // const API = `${process.env.REACT_APP_JSON_API}`;
    setTimeout(() => {
      setMount(true);
      fetch(`http://localhost:5000/myPosts/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPost(data);
          setMount(false);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  const onChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  function editedPost(id) {
    if (window.confirm("Are you sure to edit this post?")) {
      fetch(`http://localhost:5000/myPosts/${id}`, {
        method: "PUT",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          ...post,
        }),
      })
        .then((resp) => {
          if (resp.status === 200) {
            alert("Post edited succesfully");
            setMount(false);
            navigate(`/posts`);
          }
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }
  }

  const deletePost = (id) => {
    if (window.confirm("Are you sure to delete this post?")) {
      setMount(true);
      fetch(`http://localhost:5000/myPosts/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "Application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log(res);
            alert("Post deleted succesfully");
            setMount(false);
            navigate("/posts");
          }
        })

        .catch((err) => {
          console.log(err, " error");
        });
    }
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    <>
      {post ? (
        <div className="flex flex-col justify-center w-full h-full px-4 border-gray-300 text-gray-300">
          <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
            <h1 className="text-xl font-semibold">EDIT POST</h1>
            <p className="flex items-center h-8 px-2 text-sm bg-gray-900 rounded-sm">
              ADMIN
            </p>
          </div>
          <div className="flex w-full p-8 border-b-4 border-gray-300">
            <img
              src={img1}
              className="flex-shrink-0 w-12 h-12 mr-2 bg-gray-400 rounded-full"
            />
            <div className="flex flex-col justify-center space-x-2 space-y-2 w-full">
              <p>Author:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name="author"
                id=""
                type="text"
                rows="1"
                value={author}
                onChange={onChange}
              />
              <p>Title:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name="title"
                id=""
                type="text"
                rows="1"
                value={title}
                onChange={onChange}
              />
              <p>Change img Url:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name="img1"
                id=""
                type="text"
                rows="2"
                value={img1}
                onChange={onChange}
              />
              <p>Paragraph:</p>
              <textarea
                className="p-3 bg-transparent border border-gray-500 rounded-sm"
                name="p"
                id=""
                type="text"
                rows="1"
                value={p}
                onChange={onChange}
              />
              <div className="flex flex-col flex-grow ml-4">
                <p>Post:</p>
                <textarea
                  className="p-3 bg-transparent border border-gray-500 rounded-sm h-[300px]"
                  name="body"
                  id=""
                  type="text"
                  rows="3"
                  value={body}
                  onChange={onChange}
                />
              </div>
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => editedPost(post.id)}
                  className="flex items-center h-8 px-3 text-xs rounded-sm bg-gray-900 hover:bg-gray-400"
                >
                  Edit Post
                </button>
                <button
                  onClick={() => deletePost(post.id)}
                  className="flex items-center h-8 px-3 text-xs rounded-sm bg-red-700 hover:bg-gray-400"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}

// cut div 1
{
  /* <div className="flex flex-col w-64 py-4 pr-3">
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Home
              </a>
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Discover
              </a>
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Notifications
              </a>
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Inbox
              </a>
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Saved 
              </a>
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Groups
              </a>
              <a
                className="px-3 py-2 mt-2 text-lg font-medium rounded-sm hover:bg-gray-300"
                href="#"
              >
                Profile
              </a>
              <a
                className="flex px-3 py-2 mt-2 text-lg rounded-sm font-medium hover:bg-gray-200"
                href="#"
              >
                <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col ml-2">
                  <span className="mt-1 text-sm font-semibold leading-none">
                    Username
                  </span>
                  <span className="mt-1 text-xs leading-none">@username</span>
                </div>
              </a>
            </div> */
}

// cut div 2

//   <div className="flex flex-col flex-shrink-0 w-1/4 py-4 pl-4">
//     <input
//       className="flex items-center h-8 px-2 border border-gray-500 rounded-sm"
//       type="search"
//       Placeholder="Search…"
//     />
//     <div>
//       <h3 className="mt-6 font-semibold">Trending</h3>
//       <div className="flex w-full py-4 border-b border-gray-300">
//         <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
//         <div className="flex flex-col flex-grow ml-2">
//           <div className="flex text-sm">
//             <span className="font-semibold">Username</span>
//             <span className="ml-1">@username</span>
//           </div>
//           <p className="mt-1 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore
//             magna aliqua.{" "}
//             <a className="underline" href="#">
//               #hashtag
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="flex w-full py-4 border-b border-gray-300">
//         <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
//         <div className="flex flex-col flex-grow ml-2">
//           <div className="flex text-sm">
//             <span className="font-semibold">Username</span>
//             <span className="ml-1">@username</span>
//           </div>
//           <p className="mt-1 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore
//             magna aliqua.{" "}
//             <a className="underline" href="#">
//               #hashtag
//             </a>
//           </p>
//         </div>
//       </div>
//       <div className="flex w-full py-4 border-b border-gray-300">
//         <span className="flex-shrink-0 w-10 h-10 bg-gray-400 rounded-full"></span>
//         <div className="flex flex-col flex-grow ml-2">
//           <div className="flex text-sm">
//             <span className="font-semibold">Username</span>
//             <span className="ml-1">@username</span>
//           </div>
//           <p className="mt-1 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore
//             magna aliqua.{" "}
//             <a className="underline" href="#">
//               #hashtag
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>;

// CUT DIV COMMENT LIKE SHARE ETC

// <div className="flex w-full p-8 border-b border-gray-300">
//   <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
//   <div className="flex flex-col flex-grow ml-4">
//     <div className="flex">
//       <span className="font-semibold">Username</span>
//       <span className="ml-1">@username</span>
//       <span className="ml-auto text-sm">Just now</span>
//     </div>
//     <p className="mt-1">
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//       tempor incididunt ut labore et dolore magna aliqua.{" "}
//       <a className="underline" href="#">
//         #hashtag
//       </a>
//     </p>
//     <div className="flex mt-2">
//       <button className="text-sm font-semibold">Like</button>
//       <button className="ml-2 text-sm font-semibold">Reply</button>
//       <button className="ml-2 text-sm font-semibold">Share</button>
//     </div>
//   </div>
// </div>
