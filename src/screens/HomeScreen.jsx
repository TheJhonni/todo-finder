import React from "react";
import CardsHomepage from "../components/VariousCards/CardsHomepage";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className=" mx-auto mb-[60px] text-center">
        <div className="shadow-xl p-3 my-2">
          <h1 class="text-6xl font-bold leading-normal mt-0 mb-2 text-teal-800 ">
            Don't know what to do? Feeling bored?
          </h1>
          <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-blueGray-600 ">
            Choose one of our ideas and start doing something!
          </h4>
          <h5 class="text-2xl font-bold leading-normal mt-0 mb-2 text-white">
            TIME IS THE MOST PRECIOUS THING YOU HAVE
          </h5>
        </div>
        <div className="flex justify-evenly p-5 my-10">
          <CardsHomepage />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeScreen;
