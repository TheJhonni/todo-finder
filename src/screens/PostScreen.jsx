import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GrEdit } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
import CommentForm from "../components/Comments/1_CommentForm";
import InputSendComment from "../components/Comments/4.1_InputSendComment";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import Gif from "../components/Spinner/Gif";
import {
  removeFromFavsAction,
  addToFavsAction,
} from "../redux/Favourites/favActions";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon } from "react-share";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toasts/Toast";
import Navbar from "../components/Navbar/Navbar";

export default function PostScreen() {
  // REDUX PART FOR USER
  const { currentUser } = useSelector((state) => state.user);
  let { id } = useParams();

  // not mounted? => spinner
  const [mount, setMount] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // fetch data and set to empty array
  const [post, setPost] = useState([]);

  // like section
  const [liked, setLiked] = useState(false);
  const [howManyLikes, setHowManyLikes] = useState(null);

  // dislike section
  const [disliked, setDisliked] = useState(false);
  const [howManyDislikes, setHowManyDislikes] = useState(null);

  // toggle various inputs show-not show
  const [showComments, setShowComments] = useState(null);
  const [input, setInput] = useState(null);
  const [fullArticle, setFullArticle] = useState(null);

  const [commentBody, setCommentBody] = useState("");

  const [replies, setReplies] = useState([]);
  // post fetch
  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;
  const fetchIdData = async (id) => {
    try {
      await fetch(`${POST_API}/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPost(data);
          // LIKES ARRAY CHECK IF ALREADY LIKED!
          data?.likes.includes(currentUser?.email) && setLiked(true);
          setHowManyLikes(data?.likes.length);
          // DISLIKE ARRAY CHECK IF ALREADY DISLIKED!
          data?.dislikes.includes(currentUser?.email) && setDisliked(true);
          setHowManyDislikes(data?.dislikes.length);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  // onClick like btn

  const changeLikeBtn = async () => {
    if (post.likes.includes(`${currentUser?.email}`)) {
      try {
        await fetch(`${POST_API}/${id}`, {
          method: "PUT",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            ...post,
            ...post[
              post.likes.splice(post.likes.indexOf(`${currentUser?.email}`), 1)
            ],
          }),

          // remove like if already present
        })
          .then((resp) => {
            if (resp.status === 200) {
              console.log("like tolto");
              setHowManyLikes(howManyLikes - 1);
              setLiked(false);
            }
          })
          .catch((err) => {
            console.log(err, " error");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await fetch(`${POST_API}/${id}`, {
          method: "PUT",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            ...post,
            ...post[post.likes.push(`${currentUser?.email}`)],

            // if not present, adding like to array
          }),
        })
          .then((resp) => {
            if (resp.status === 200) {
              console.log("likkato ora");
              setHowManyLikes(howManyLikes + 1);
              setLiked(true);
            }
          })
          .catch((err) => {
            console.log(err, " error");
          });
      } catch (error) {
        console.log(error);
      }
      if (post.dislikes.includes(`${currentUser?.email}`)) {
        try {
          await fetch(`${POST_API}/${id}`, {
            method: "PUT",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify({
              ...post,
              ...post[
                post.dislikes.splice(
                  post.dislikes.indexOf(`${currentUser?.email}`),
                  1
                )
              ],
            }),
            // if wasn't present, we already added like, now we check if there was already a dislike.
            // in that case, we add like and remove also the previous dislike
          })
            .then((resp) => {
              if (resp.status === 200) {
                console.log("dislike tolto ora");
                setDisliked(false);
                setHowManyDislikes(howManyDislikes - 1);
              }
            })
            .catch((err) => {
              console.log(err, " error");
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  // onClick dislike btn
  const changeDislikeBtn = async () => {
    if (post.dislikes.includes(`${currentUser?.email}`)) {
      try {
        await fetch(`${POST_API}/${id}`, {
          method: "PUT",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            ...post,
            ...post[
              post.dislikes.splice(
                post.dislikes.indexOf(`${currentUser?.email}`),
                1
              )
            ],
            // remove dislike if already present
          }),
        })
          .then((resp) => {
            if (resp.status === 200) {
              console.log("dislike tolto");
              console.log(post.dislikes);
              setHowManyDislikes(howManyDislikes - 1);
              setDisliked(false);
            }
          })
          .catch((err) => {
            console.log(err, " error");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await fetch(`${POST_API}/${id}`, {
          method: "PUT",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            ...post,
            ...post[post.dislikes.push(`${currentUser?.email}`)],
          }),
          // if not present, adding dislike to array
        })
          // setDisliked(false);
          .then((resp) => {
            if (resp.status === 200) {
              console.log("dislikato ora!");
              // const newPost = { ...post };
              // setPost(newPost);
              setHowManyDislikes(howManyDislikes + 1);
              setDisliked(true);
            }
          })
          .catch((err) => {
            console.log(err, " error");
          });
      } catch (error) {
        console.log(error);
      }
      if (post.likes.includes(`${currentUser?.email}`)) {
        try {
          await fetch(`${POST_API}/${id}`, {
            method: "PUT",
            headers: { "Content-type": "Application/json" },
            body: JSON.stringify({
              ...post,
              ...post[
                post.likes.splice(
                  post.likes.indexOf(`${currentUser?.email}`),
                  1
                )
              ],
            }),
            // if wasn't present, we already added dislike, now we check if there was already a like.
            // in that case, we add dislike and remove also the previous like
          })
            .then((resp) => {
              if (resp.status === 200) {
                console.log("like tolto ora");
                setLiked(false);
                setHowManyLikes(howManyLikes - 1);
              }
            })
            .catch((err) => {
              console.log(err, " error");
            });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const notify = () => toast("Commented");

  const [c, setC] = useState(null);
  const [input2, setInput2] = useState(null);

  // declaring all APIs in .ENV
  const COMMENTS_API = `${process.env.REACT_APP_API_COMMENTS}`;
  const fetchComments = async (id) => {
    try {
      await fetch(`${COMMENTS_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setC(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const REPLIES_API = `${process.env.REACT_APP_API_REPLIES}`;
  const fetchReplies = () => {
    setTimeout(() => {
      fetch(`${REPLIES_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setReplies(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  const sendComment = async (e) => {
    e.preventDefault();
    function randomDate(start, end) {
      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
    }
    try {
      const resp = await fetch(`${COMMENTS_API}`, {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify({
          id: Math.floor(Math.random() * 1000).toLocaleString(),
          postId: id,
          commentId: Math.floor(Math.random() * 2000).toLocaleString(),
          commentAuthor: currentUser?.email || currentUser?.name,
          commentBody,
          date: randomDate(new Date(2020, 0, 1), new Date()).toLocaleString(),
        }),
      });
      if (resp.ok) {
        notify();
        console.log(resp);
        setCommentBody("");
        fetchComments();
        fetchReplies();
      }
    } catch (err) {
      console.log(err, " error");
    }
  };

  // REDUX PART FROR FAVORITES
  const favPost = useSelector((state) => state.favorites.favoritePosts);

  const isAlreadyFav = favPost.some((_post) => _post.id === post.id);

  const toggleSaved = isAlreadyFav ? removeFromFavsAction : addToFavsAction;
  useEffect(() => {
    setTimeout(() => {
      fetchIdData(id);
      fetchComments(id);
    }, 800);
  }, [id]);

  return (
    <div className="img-textLeft h-full">
      {mount ? (
        <>
          <Navbar />
          <main className="relative container mx-auto bg-[#ffffffd2] px-4">
            <div className="relative mx-4 top-0 pt-[17%] overflow-hidden">
              <Toast />
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
              }
            >
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-evenly items-center space-x-1 lg:space-x-5">
                  <div className="flex space-x-3 items-baseline">
                    <MdThumbUp
                      onClick={changeLikeBtn}
                      className={
                        "w-[15px] lg:w-[30px] h-10 cursor-pointer hover:scale-125 transition-all duration-75 ease-in hover:text-blue-500 " +
                        (liked && "text-blue-500")
                      }
                    />
                    <span className="hidden text-xs md:block md:text-lg md:font-semibold">
                      {howManyLikes}
                    </span>
                    <MdThumbDown
                      onClick={changeDislikeBtn}
                      className={
                        "w-[15px] lg:w-[30px] h-10 cursor-pointer hover:scale-125 transition-all duration-75 ease-in hover:text-red-500 " +
                        (disliked && "text-red-500")
                      }
                    />
                    <span className="hidden text-xs md:block md:text-lg md:font-semibold">
                      {howManyDislikes}
                    </span>
                  </div>
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
                </div>
                <div className="mt-5 hidden md:flex justify-evenly items-center space-x-1 lg:space-x-5">
                  <FacebookShareButton
                    url="https://www.atascientific.com.au/17-science-blogs-everyone-should-follow/"
                    quote="Hey subscribe here!"
                    hashtag="#react"
                  >
                    <FacebookIcon round={true}></FacebookIcon>
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url="https://www.atascientific.com.au/17-science-blogs-everyone-should-follow/"
                    title="Hey subscribe here!"
                  >
                    <WhatsappIcon round={true}></WhatsappIcon>
                  </WhatsappShareButton>
                </div>
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
                {post?.body.slice(0, 500)}
                <span
                  className={fullArticle ? "opacity-0 ml-[-10px]" : "opacity-1"}
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

              <div className="flex justify-between items-center mt-2">
                {!showComments && (
                  <div className="flex-col justify-self-start">
                    {currentUser && (
                      <button
                        onClick={() => setInput(!input)}
                        className="ml-2 text-sm font-semibold hover:underline"
                      >
                        Comment here!
                      </button>
                    )}

                    {input && (
                      <InputSendComment
                        commentBody={commentBody}
                        setCommentBody={setCommentBody}
                        sendComment={sendComment}
                      />
                    )}
                  </div>
                )}
                <div className="px-5 flex-col justify-self-end">
                  <p
                    onClick={() => setShowComments(!showComments)}
                    className={
                      "cursor-pointer max-w-[200px] hover:bg-gray-400 rounded-full px-4 " +
                      (input ? "mb-11" : "")
                    }
                  >
                    {showComments ? "Hide Comments" : "Show Comments"}
                  </p>
                  {showComments && (
                    <CommentForm
                      c={c}
                      input2={input2}
                      setInput2={setInput2}
                      commentBody={commentBody}
                      setCommentBody={setCommentBody}
                      sendComment={sendComment}
                      fetchComments={fetchComments}
                      replies={replies}
                      fetchReplies={fetchReplies}
                    />
                  )}
                </div>
              </div>
            </article>
          </main>

          <Footer />
        </>
      ) : (
        <div className="h-full">
          <Gif />
        </div>
      )}
    </div>
  );
}
