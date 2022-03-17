import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components_2nd_Layer/Table";

export default function AdminPost({ posts }) {
  return (
    <>
      <div className="absolute top-[10%] bottom-0 left-[20%]">
        <h1 className="text-4xl text-gray-200 font-extrabold text-center pt-10">
          Posts
        </h1>

        <Table posts={posts} />
      </div>
    </>
  );
}
