import React, { useEffect, useState } from "react";
// import CardsGames from "../components/VariousCards/CardsGames";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

const apiKey = process.env.REACT_APP_NASA_KEY;

function GamesScreen() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      try {
        const resp = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        );

        if (resp.ok) {
          const data = await resp.json();
          console.log(data);
          setPhotos(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  if (!photos) return <div />;

  return (
    <div>
      <Navbar />

      <div className="flex justify-evenly p-5 my-10">
        {photos?.media_type === "image" ? (
          <img src={photos?.url} alt="" />
        ) : (
          <iFrame
            title={photos?.title + " image"}
            src={photos?.url}
            fameBorder="0"
            gesture="media"
            allow="autoplay"
            allowFullScreen
            classname="photo"
          />
        )}
        <p>{photos?.description}</p>
        <p>{photos?.title}</p>
        {/* <CardsGames /> */}
      </div>
      <Footer />
    </div>
  );
}

export default GamesScreen;
