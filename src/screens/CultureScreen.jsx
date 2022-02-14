import React from "react";
import CardsCulture from "../components/VariousCards/CardsCulture";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

function CultureScreen() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly p-5 my-10">
        <CardsCulture />
      </div>
      <Footer />
    </div>
  );
}

export default CultureScreen;
