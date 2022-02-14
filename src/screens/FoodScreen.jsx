import React from "react";
import CardsFood from "../components/VariousCards/CardsFood";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

function GamesScreen() {
  return (
    <div>
      <Navbar />

      <div className="flex justify-evenly p-5 my-10">
        <CardsFood />
      </div>
      <Footer />
    </div>
  );
}

export default GamesScreen;
