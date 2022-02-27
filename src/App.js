import "./App.css";
import SeaScreen from "./screens/SeaScreen";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import EarthScreen from "./screens/EarthScreen";
import GenericScreen from "./screens/GenericScreen";
import PostScreen from "./screens/PostScreen";
// import Saved from "./screens/Saved";
import RegisterScreen from "./screens/Login/RegisterScreen";
import { setUser } from "./redux/Authentications/authActions";
import FourOFour from "./components/404/FourOFour";
import UseRoute from "./components/Loading/UseRoute";
import Spinner from "./components/Spinner/Spinner";
import CommentForm from "./components/Comments/CommentForm";
import PostForm from "./components/Posts/EditPost";
import NewPost from "./components/Posts/NewPost";
import EditPost from "./components/Posts/EditPost";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [mount, setMount] = useState(false);
  const [posts, setPosts] = useState(null);

  const loadPosts = () => {
    setTimeout(() => {
      setMount(false);
      fetch("http://localhost:5000/myPosts")
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
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="img-login">
        <Routes>
          <Route exact path="/" element={<EarthScreen />} />

          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />

          <Route exact path="/redirectToLogin" element={<UseRoute />} />

          <Route
            exact
            path="/posts"
            element={<GenericScreen posts={posts} currentUser={currentUser} />}
          />
          <Route
            path="/posts/:id"
            element={<PostScreen currentUser={currentUser} />}
          />
          {/* <Route exact path="/saved" element={<Saved />} /> */}
          <Route
            exact
            path="/sea"
            element={<SeaScreen currentUser={currentUser} />}
          />
          {/* <Route exact path="/picOfTheDay" element={<PicOfTheDay />} /> */}
          <Route
            path="/edit/:id"
            element={<EditPost currentUser={currentUser} />}
          />
          <Route
            path="/newPost"
            element={<NewPost currentUser={currentUser} />}
          />
        </Routes>

        {/* <Route path="/404" element={<FourOFour />} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
