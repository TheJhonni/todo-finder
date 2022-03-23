import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import StartTitles from "../components/Titles/StartTitles";
import Footer from "../components/Footer/Footer";
import Gif from "../components/Spinner/Gif";
import sat from "../assets/sat.gif";
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
          <div className="p-12 max-h-[400px]">
            <img
              src={sat}
              style={{
                position: "absolute",
                left: "5%",
                top: "0",
                marginLeft: "auto",
                width: "600px",
                height: "600px",
                zIndex: "1",
              }}
              alt="logo"
            />
            <StartTitles />
          </div>

          <div className="mt-[150px] bg-gray-300 pt-1 pb-8 mx-auto">
            <AtomTitles />
          </div>
          <div className="mx-auto flex justify-between items-center bg-[#1E657B] rounded text-white mt-[100px] p-5 h-[300px] w-[80%]">
            <img
              src={shuttle}
              style={{
                width: "300px",
                height: "300px",
                zIndex: "1",
              }}
              alt="logo"
            />

            <span className="flex flex-col items-center justify-center">
              <h1 className="text-white text-5xl font-bold my-2">
                Do you have precious data to show?
              </h1>
              <p className="text-[#ffffffce] text-xl font-bold my-1">
                We credits all available resources from magazines and
                researchers
              </p>
            </span>

            <Link to={currentUser ? "/homePage" : "/redirectToLogin"}>
              <span className="text-[#171753d3] self-end bg-white text-xl hover:bg-[#5FD38D] font-bold px-[30px] py-[15px] rounded-full">
                explore
              </span>
            </Link>
          </div>
          <div className="container mt-[50px] py-12 mx-auto">
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
