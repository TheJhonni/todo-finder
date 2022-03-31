import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components_2nd_Layer/adminPosts/Table";

export default function AdminPost({ posts }) {
  return (
    <>
      <div className="top-0 px-auto mb-auto min-w-screen md:absolute h-full 2xl:py-10 md:top-0 md:left-[35%] lg:left-[35%] xl:left-[28%] 2xl:left-[20%]">
        <Table posts={posts} />
      </div>
    </>
  );
}
