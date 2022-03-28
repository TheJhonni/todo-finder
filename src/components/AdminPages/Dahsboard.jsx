import React from "react";
import MyResponsiveAreaBump from "../components_2nd_Layer/dashboard/MyResponsiveAreaBump";
import VisitsDiagram from "../components_2nd_Layer/dashboard/VisitsDiagram";

export default function Dahsboard() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
        <MyResponsiveAreaBump />
      </div>
      <div className="absolute h-[40%] w-[70%] rounded bg-gray-300 top-[50%] left-[20%] z-99">
        {/* <VisitsDiagram /> */}
      </div>
    </div>
  );
}
