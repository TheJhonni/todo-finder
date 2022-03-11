import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { GrEdit } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";
import Footer from "../components/Footer/Footer";
import CommentForm from "../components/Comments/1_CommentForm";
import InputSendComment from "../components/Comments/4.1_InputSendComment";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import Gif from "../components/Spinner/Gif";
import {
  removeFromFavsAction,
  addToFavsAction,
} from "../redux/Favourites/favActions";

export default function PostScreen() {
  // REDUX PART FOR USER
  const currentUser = useSelector((state) => state.user.currentUser);

  const [mount, setMount] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  // fetch data and set to empty array
  const [post, setPost] = useState([]);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState([]);

  // toggle various inputs show-not show
  const [showComments, setShowComments] = useState(null);
  const [input, setInput] = useState(null);
  const [fullArticle, setFullArticle] = useState(null);

  // post fetch
  const fetchIdData = (id) => {
    // const API = `${process.env.REACT_APP_JSON_API}`;
    setTimeout(() => {
      fetch(`http://localhost:5000/myPosts/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPost(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 1000);
  };

  const fetchLikes = () => {
    fetch(`http://localhost:5000/likes`)
      .then((res) => {
        return res.json();
      })
      .then((likes) => {
        // console.log(likes);
        setLikes(likes);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };
  const fetchDislikes = () => {
    fetch(`http://localhost:5000/dislikes`)
      .then((res) => {
        return res.json();
      })
      .then((dislikes) => {
        // console.log(dislikes);
        setDislikes(dislikes);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };

  const likePost = (id) => {
    fetch(`http://localhost:5000/likes`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        postId: id,
        user: currentUser?.email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newLikes = likes.map((item) => {
          if (item.postId === result.postId) {
            return result;
          } else {
            return item;
          }
        });
        setLikes(newLikes);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };

  const dislikePost = (id) => {
    fetch(`http://localhost:5000/dislikes`, {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify({
        postId: id,
        user: currentUser?.email,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const newDislikes = dislikes.map((item) => {
          if (item._id === result.id) {
            return result;
          } else {
            return item;
          }
        });
        setDislikes(newDislikes);
      })
      .catch((err) => {
        console.log(err, " error");
      });
  };

  const isntLiked = likes.filter((_l) => _l.postId === id).length <= 0;
  const isntDisliked = dislikes.filter((_l) => _l.postId === id).length <= 0;

  const toggleColor =
    likes.filter((_c_u) => _c_u.user === currentUser?.email) && !isntLiked;

  const dispatch = useDispatch();

  // REDUX PART FROR FAVORITES
  const favPost = useSelector((state) => state.favorites.favoritePosts);

  const isAlreadyFav = favPost.some((_post) => _post.id === post.id);

  const toggleSaved = isAlreadyFav ? removeFromFavsAction : addToFavsAction;

  useEffect(() => {
    fetchIdData(id);
    fetchLikes();
    fetchDislikes();
  }, [id]);

  return (
    <>
      {mount ? (
        <>
          <Navbar />
          <div className="img-textLeft">
            <main className="relative container mx-auto bg-[#ffffffd2] px-4">
              <div className="relative mx-4 top-0 pt-[17%] overflow-hidden">
                <img
                  className="absolute inset-0 object-cover object-top w-full h-full filter blur"
                  src={post?.img1}
                  alt=""
                />
              </div>
              <div
                className={
                  "absolute lg:right-[5%] " +
                  (fullArticle ? "top-[7.3%]" : "top-[20%] lg:top-[30%]")
                  // +
                  // (showComments && fullArticle
                  //   ? "top-[8%]"
                  //   : "top-[20%] lg:top-[30%]")
                }
              >
                <div className="flex justify-evenly items-center space-x-1 lg:space-x-5">
                  {likes.includes(currentUser?.email) ? (
                    <MdThumbDown
                      onClick={() => dislikePost(post?.id)}
                      className={
                        "w-[15px] lg:w-[30px] h-10 cursor-pointer hover:scale-125 transition-all duration-75 ease-in " +
                        (isntDisliked ? "" : "text-red-600")
                      }
                    />
                  ) : (
                    <MdThumbUp
                      onClick={() => {
                        likePost(post?.id);
                      }}
                      className={
                        "w-[15px] lg:w-[30px] h-10 cursor-pointer hover:scale-125 transition-all duration-75 ease-in " +
                        (toggleColor && "text-blue-800")
                      }
                    />
                  )}

                  {isAlreadyFav ? (
                    <BsFillHeartFill
                      onClick={() => {
                        dispatch(toggleSaved(post.id));
                      }}
                      className={
                        "w-[15px] text-red-500 lg:w-[30px] h-10 cursor-pointer hover:scale-125 transition-all duration-75 ease-in "
                      }
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={() => {
                        dispatch(toggleSaved(post));
                      }}
                      className={
                        "w-[15px] lg:w-[30px] h-10 cursor-pointer hover:scale-125 transition-all duration-75 ease-in "
                      }
                    />
                  )}

                  <span className="font-semibold">
                    {likes.filter((_l) => _l.postId === id).length} Likes
                  </span>
                </div>
              </div>

              <div className="mt-[-10%] w-1/2 mx-auto">
                <div className="relative pt-[56.25%] overflow-hidden rounded-2xl">
                  <img
                    className="w-full h-full absolute inset-0 object-cover"
                    src={post?.img1}
                    alt=""
                  />
                </div>
              </div>

              <div className="flex justify-evenly items-center">
                <p
                  onClick={() => setShowComments(!showComments)}
                  className="mt-4 cursor-pointer hover:bg-gray-400 rounded-full px-4"
                >
                  {showComments ? "Hide Comments" : "Show Comments"}
                </p>
                {currentUser.email === "jdilmoro@gmail.com" && (
                  <div
                    onClick={() => navigate(`/edit/${post?.id}`)}
                    className="flex space-x-3 items-center cursor-pointer hover:bg-gray-400 rounded-full px-5"
                  >
                    <GrEdit />
                    <p>Edit Post</p>
                  </div>
                )}
              </div>
              {showComments && <CommentForm id={post.id} />}

              <article className="max-w-prose mx-auto py-8">
                <h1 className="text-2xl font-bold mx-auto">{post?.title}</h1>
                <div className="flex justify-between">
                  <h2 className="mt-2 text-sm text-gray-500">
                    <a className="hover:text-blue-700" href={post?.authorLink}>
                      {post?.author}
                    </a>
                    , 28 November 2021
                  </h2>
                </div>
                {post?.p && (
                  <h2 className="mt-2 text-sm text-gray-500">
                    {post?.p}, <br />
                    {post?.link}
                    <a
                      className="hover:text-blue-700 text-xs mt-3"
                      href={post?.link}
                    >
                      CLICK HERE to read the Original Article
                    </a>
                  </h2>
                )}

                <p className="mt-6">
                  {post?.body.slice(1, 500)}
                  <span
                    className={
                      fullArticle ? "opacity-0 ml-[-10px]" : "opacity-1"
                    }
                  >
                    ...
                  </span>
                  <span
                    onClick={() => setFullArticle(!fullArticle)}
                    className="ml-1 underline cursor-pointer"
                  >
                    {!fullArticle ? "Open the full article" : ""}
                  </span>
                  {fullArticle && (
                    <>
                      {post?.body.slice(500)}
                      <span
                        onClick={() => setFullArticle(null)}
                        className="absolute right-[10%] bottom-[84%] ml-5 underline cursor-pointer"
                      >
                        Close the full article
                      </span>
                    </>
                  )}
                </p>

                {currentUser && (
                  <button
                    onClick={() => setInput(!input)}
                    className="ml-2 text-sm font-semibold hover:underline"
                  >
                    Comment here!
                  </button>
                )}

                {input && <InputSendComment id={post.id} />}
              </article>
            </main>

            <Footer />
          </div>
        </>
      ) : (
        <Gif />
      )}
    </>
  );
}
