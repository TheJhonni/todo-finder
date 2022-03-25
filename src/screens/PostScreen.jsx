import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
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

export default function PostScreen() {
  // REDUX PART FOR USER
  const { currentUser } = useSelector((state) => state.user);

  // not mounted? => spinner
  const [mount, setMount] = useState(false);

  let { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // fetch data and set to empty array
  const [post, setPost] = useState([]);

  // like section
  const [liked, setLiked] = useState(false);
  const [howManyLikes, setHowManyLikes] = useState(84);

  // dislike section
  const [disliked, setDisliked] = useState(false);
  const [howManyDislikes, setHowManyDislikes] = useState(5);

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
          // LIKES ARRAY CHECK IF ALREADY LIKED!
          data?.likes.includes(currentUser?.email) && setLiked(true);
          // DISLIKE ARRAY CHECK IF ALREADY DISLIKED!
          data?.dislikes.includes(currentUser?.email) && setDisliked(true);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 1000);
  };

  // onClick like btn

  const changeLikeBtn = () => {
    if (post.likes.includes(`${currentUser?.email}`)) {
      fetch(`http://localhost:5000/myPosts/${id}`, {
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
    } else {
      fetch(`http://localhost:5000/myPosts/${id}`, {
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
      if (post.dislikes.includes(`${currentUser?.email}`)) {
        fetch(`http://localhost:5000/myPosts/${id}`, {
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
      }
    }
  };

  // onClick dislike btn
  const changeDislikeBtn = () => {
    if (post.dislikes.includes(`${currentUser?.email}`)) {
      fetch(`http://localhost:5000/myPosts/${id}`, {
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
    } else {
      fetch(`http://localhost:5000/myPosts/${id}`, {
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
      if (post.likes.includes(`${currentUser?.email}`)) {
        fetch(`http://localhost:5000/myPosts/${id}`, {
          method: "PUT",
          headers: { "Content-type": "Application/json" },
          body: JSON.stringify({
            ...post,
            ...post[
              post.likes.splice(post.likes.indexOf(`${currentUser?.email}`), 1)
            ],
          }),
          // if wasn't present, we already added dislike, now we check if there was already a like.
          // in that case, we add dislike and remove also the previous like
        })
          .then((resp) => {
            if (resp.status === 200) {
              console.log("like tolto ora");
              // const newPost = { ...post };
              // setPost(newPost);
              setLiked(false);
              setHowManyLikes(howManyLikes - 1);
            }
          })
          .catch((err) => {
            console.log(err, " error");
          });
      }
    }
  };

  // REDUX PART FROR FAVORITES
  const favPost = useSelector((state) => state.favorites.favoritePosts);

  const isAlreadyFav = favPost.some((_post) => _post.id === post.id);

  const toggleSaved = isAlreadyFav ? removeFromFavsAction : addToFavsAction;
  useEffect(() => {
    fetchIdData(id);
  }, [id]);

  return (
    <>
      {mount ? (
        <>
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
                  <div className="mt-5 flex justify-evenly items-center space-x-1 lg:space-x-5">
                    <FacebookShareButton
                      url={`/posts/${post.id}`}
                      quote="Hey subscribe here!"
                      hashtag="#react"
                    >
                      <FacebookIcon
                        logoFillColor="white"
                        round={true}
                      ></FacebookIcon>
                    </FacebookShareButton>
                    <WhatsappShareButton
                      url={`/posts/${post.id}`}
                      title="Hey subscribe here!"
                    >
                      <WhatsappIcon
                        logoFillColor="white"
                        round={true}
                      ></WhatsappIcon>
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
