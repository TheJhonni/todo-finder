import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import atoms from "../../assets/atoms.gif";

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
      <div className="img-textLeft h-screen py-20">
        <img
          className="fixed left-5 top-20 object-contain pl-[20px] xl:mt-10 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[500px] xl:h-[500px] z-99"
          src={atoms}
          alt=""
        />
        <img
          className="fixed right-5 top-20 object-contain pr-[20px] xl:mt-10 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[500px] xl:h-[500px] z-99"
          src={atoms}
          alt=""
        />
        <div className="flex flex-col items-center justify-center mt-[20%] 2xl:mt-20 space-y-15 2xl:space-y-20">
          <div className="ounded-full px-10">
            <h1 className="m-0 text-[#ffffffce] md:text-lg lg:text-2xl xl:text-4xl font-bold my-1">
              Sorry, you need to be logged in to see and interact with our
              website!
            </h1>
            <p className="m-0 text-center text-[#a7a7eee0] xl:text-xl last:2xl:text-2xl font-bolder my-2 2xl:my-5">
              {" "}
              We're Redirecting you to login Page in{" "}
            </p>
          </div>
          <p className=" text-[#ffffffce] lg:text-7xl font-bolder xl:mb-5 2xl:mb-20">
            {count} seconds
          </p>
          <div className="mt-[5%] 2xl:mt-[200px]">
            <Link to="/login">
              <span className="lg:mt-[3%] 2xl:mt-[5%] text-[#171753d3] bg-white md:text-lg lg:text-xl hover:bg-[#5FD38D] font-normal xl:font-bold px-[5px] py-[5px] lg:px-[20px] lg:py-[10px] xl:px-[60px] xl:py-[50px] rounded-full">
                Or click here if you're in a hurry!
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingTimer;
