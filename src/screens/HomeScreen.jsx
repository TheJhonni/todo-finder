import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import Jellyfish from "../components/Jellyfish/Jellyfish";
import { Html } from "@react-three/drei";
import { Section } from "../components/VariousLinks/Section";

const HTMLContent = () => {
  return (
    <Section>
      <group position={[0, 250, 0]}>
        <mesh position={[0, -35, 0]}>
          <Jellyfish />
        </mesh>
        <Html fullscreen factor={1.5} offset={1}>
          <div className="container">
            <h1 className="text-8xl text-white text-center mx-auto my-auto">
              Hello
            </h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <Canvas colorManagment camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}
