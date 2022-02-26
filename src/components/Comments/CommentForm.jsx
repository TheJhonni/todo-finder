import React, { useEffect, useState } from "react";
import Spinner from "../Spinner/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CommentForm() {
  const [mount, setMount] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();
  //   const navigate = useNavigate();

  const [editPost, setEditPost] = useState(null);

  const fetchData = () => {
    // const API = `${process.env.REACT_APP_JSON_API}`;
    setTimeout(() => {
      setMount(true);
      fetch(`http://localhost:5000/myPosts/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // store Data in State Data Variable
          setEditPost(data);
          setMount(false);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  return (
    // Component Start
    <>
      {editPost ? (
        <div className="flex justify-center w-screen h-screen px-4 text-gray-300">
          <div className="flex w-full max-w-screen-lg">
            {/* cut div */}
            <div className="flex flex-col flex-grow border-l border-r border-gray-300">
              <div className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-gray-300">
                <h1 className="text-xl font-semibold">EDIT POST</h1>
                <button className="flex items-center h-8 px-2 text-sm bg-gray-900 rounded-sm hover:bg-gray-400">
                  New post
                </button>
              </div>
              <div className="flex-grow h-0 overflow-auto">
                <div className="flex w-full p-8 border-b-4 border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <textarea
                      className="p-3 bg-transparent border border-gray-500 rounded-sm"
                      name=""
                      id=""
                      rows="3"
                      placeholder="What's happening?"
                    ></textarea>
                    <div className="flex justify-between mt-2">
                      <button className="flex items-center h-8 px-3 text-xs rounded-sm hover:bg-gray-700">
                        Attach
                      </button>
                      <button className="flex items-center h-8 px-3 text-xs rounded-sm bg-gray-900 hover:bg-gray-400">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
                      <span className="font-semibold text-gray-500">Image</span>
                    </div>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
                      <span className="font-semibold text-gray-500">Image</span>
                    </div>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex w-full p-8 border-b border-gray-300">
                  <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                  <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                      <span className="font-semibold">Username</span>
                      <span className="ml-1">@username</span>
                      <span className="ml-auto text-sm">Just now</span>
                    </div>
                    <p className="mt-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                      <a className="underline" href="#">
                        #hashtag
                      </a>
                    </p>
                    <div className="flex items-center justify-center h-64 mt-2 bg-gray-200">
                      <span className="font-semibold text-gray-500">Image</span>
                    </div>
                    <div className="flex mt-2">
                      <button className="text-sm font-semibold">Like</button>
                      <button className="ml-2 text-sm font-semibold">
                        Reply
                      </button>
                      <button className="ml-2 text-sm font-semibold">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
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
                Saved Posts
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
