import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import EarthSphere from "../components/Earth/EarthSphere";
import EarthTitles from "../components/Earth/EarthTitles";
import Spinner from "../components/Spinner/Spinner";

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
        <div className="w-screen h-screen img-login">
          <EarthTitles />
          <Canvas>
            <Suspense fallback={null}>
              <EarthSphere />
            </Suspense>
          </Canvas>
          <div className="bg-[#040c1d34] opacity-2" />
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
