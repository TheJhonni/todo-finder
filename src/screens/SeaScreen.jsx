import { useLoader } from "@react-three/fiber";

import Navbar from "../components/Navbar/Navbar";
import Scene from "../components/Jellyfish/Scene.js";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SeaTitles from "../components/Jellyfish/SeaTitles";

export default function SeaScreen() {
  return (
    <>
      {/* <div className="w-screen h-screen img-login"> */}
      <div className="h-[70%] ml-auto">
        {/* <Navbar /> */}
        <Canvas>
          <ambientLight intensity={0.2} />
          <directionalLight intensity={0.2} />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
        {/* <SeaTitles /> */}
      </div>
      {/* </div> */}
    </>
  );
}
