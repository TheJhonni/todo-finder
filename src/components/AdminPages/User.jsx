import React, { useEffect, useState } from "react";
import ListUsers from "../components_2nd_Layer/users/ListUsers";
import AgreeDiagram from "../components_2nd_Layer/users/AgreeDiagram";
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

      <div className="absolute h-[40%] w-[70%] rounded bg-transparent top-[50%] left-[20%] z-99">
        <ListUsers />
      </div>
    </div>
  );
}
