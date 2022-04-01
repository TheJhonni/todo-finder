import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Posts from "../components/components_2nd_Layer/Posts";
import Gif from "../components/Spinner/Gif";
import { removeFromFavsAction } from "../redux/Favourites/favActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toasts/Toast";

export default function Saved() {
  // const savedId = useParams()

  const [posts, setPosts] = useState(null);

  const [mount, setMount] = useState(false);

  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;

  const notify = () => toast("Deleted from favorites");

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch(`${POST_API}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          // store Data in State Data Variable
          setPosts(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 900);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const savedPosts = useSelector((state) => state.favorites.favoritePosts);
  const savedId = useSelector((state) =>
    state.favorites.favoritePosts.map((favPost) => favPost.id)
  );

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <>
      {mount ? (
        <div className="w-full h-screen img-textLeft">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <Toast />
              <div className="flex justify-center items-center space-x-10">
                <span onClick={() => navigate("/homePage")} className="">
                  <img
                    className="object-cover mr-auto my-auto shadow-sm w-[100px] h-[50px] cursor-pointer"
                    src="logos/logo.png"
                  />
                </span>
                <h2 className="text-4xl my-7 font-extrabold text-center text-gray-200">
                  {savedPosts.length > 0
                    ? `THE NUMBER OF YOUR SAVED POSTS IS : ${savedPosts.length}`
                    : "No posts saved yet"}
                </h2>
              </div>

              <div className="mt-[100px] space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {savedPosts &&
                  savedPosts.map((_p) => (
                    <div key={_p.id} className="flex">
                      <Link to={`/posts/${_p.id}`}>
                        <Posts
                          key={_p.id}
                          id={_p.id}
                          src={_p.img1}
                          title={_p.title}
                        />
                      </Link>
                      <div className="px-2">
                        <button
                          onClick={() => {
                            dispatch(removeFromFavsAction(_p.id), notify());
                          }}
                        >
                          <FaTrash className="cursor-pointer text-red-700" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <Gif />
        </div>
      )}
    </>
  );
}
