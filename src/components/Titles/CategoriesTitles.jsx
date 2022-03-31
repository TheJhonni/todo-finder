import { Link, useParams } from "react-router-dom";
import Posts from "../components_2nd_Layer/Posts";
import Medusa from "../../assets/Medusa.gif";
import biancoGif from "../../assets/biancoGif.gif";
import shuttle from "../../assets/shuttle.gif";
import Navbar from "../Navbar/Navbar";

export default function CategoriesTitles({ posts }) {
  const { category } = useParams();

  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center mx-auto py-4">
        <img
          className="w-[300px] md:w-[500px] md:h-[500px] z-[999] mx-auto mt-[-10]"
          src={
            (category === "sea" && Medusa) ||
            (category === "eye" && biancoGif) ||
            (category === "space" && shuttle)
          }
          alt="logo"
        />
        <h2 className="text-center text-xl sm:text-2xl md:text-5xl md:mt-10 font-extrabold text-gray-200">
          It's silly How mutch we don't know about our{" "}
          {(category === "sea" && "Oceans") ||
            (category === "eye" && "Limited View") ||
            (category === "space" && "Universe")}
        </h2>
        <div className="mt-5 text-center text-sm sm:text-xl md:text-2xl md:mt-10 font-bold text-gray-400">
          <p>
            {(category === "sea" &&
              "Nautical exploration is as old as humans.") ||
              (category === "eye" &&
                "How mutch can we really see around us?") ||
              (category === "space" &&
                "We know more about our Universe than our oceans, crazy isn't it?!")}
          </p>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="md:space-y-10 lg:grid lg:grid-cols-4 py-10 lg:gap-x-6">
          {posts &&
            posts.map((post) => (
              <div key={post.id} className="flex justify-center items-center">
                <Link to={`/posts/${post.id}`}>
                  <Posts
                    key={post.id}
                    id={post.id}
                    src={post.img1}
                    title={post.title}
                  />
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
