import React, { useEffect, useState } from "react";

export default function PopUp() {
  const [notClosed, setNotClosed] = useState(true);
  const [adv, setAdv] = useState([]);

  const fetchData = () => {
    try {
      fetch("https://inshortsapi.vercel.app/news?category=science")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data.data);
          setAdv(data.data);
        })
        .catch((err) => {
          console.log("fetch error" + err);
        });
    } catch (error) {
      console.log("fetch error" + error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {notClosed && adv && (
        <div
          id="dropdown-cta"
          className="p-4 mt-2 bg-blue-50 rounded-lg "
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="bg-[#1E667C] text-white text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
              Adv
            </span>
            <button
              onClick={() => setNotClosed(false)}
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-full focus:ring-2 focus:ring-blue-400 p-1 hover:bg-[#5FD38D] inline-flex h-6 w-6"
              data-collapse-toggle="dropdown-cta"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {adv &&
            adv
              .sort(() => Math.random() - Math.random())
              .slice(0, 1)
              .map((singleAd, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center space-x-2"
                >
                  <img
                    src={singleAd.imageUrl}
                    className="w-[150px] h-[150px]"
                    alt={singleAd.title}
                  />
                  <div className="flex flex-col justify-center max-w-[700px]">
                    <p className="text-xl mb-3 text-[#1E667C] ">
                      {singleAd.title}
                    </p>
                    <span>{singleAd.content}</span>
                  </div>
                  <a
                    href={singleAd.url}
                    className="px-10 py-5 rounded bg-[#1E667C] text-white hover:text-black hover:bg-[#5FD38D]"
                    target="_blank"
                  >
                    click to know more
                  </a>
                </div>
              ))}
          <a
            onClick={() => setNotClosed(false)}
            className="text-sm text-blue-900 underline hover:text-blue-800 "
            href="#"
          >
            Turn off advertisement
          </a>
        </div>
      )}
    </>
  );
}
