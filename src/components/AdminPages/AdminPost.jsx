import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Table from "../components_2nd_Layer/Table";

export default function AdminPost({ posts }) {
  return (
    <>
      <div className="absolute pb-auto top-0 left-[20%]">
        <Table posts={posts} />
      </div>
    </>
  );
}
