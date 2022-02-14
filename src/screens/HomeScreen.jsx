import React from "react";
import CardsHomepage from "../components/CardsHomepage";
import Navbar from "../components/Navbar";

function HomeScreen() {
  return (
    <div>
      <Navbar />
      <h1>Don't know what to do? Feeling bored?</h1>
      <h2>Choose one of our ideas and start doing something!</h2>
      <h4>TIME IS THE MOST PRECIOUS THING YOU HAVE</h4>

      <div>
        <CardsHomepage />
      </div>
    </div>
  );
}

export default HomeScreen;
