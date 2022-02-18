import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./redux/userReducer";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import EarthView from "./screens/EarthView";

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
          <Route exact path="/" element={<EarthView />} />
        </Routes>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
