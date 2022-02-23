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
import Saved from "./screens/Saved";

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
    <BrowserRouter>
      <div className="img-login">
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<EarthScreen />} />
            <Route exact path="/posts" element={<GenericScreen />} />
            <Route path="/posts/:id" element={<PostScreen />} />
            <Route exact path="/saved" element={<Saved />} />
            <Route exact path="/sea" element={<SeaScreen />} />
            <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
