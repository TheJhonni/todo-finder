import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamesScreen from "./screens/GamesScreen";
import CultureScreen from "./screens/CultureScreen";
import FoodScreen from "./screens/FoodScreen";
import MoviesScreen from "./screens/MoviesScreen";
import NewsScreen from "./screens/NewsScreen";
import WelnessScreen from "./screens/WelnessScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
          <Route exact path="/games" element={<GamesScreen />}></Route>
          <Route exact path="/culture" element={<CultureScreen />}></Route>
          <Route exact path="/food" element={<FoodScreen />}></Route>
          <Route exact path="/movies" element={<MoviesScreen />}></Route>
          <Route exact path="/news" element={<NewsScreen />}></Route>
          <Route exact path="/welness" element={<WelnessScreen />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
