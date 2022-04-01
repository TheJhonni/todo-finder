import React, { useEffect, useState } from "react";
import Iframe from "react-iframe";
import Footer from "../Footer/Footer";
import Gif from "../Spinner/Gif";

// const apiKey = process.env.REACT_APP_NASA_KEY;

export default function PicOfTheDay() {
  const [photos, setPhotos] = useState(null);
  const [mount, setMount] = useState(false);

  // declaring all APIs in .ENV

  const SECRET_NASA_KEY = `${process.env.REACT_APP_SECRET_NASA_KEY}`;
  const NASA_API = `${process.env.REACT_APP_API_NASA}`;
  const fetchPhoto = async () => {
    setMount(false);
    try {
      await fetch(`${NASA_API}${SECRET_NASA_KEY}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPhotos(data);
          setMount(true);
        })
        .catch((err) => {
          console.log(err, " error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchPhoto();
    }, 800);
  }, []);

  return (
    <>
      {mount ? (
        <>
          <div className="relative flex items-center justify-evenly mx-auto py-2">
            <div>
              <h2 className="mb-10 text-center text-xl sm:text-2xl md:text-5xl md:mt-10 font-extrabold text-gray-200">
                Nasa's {photos?.media_type === "image" ? "picture" : "video"} of
                the Day!
              </h2>
              <a
                href="https://apod.nasa.gov/apod/astropix.html"
                target="_blank"
                className="text-[#171753d3] bg-white md:text-lg lg:text-xl
                hover:bg-[#5FD38D] font-normal xl:font-bold px-[5px] py-[5px]
                lg:px-[20px] lg:py-[10px] xl:px-[30px] xl:py-[15px]
                rounded-full"
              >
                See more
              </a>
            </div>
            <img
              className="w-[300px] md:w-[500px] md:h-[500px] z-[99] mt-[-10]"
              src="https://media0.giphy.com/media/h7jMZHYHMdlJGmT0Ty/giphy.gif?cid=6c09b95268afcb503b8274e9803a9f5e841a16e647475fc2&rid=giphy.gif&ct=s"
              alt="logo"
            />
          </div>

          <div className="container flex w-screen pt-5 mt-5 mx-auto">
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
        <div className="h-screen">
          <Gif />
        </div>
      )}
    </>
  );
}
