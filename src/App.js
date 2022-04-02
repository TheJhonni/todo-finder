import "./App.css";
import CategoriesScreen from "./screens/CategoriesScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import FirstScreen from "./screens/FirstScreen";
import Favorites from "./screens/Favorites";
import PostScreen from "./screens/PostScreen";
import RegisterScreen from "./screens/Login/RegisterScreen";
import { setUser } from "./redux/Authentications/authActions";
import UseRoute from "./components/Loading/UseRoute";
import NewPost from "./components/Posts/NewPost";
import EditPost from "./components/Posts/EditPost";
import FourOFour from "./components/404/FourOFour";
import Homepagege from "./screens/Homepagege";
import FaqScreen from "./screens/FaqScreen";
import TeamScreen from "./screens/TeamScreen";
import Navbar from "./components/Navbar/Navbar";
import AdminScreen from "./screens/AdminScreen";
import ContactScreen from "./screens/ContactScreen";

function App() {
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

  return (
    <BrowserRouter>
      <div className="img-login">
        <Routes>
          <Route exact path="/" element={<FirstScreen />} />

          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />

          <Route exact path="*" element={<UseRoute />} />

          <Route exact path="/homePage" element={<Homepagege />} />
          <Route
            exact
            // path="/homePage?category=:category"
            path="/category=:category"
            element={<CategoriesScreen />}
          />
          <Route path="/posts/:id" element={<PostScreen />} />
          <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="/admin/*" element={<AdminScreen />} />
          <Route path="/Faq" element={<FaqScreen />} />
          <Route path="/ourTeam" element={<TeamScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/fourOFour" element={<FourOFour />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
