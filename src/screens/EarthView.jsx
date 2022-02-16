import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import EarthIndex from "../components/VariousLinks/EarthIndex";

export default function EarthView() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <EarthIndex />
        </Suspense>
      </Canvas>
    </div>
  );
}
