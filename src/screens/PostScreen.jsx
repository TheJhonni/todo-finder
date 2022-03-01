import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { GrEdit } from "react-icons/gr";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";
import Footer from "../components/Footer/Footer";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import CommentForm from "../components/Comments/CommentForm";

export default function PostScreen() {
  const [mount, setMount] = useState(false);
  let { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [showComments, setShowComments] = useState(null);

  const fetchIdData = (id) => {
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
          setPost(data);
          setMount(false);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    fetchIdData(id);
  }, [id]);

  return (
    <>
      {post ? (
        <div className="img-textLeft">
          <Navbar />

          <main className="relative container mx-auto bg-[#ffffffd2] px-4">
            <div className="relative mx-4 top-0 pt-[17%] overflow-hidden">
              <img
                className="absolute inset-0 object-cover object-top w-full h-full filter blur"
                src={post?.img1}
                alt=""
              />
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

            <div className="flex justify-evenly items-center ">
              <p
                onClick={() => setShowComments(!showComments)}
                className="mt-4 cursor-pointer hover:bg-gray-400 rounded-full px-4"
              >
                {showComments ? "Hide Comments" : "Show Comments"}
              </p>
              <div
                onClick={() => navigate(`/edit/${post?.id}`)}
                className="flex space-x-3 items-center cursor-pointer hover:bg-gray-400 rounded-full px-5"
              >
                <GrEdit />
                <p>Edit Post</p>
              </div>
            </div>
            {showComments && <CommentForm />}
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

              {post?.body[1] ? (
                <>
                  <p className="mt-6">{post?.body[0]}</p>
                  <p className="mt-4">{post?.body[1]}</p>
                  <p className="mt-4">{post?.body[2]}</p>
                  <p className="mt-4">{post?.body[3]}</p>
                  <p className="mt-4">{post?.body[4]}</p>
                  <p className="mt-4">{post?.body[5]}</p>

                  <p className="mt-4">{post?.body[6]}</p>
                  <p className="mt-4">{post?.body[7]}</p>
                  <p className="mt-4">{post?.body[8]}</p>
                  <p className="mt-4">{post?.body[9]}</p>
                  <p className="mt-4">{post?.body[10]}</p>
                </>
              ) : (
                <p className="mt-4">{post?.body}</p>
              )}
            </article>
          </main>

          <Footer />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
