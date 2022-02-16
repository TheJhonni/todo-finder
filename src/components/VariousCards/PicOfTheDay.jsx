import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Footer from "../components/Navbar/Footer";
import Navbar from "../components/Navbar/Navbar";

// const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PicOfTheDay() {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const resp = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=8KyenMI2ffyFPqZwrT91X8LSDGlHOUxyhi7zSKjM`
      );

      const data = await resp.json();
      setPhotos(data);
      console.log(data);
    }
  }, []);

  if (!photos) return <div />;

  return (
    <>
      <Navbar />
      <div className="flex justify-evenly p-5 my-10">
        {photos?.media_type === "image" ? (
          <img src={photos.url} alt="" />
        ) : (
          <Iframe
            url={photos.url}
            title={photos.title + " image"}
            width="450px"
            height="450px"
            id="myId"
            className="z-10"
            display="initial"
            position="relative"
          />
        )}
        <p>{photos?.description}</p>
        <p>{photos?.title}</p>
      </div>
      <Footer />
    </>
  );
}
