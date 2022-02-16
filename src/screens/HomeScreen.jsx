import React from "react";
import CardsHomepage from "../components/VariousCards/CardsHomepage";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";
import { IoMdPlanet } from "react-icons/io";
import { SiStarship } from "react-icons/si";
import { GiAsteroid, GiStarSwirl } from "react-icons/gi";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <div className=" mx-auto mb-[60px] text-center">
        <div className="shadow-xl p-3 my-2">
          <h1 class="text-6xl font-bold leading-normal mt-0 mb-2 text-teal-800 ">
            Travel is an adventure
          </h1>
          <h3 class="text-2xl font-bold leading-normal mt-0 mb-2 text-teal-100">
            But adventures aren't always pretty or comfortable.
          </h3>
          <h4 class="text-3xl font-normal leading-normal mt-0 mb-2 text-purple-800 ">
            We can help you
          </h4>
          <h5 class="text-2xl font-bold leading-normal mt-0 mb-2 text-white">
            TRUST OUR GUIDELINES
          </h5>
        </div>
        <div className="flex justify-evenly p-5 my-10">
          <Link to="/games">
            <IoMdPlanet className="cursor-pointer h-1/3" />
          </Link>
          <GiStarSwirl className="cursor-pointer h-1/3" />
          <GiAsteroid className="cursor-pointer h-1/3" />
          <SiStarship className="cursor-pointer h-1/3" />
          {/* <CardsHomepage /> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomeScreen;
