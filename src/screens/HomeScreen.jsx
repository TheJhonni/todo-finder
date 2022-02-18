import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Section } from "../components/VariousLinks/Section";
import { Html } from "@react-three/drei";

import Navbar from "../components/Navbar/Navbar";
import Scene from "../components/Jellyfish/Scene.js";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthTitles from "../components/Earth/EarthTitles";

export default function HomeScreen() {
  return (
    <>
      <div className="w-screen h-screen img-login">
        <div className="h-[70%] bg-transparent">
          <Navbar />
          <Canvas>
            <ambientLight intensity={0.6} />
            <directionalLight intensity={5} />
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
          {/* <EarthTitles /> */}
        </div>
      </div>
    </>
  );
}
