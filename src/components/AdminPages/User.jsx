import React from "react";
import UserPie from "../components_2nd_Layer/UserPie";

export default function User() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="absolute mx-auto h-[70%] w-[70%] rounded bg-transparent top-[20%] left-[10%] z-99">
        <UserPie />
      </div>
    </div>
  );
}
