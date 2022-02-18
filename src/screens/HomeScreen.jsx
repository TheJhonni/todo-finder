import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jellyfish from "../components/Jellyfish/Jellyfish";
import { Html } from "@react-three/drei";
import { Section } from "../components/VariousLinks/Section";

export default function HomeScreen() {
  return (
    <>
      <div className="w-screen h-screen img-login">
        <div className="h-[80%] bg-transparent">
          <Navbar />
          <Canvas>
            <Suspense fallback={null}>
              <Jellyfish />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </>
  );
}
