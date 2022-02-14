import CardsNews from "../components/VariousCards/CardsNews";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

function MoviesScreen() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-evenly p-5 my-10">
        <CardsNews />
      </div>
      <Footer />
    </div>
  );
}

export default MoviesScreen;
