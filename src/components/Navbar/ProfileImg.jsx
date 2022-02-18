import React from "react";

function ProfileImg({ img, setShown }) {
  return (
    <>
      <div className="rounded">
        <img
          class="object-cover relative rounded-full border
            border-gray-100 bg-white shadow-sm max-w-[70px] h-[50px] cursor-pointer"
          src={img}
        />
      </div>
    </>
  );
}

export default ProfileImg;
