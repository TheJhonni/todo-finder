import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Footer from "../Navbar/Footer";
import Navbar from "../Navbar/Navbar";

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
      <div className="container flex w-screen pt-5 mt-10 mx-auto">
        {photos?.media_type === "image" ? (
          <img src={photos.url} alt="" />
        ) : (
          <Iframe
            url={photos.url}
            title={photos.title + " image"}
            width="450px"
            height="300px"
            id="myId"
            className="z-1"
            display="initial"
            position="relative mx-auto"
          />
        )}
        <div className="flex flex-col ml-4">
          <p className="flex mb-2">{photos?.title}</p>
          <p className="flex my-2">{photos?.explanation}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
