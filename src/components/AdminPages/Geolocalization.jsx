import React from "react";
import GeoChart from "../components_2nd_Layer/geolocalization/GeoChart";
import Waffle from "../components_2nd_Layer/geolocalization/Waffle";

export default function Geolocalization() {
  return (
    <div className="flex">
      {/* <div className="absolute h-[80%] w-[45%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <GeoChart />
      </div> */}
      <div className="absolute h-[80%] w-[25%] rounded bg-transparent top-[10%] right-[10%] z-99">
        <Waffle />
      </div>
    </div>
  );
}
