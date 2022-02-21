import "./App.css";
import SeaScreen from "./screens/SeaScreen";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userReducer";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import EarthScreen from "./screens/EarthScreen";
import GenericScreen from "./screens/GenericScreen";
import PostScreen from "./screens/PostScreen";
import homepage from "./data/homepage.json";
import eyePosts from "./data/eyePosts.json";
import seaPosts from "./data/seaPosts.json";
import spacePosts from "./data/spacePosts.json";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [post, setPost] = useState(null);
  const { asin } = useParams();

  useEffect(() => {
    const unsuscribed = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );

        setPost(asin);
      } else {
        dispatch(logout());
      }
    });

    return unsuscribed;
  }, []);

  return (
    <div className="img-login">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EarthScreen />} />
        </Routes>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route
              exact
              path="/posts"
              element={
                <GenericScreen
                  homepage={homepage}
                  eyePosts={eyePosts}
                  seaPosts={seaPosts}
                  spacePosts={spacePosts}
                />
              }
            />
            <Route
              path="/posts/:asin"
              element={<PostScreen post={homepage} />}
            />
            <Route exact path="/sea" element={<SeaScreen />} />
            <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
