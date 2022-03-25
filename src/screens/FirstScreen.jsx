import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import StartTitles from "../components/Titles/StartTitles";
import Footer from "../components/Footer/Footer";
import Gif from "../components/Spinner/Gif";
import shuttle from "../assets/shuttle.gif";
import AtomTitles from "../components/Titles/AtomTitles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FirstScreen() {
  const [mount, setMount] = useState(false);

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    setMount(false);
    setTimeout(() => {
      setMount(true);
    }, 550);
  }, []);

  return (
    <>
      {mount ? (
        <div className="relative w-full h-full img-login">
          <div className="md:w-[50%] lg:w-[60%] xl:w-[70%] md:mt-5 xl:mt-20 mx-auto flex flex-col justify-center items-center z-50">
            <StartTitles />
          </div>

          <div className="md:w-[50%] lg:w-full bg-gray-300 px-2 lg:px-5 pt-1 pb-8 mx-auto flex flex-col justify-center items-center z-50">
            <AtomTitles />
          </div>
          <div className="mx-auto flex justify-between items-center bg-[#1E657B] rounded text-white mt-[100px] p-5 md:h-[300px] md:w-[80%]">
            <img
              src={shuttle}
              className="w-[70px] mr-5 md:mr-0 md:w-[150px] lg:w-[200px] xl:w-[300px] md:h-[150px] lg:h-[200px] xl:h-[300px] z-99"
              alt="logo"
            />

            <span className="flex flex-col md:items-center md:justify-center">
              <h1 className="text-white text-sm md:text-2xl xl:text-5xl font-bold my-2">
                Do you have precious data to show?
              </h1>
              <p className="text-[#ffffffce] text-sm md:text-lg xl:text-xl font-bold my-1">
                We credits all available resources from magazines and
                researchers
              </p>
            </span>

            <Link to={currentUser ? "/homePage" : "/redirectToLogin"}>
              <span className="mt-[5%] text-[#171753d3] bg-white md:text-lg lg:text-xl hover:bg-[#5FD38D] font-normal xl:font-bold px-[5px] py-[5px] lg:px-[20px] lg:py-[10px] xl:px-[30px] xl:py-[15px] rounded-full">
                explore
              </span>
            </Link>
          </div>
          <div className="container xl:mt-[50px] py-12 mx-auto">
            <ShowTestimonials />
          </div>
          <div className="bg-[#040c1d34] opacity-2" />
          <Footer />
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}
