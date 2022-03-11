import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Gif from "../Spinner/Gif";
import Spinner from "../Spinner/Spinner";

// const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PicOfTheDay() {
  const [photos, setPhotos] = useState(null);
  const [mount, setMount] = useState(false);

  const fetchPhoto = () => {
    setTimeout(() => {
      setMount(false);
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=8KyenMI2ffyFPqZwrT91X8LSDGlHOUxyhi7zSKjM`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPhotos(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    }, 350);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  return (
    <>
      {mount ? (
        <>
          <Navbar />
          <a href="https://apod.nasa.gov/apod/astropix.html">
            <h1 className="bg-[#15155f] text-center mb-4 px-10 py-20 text-gray-300 text-5xl">
              Nasa's picture of the Day!
            </h1>
          </a>
          <div className="container flex w-screen pt-5 mt-10 mx-auto">
            {photos?.media_type === "image" ? (
              <img
                href="https://apod.nasa.gov/apod/astropix.html"
                src={photos.url}
                alt=""
              />
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
              <p className="flex mx-auto text-white text-3xl mb-2">
                {photos?.title}
              </p>
              <p className="flex text-gray-300 texl-lg my-2">
                {photos?.explanation}
              </p>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <Gif />
      )}
    </>
  );
}
