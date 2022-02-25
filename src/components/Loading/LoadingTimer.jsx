import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoadingTimer() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1500);
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <>
      <div className="img-login">
        <img
          className="fixed left-0 w-[120px] object-contain pl-[20px]"
          src="https://cdn3.iconfinder.com/data/icons/hawaii-symbols-3/64/Turtle-animal-sea-hawaii-256.png"
          alt=""
        />
      </div>
      <div className="bg-[#161D34] h-screen flex flex-col items-center justify-center space-y-[50px]">
        <div className="ounded-full px-10">
          <h1 className="m-0 text-[#ffffffce] text-3xl font-bold mt-2">
            Sorry, you need to be logged in to see our website!
          </h1>
          <p className="m-0 text-center text-[#a7a7eee0] text-2xl font-bolder my-1">
            {" "}
            We're Redirecting you to login Page in{" "}
          </p>
        </div>
        <p className=" text-[#ffffffce] text-7xl font-bolder my-4">
          {count} seconds
        </p>
        <div className="mt-[10%]">
          <Link to="/login">
            <span className="rounded-full text-2xl font-bold px-10 py-10 bg-white text-[#2626c0] hover:bg-[#2626c0] hover:text-white hover:scale-[1.03] transition-all duration-150 ease-in">
              Or click here if you're in a hurry!
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoadingTimer;
