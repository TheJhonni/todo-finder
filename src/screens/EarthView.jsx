import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthSphere from "../components/Earth/EarthSphere";
import EarthTitles from "../components/Earth/EarthTitles";

export default function EarthView() {
  return (
    <div className="w-screen h-screen">
      <EarthTitles />
      <Canvas>
        <Suspense fallback={null}>
          <EarthSphere />
        </Suspense>
      </Canvas>
    </div>
  );
}
