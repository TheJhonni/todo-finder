import React, { useEffect, useState } from "react";
import atoms from "../../assets/atoms.gif";
import { useNavigate } from "react-router-dom";
import Gif from "../Spinner/Gif";

export default function FourOFour() {
  const navigate = useNavigate();
  const [mount, isMount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      isMount(true);
    }, 800);
  }, []);
  return (
    <>
      {mount ? (
        <div className="h-full">
          <img
            className="fixed left-5 top-10 object-contain pl-[20px] xl:mt-10 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] z-99"
            src={atoms}
            alt=""
          />
          <img
            className="fixed right-5 top-10 object-contain pr-[20px] xl:mt-10 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[400px] xl:h-[400px] 2xl:w-[500px] 2xl:h-[500px] z-99"
            src={atoms}
            alt=""
          />
          <div className="flex flex-col items-center justify-center space-y-10 h-screen w-4xl">
            <h1 className="m-0 text-[#ffffffce] text-7xl font-bold mt-2">5%</h1>
            <p className="m-0 text-[#ffffffce] text-2xl font-bolder my-1">
              SO SORRY, YOU DON'T HAVE PERMISSION TO GO TO THE DASHBOARD
            </p>
            <div className="flex flex-col justify-between items-center space-x-3">
              <span
                onClick={() => window.history.back()}
                span
                className="text-[#171753d3] bg-white md:text-lg lg:text-xl hover:bg-[#5FD38D] font-normal xl:font-bold px-[5px] py-[5px] lg:px-[20px] lg:py-[10px] xl:px-[30px] xl:py-[15px] rounded-full cursor-pointer"
              >
                Back to the Blog
              </span>
              <span className="flex flex-col justify-between items-center mt-10">
                <span
                  span
                  className="text-gray-300 md:text-lg lg:text-xl font-normal xl:font-bold px-[5px] py-[5px] lg:px-[20px] lg:py-[10px] xl:px-[30px] xl:py-[15px]"
                >
                  Are you an Admin and you have problems with your credentials?
                </span>
                <span
                  onClick={() => navigate("/contact")}
                  span
                  className="text-gray-300 hover:text-blue-500 md:text-lg lg:text-xl font-normal xl:font-bold px-[5px] py-[5px] lg:px-[20px] lg:py-[10px] xl:px-[30px] xl:py-[15px] underline cursor-pointer"
                >
                  Let us know
                </span>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen">
          <Gif />
        </div>
      )}
    </>
  );
}
