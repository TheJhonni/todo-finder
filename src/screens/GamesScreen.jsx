import React from "react";
import CardsGames from "../components/VariousCards/CardsGames";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

function GamesScreen() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-evenly p-5 my-10">
        <CardsGames />
      </div>
      <Footer />
    </div>
  );
}

export default GamesScreen;
