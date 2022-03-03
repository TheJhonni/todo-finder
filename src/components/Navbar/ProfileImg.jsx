import React from "react";

function ProfileImg({ img, setShown }) {
  return (
    <>
      <div className="rounded">
        <img
          className="object-cover relative 
           bg-transparent shadow-sm w-[100px] h-[50px] cursor-pointer"
          src={img}
        />
      </div>
    </>
  );
}

export default ProfileImg;
