import "./App.css";
import CategoriesScreen from "./screens/CategoriesScreen";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  matchRoutes,
} from "react-router-dom";
import LoginScreen from "./screens/Login/LoginScreen";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import PicOfTheDay from "./components/VariousLinks/PicOfTheDay";
import FirstScreen from "./screens/FirstScreen";
import Favorites from "./screens/Favorites";
import PostScreen from "./screens/PostScreen";
import RegisterScreen from "./screens/Login/RegisterScreen";
import { setUser } from "./redux/Authentications/authActions";
import FourOFour from "./components/404/FourOFour";
import UseRoute from "./components/Loading/UseRoute";
import Spinner from "./components/Spinner/Spinner";
import NewPost from "./components/Posts/NewPost";
import EditPost from "./components/Posts/EditPost";
import Homepagege from "./screens/Homepagege";
import FaqScreen from "./screens/FaqScreen";
import TeamScreen from "./screens/TeamScreen";
import Navbar from "./components/Navbar/Navbar";
import AdminScreen from "./screens/AdminScreen";
import Dahsboard from "./components/AdminPages/Dahsboard";

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
        <Navbar />
        <Routes>
          <Route exact path="/" element={<FirstScreen />} />

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
          <Route exact path="/picOfTheDay" element={<PicOfTheDay />} />
          <Route
            path="/edit/:id"
            element={<EditPost currentUser={currentUser} />}
          />
          <Route
            path="/newPost"
            element={<NewPost currentUser={currentUser} />}
          />
          <Route path="/admin/*" element={<AdminScreen />} />
          <Route path="/Faq" element={<FaqScreen />} />
          <Route path="/ourTeam" element={<TeamScreen />} />
          <Route path="/favorites" element={<Favorites />} />

          <Route path="*" element={<FourOFour />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
