import "./App.css";
import HomeScreen from "./screens/HomeScreen";
// import HomeScreen2 from "./screens/HomeScreen2";
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
    <div>
      {/* className="background-app" */}
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>

            <Route exact path="/picOfTheDay" element={<PicOfTheDay />}></Route>
            <Route exact path="/earthView" element={<EarthView />}></Route>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
