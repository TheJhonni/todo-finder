import "./App.css";
import CategoriesScreen from "./screens/CategoriesScreen";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import EarthScreen from "./screens/EarthScreen";
import GenericScreen from "./screens/GenericScreen";
import PostScreen from "./screens/PostScreen";
import RegisterScreen from "./screens/Login/RegisterScreen";
import { setUser } from "./redux/Authentications/authActions";
import FourOFour from "./components/404/FourOFour";
import UseRoute from "./components/Loading/UseRoute";
import Spinner from "./components/Spinner/Spinner";
import NewPost from "./components/Posts/NewPost";
import EditPost from "./components/Posts/EditPost";
import Homepagege from "./screens/Homepagege";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [posts, setPosts] = useState(null);

  const loadPosts = () => {
    setTimeout(() => {
      fetch(`http://localhost:5000/myPosts`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPosts(data);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
    loadPosts();
  }, [dispatch]);

  const { category } = posts ?? {};

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
            path="/homePage"
            element={<Homepagege currentUser={currentUser} />}
          />
          <Route
            exact
            // path="/homePage?category=:category"
            path="/category=:category"
            element={<CategoriesScreen currentUser={currentUser} />}
          />
          <Route
            path="/posts/:id"
            element={<PostScreen currentUser={currentUser} />}
          />
          {/* <Route exact path="/saved" element={<Saved />} /> */}
          {/* <Route
            exact
            path="/sea"
            element={<SeaScreen currentUser={currentUser} />}
          /> */}
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
