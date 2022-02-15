import React from "react";

function ProfileImg({ img }) {
  return (
    <div class="rounded">
      <img
        class="object-cover relative rounded-full border
          border-gray-100 bg-white shadow-sm max-w-[70px] h-[50px] cursor-pointer"
        src={img}
      />
    </div>
  );
}

export default ProfileImg;
