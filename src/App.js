import "./App.css";
import SeaScreen from "./screens/SeaScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import EarthScreen from "./screens/EarthScreen";
import GenericScreen from "./screens/GenericScreen";
import PostScreen from "./screens/PostScreen";
// import Saved from "./screens/Saved";
import RegisterScreen from "./screens/Login/RegisterScreen";
import { setUser } from "./redux/actions";
import FourOFour from "./components/404/FourOFour";
import UseRoute from "./components/Loading/UseRoute";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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

          <Route exact path="/gettingThere" element={<UseRoute />} />
          <Route exact path="/spinner" element={<Spinner />} />

          <Route exact path="/posts" element={<GenericScreen />} />
          <Route path="/posts/:id" element={<PostScreen />} />
          {/* <Route exact path="/saved" element={<Saved />} /> */}
          <Route exact path="/sea" element={<SeaScreen />} />
          <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />

          {/* <Route path="/404" element={<FourOFour />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
