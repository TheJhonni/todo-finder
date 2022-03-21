import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components_2nd_Layer/adminPosts/Table";

export default function AdminPost({ posts }) {
  return (
    <>
      <div className="absolute py-10 top-0 left-[20%]">
        <Table posts={posts} />
      </div>
    </>
  );
}
