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

  const loadPosts = async () => {
    setMount(false);
    try {
      await fetch(`http://localhost:5000/myPosts?category=${category}`)
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
