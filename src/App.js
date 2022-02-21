import "./App.css";
import SeaScreen from "./screens/SeaScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect } from "react";
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
          <Route path="/" element={<EarthScreen />} />
        </Routes>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route
              path="/generic"
              element={
                <GenericScreen
                  homepage={homepage}
                  eyePosts={eyePosts}
                  seaPosts={seaPosts}
                  spacePosts={spacePosts}
                />
              }
            />
            {/* <Route
              path={`/posts/${posts.title}`}
              element={<PostScreen posts={homepage} />}
            /> */}
            <Route path="/sea" element={<SeaScreen />} />
            <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
