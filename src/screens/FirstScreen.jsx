import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import StartTitles from "../components/Titles/StartTitles";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import Gif from "../components/Spinner/Gif";
import satPianeta from "../assets/satPianeta.gif";

export default function FirstScreen() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(false);
    setTimeout(() => {
      setMount(true);
    }, 550);
  }, []);

  return (
    <>
      {mount ? (
        <div className="w-full h-full img-login relative">
          <div className="p-12">
            <img
              src={satPianeta}
              style={{
                position: "absolute",
                right: "20px",
                top: "0",
                marginLeft: "auto",
                width: "30%",
                height: "30%",
                zIndex: "1",
              }}
              alt="logo"
            />
            <StartTitles />
          </div>

          <div className="container mt-[200px] py-12 mx-auto">
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
