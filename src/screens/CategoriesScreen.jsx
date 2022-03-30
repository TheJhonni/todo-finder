import { useEffect, useState } from "react";
import CategoriesTitles from "../components/Titles/CategoriesTitles";
import Footer from "../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Gif from "../components/Spinner/Gif";

export default function CategoriesScreen() {
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const { category } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  // declaring all APIs in .ENV
  const POST_API = `${process.env.REACT_APP_API_POSTS}`;

  const loadPosts = async () => {
    setMount(false);
    try {
      await fetch(`${POST_API}?category=${category}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      loadPosts();
    }, 800);
  }, [currentUser]);

  return (
    <>
      {mount ? (
        <>
          <div className="w-full h-full img-login mb-20">
            <CategoriesTitles posts={posts} />
          </div>
          <Footer />
        </>
      ) : (
        <Gif />
      )}
    </>
  );
}
