import Navbar from "../components/Navbar/Navbar";
import Scene from "../components/3D/Scene.js";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import CategoriesTitles from "../components/Titles/CategoriesTitles";
import Footer from "../components/Footer/Footer";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";
import SpinnerNoBg from "../components/Spinner/SpinnerNoBg";
import Gif from "../components/Spinner/Gif";

export default function CategoriesScreen() {
  const navigate = useNavigate();
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const { category } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch(`http://localhost:5000/myPosts?category=${category}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // store Data in State Data Variable
          setPosts(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    loadPosts();
  }, [currentUser, Scene]);

  return (
    <>
      {mount && Scene ? (
        <>
          <div className="w-screen h-screen img-login">
            {/* <div className="h-[70%] ml-auto"> */}
            {/* <Canvas>
                <ambientLight intensity={0.2} />
                <directionalLight intensity={0.2} />
                <Suspense fallback={null}>
                  {category === "sea" && <Scene />}
                </Suspense>
              </Canvas> */}
            {/* </div> */}
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
