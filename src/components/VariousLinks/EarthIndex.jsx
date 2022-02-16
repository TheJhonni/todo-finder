import React from "react";

import EarthDayMap from "../../assets/textures/8k_erth_daymap.jpg";
import EarthDayMap from "../../assets/textures/8k_erth_clouds";
import EarthDayMap from "../../assets/textures/8k_erth_nightmap.jpg";
import EarthDayMap from "../../assets/textures/8k_erth_normal_map.jpg";
import EarthDayMap from "../../assets/textures/8k_erth_spectacular_map.jpg";

export default function EarthIndex(props) {
  return (
    <>
      <ambientLight intensity={1}>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial color="red" />
        </mesh>
      </ambientLight>
    </>
  );
}
