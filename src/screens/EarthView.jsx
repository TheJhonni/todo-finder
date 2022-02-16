import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthIndex from "../components/VariousLinks/EarthIndex";
import EarthTitles from "../components/VariousLinks/EarthTitles";

export default function EarthView() {
  return (
    <div className="w-screen h-screen">
      <EarthTitles />
      <Canvas>
        <Suspense fallback={null}>
          <EarthIndex />
        </Suspense>
      </Canvas>
    </div>
  );
}
