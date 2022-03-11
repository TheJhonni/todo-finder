import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import ShowTestimonials from "../components/Testimonials/ShowTestimonials";
import EarthSphere from "../components/Earth/EarthSphere";
import EarthTitles from "../components/Earth/EarthTitles";
import Footer from "../components/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";
import Gif from "../components/Spinner/Gif";

export default function EarthScreen() {
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
        <div className="w-full h-full img-login">
          <div className="w-screen h-screen">
            <EarthTitles />
            <Canvas>
              <Suspense fallback={null}>
                <EarthSphere />
              </Suspense>
            </Canvas>
          </div>
          <div className="container ml-auto">
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
