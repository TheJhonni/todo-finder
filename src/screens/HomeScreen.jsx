import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Section } from "../components/VariousLinks/Section";
import { Html } from "@react-three/drei";

import Navbar from "../components/Navbar/Navbar";
import Scene from "../components/Jellyfish/Scene.js";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function HomeScreen() {
  return (
    <>
      <div className="w-screen h-screen img-login">
        <div className="h-[80%] bg-transparent">
          <Navbar />
          <Canvas>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}
