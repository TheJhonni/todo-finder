import React from "react";
import Age from "../components_2nd_Layer/users/Age";
import AgreeDiagram from "../components_2nd_Layer/users/AgreeDiagram";
import Streams from "../components_2nd_Layer/users/Streams";
import UserPie from "../components_2nd_Layer/users/UserPie";

export default function User() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-baseline">
        <div className="absolute h-[40%] w-[35%] rounded bg-gray-300 top-[10%] left-[20%] z-99">
          <UserPie />
        </div>
        <div className="absolute h-[40%] w-[35%] rounded bg-transparent top-[10%] right-[10%] z-99">
          <AgreeDiagram />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="absolute h-[40%] w-[35%] rounded bg-transparent top-[50%] left-[20%] z-99">
          <Age />
        </div>
        <div className="absolute h-[40%] w-[35%] rounded bg-gray-300 top-[50%] right-[10%] z-99">
          <Streams />
        </div>
      </div>
    </div>
  );
}
