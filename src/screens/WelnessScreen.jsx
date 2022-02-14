import CardsWelness from "../components/VariousCards/CardsWelness";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

function MoviesScreen() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-evenly p-5 my-10">
        <CardsWelness />
      </div>
      <Footer />
    </div>
  );
}

export default MoviesScreen;
