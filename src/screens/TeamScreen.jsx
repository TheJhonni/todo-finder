import React, { useEffect, useState } from "react";
import Gif from "../components/Spinner/Gif";
import Footer from "../components/Footer/Footer";

export default function TeamScreen() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setMount(true);
    }, 800);
  }, []);
  return (
    <>
      {mount ? (
        <div className="w-full h-full img-textLeft">
          <div className="container mx-auto py-10">
            <h1 className="text-4xl text-gray-200 font-extrabold text-center py-5 px-10">
              MEET OUR TEAM!
            </h1>
            <div className="max-w-screen-xl my-5 px-4 mx-auto md:px-8">
              <div className="md:mb-16">
                <p className="max-w-screen-md mx-auto text-center mt-10 text-gray-300 md:text-lg">
                  Research shows that collaborative problem solving leads to
                  better outcomes. People are more likely to take calculated
                  risks that lead to innovation if they have the support of a
                  team behind them. Working in a team encourages personal
                  growth, increases job satisfaction, and reduces stress.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 shadow">
                  <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                    <img
                      src="https://mail.google.com/mail/u/0?ui=2&ik=a2a837bb67&attid=0.1&permmsgid=msg-a:r2967141636162479233&th=17f6ed738082ca9e&view=att&disp=safe&realattid=17f6ed7271c238334e71"
                      alt="Image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-[#5FD38D]  md:text-lg">
                      Davide J. Spiga
                    </div>
                    <p className="mb-3 text-sm text-gray-300 md:text-base md:mb-4">
                      Founder / CEO / Web developer
                    </p>

                    <div className="flex">
                      <div className="flex gap-4">
                        <a href="https://www.facebook.com/IndianaDavyJonesConi">
                          <svg
                            className="w-6 h-6 text-[#5FD38D] fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a href="https://github.com/TheJhonni">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
                          </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/davide-spiga-2281aa141/">
                          <svg
                            className="w-6 h-6 text-[#5FD38D] fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 shadow">
                  <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
                    <img
                      src="https://mail.google.com/mail/u/0?ui=2&ik=a2a837bb67&attid=0.1&permmsgid=msg-a:r6603424159760113157&th=17f6ed480c264a51&view=att&disp=safe&realattid=17f6ed47117d20fc24b1"
                      alt="Image"
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="font-bold text-[#5FD38D]  md:text-lg">
                      Davide Giglio
                    </div>
                    <p className="mb-3 text-sm text-gray-300 md:text-base md:mb-4">
                      Graphic Designer
                    </p>

                    <div className="flex">
                      <div className="flex gap-4">
                        <a href="https://www.facebook.com/davide.giglio.522">
                          <svg
                            className="w-6 h-6 text-blue-600 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </a>
                        <a href="#">
                          <svg
                            className="w-6 h-6 text-blue-300 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                          </svg>
                        </a>
                        <a href="#">
                          <svg
                            className="w-6 h-6 text-blue-500 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-2xl mt-10 text-gray-200 border-b-4 border-[#0082CA]">
            <Footer />
          </div>
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}
