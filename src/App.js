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
import Saved from "./screens/Saved";
import RegisterScreen from "./screens/Login/RegisterScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="img-login">
        <Routes>
          <Route exact path="/" element={<EarthScreen />} />

          <Route exact path="/posts" element={<GenericScreen />} />
          <Route path="/posts/:id" element={<PostScreen />} />
          {/* <Route exact path="/saved" element={<Saved />} /> */}
          <Route exact path="/sea" element={<SeaScreen />} />
          <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          <Route exact path="/register" element={<RegisterScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
