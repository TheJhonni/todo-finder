import React, { useEffect, useState } from "react";
import { send } from "emailjs-com";
import Gif from "../components/Spinner/Gif";
export default function ContactScreen() {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");

  const [mount, setMount] = useState(false);

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };
  const handleMessage = (e) => {
    set_message(e.target.value);
  };

  const resetFields = () => {
    set_sender_name("");
    set_sender_email("");
    set_message("");
  };

  // declaring all APIs in .ENV
  const SECRET_SEND_KEY = `${process.env.REACT_APP_SECRET_SEND_KEY}`;

  const sendEmail = async (e) => {
    e.preventDefault();
    setMount(false);
    try {
      await send(
        "service_o918xll",
        "template_tuovgfs",
        { sender_name, sender_email, message },
        `${SECRET_SEND_KEY}`
      )
        .then(
          (result) => {
            console.log(result.text);
            setMount(true);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
    resetFields();
  };

  useEffect(() => {
    setMount(false);
    setTimeout(() => {
      setMount(true);
    }, 800);
  }, []);

  return (
    <>
      {mount ? (
        <div>
          <section className="text-gray-300 body-font relative">
            <form onSubmit={sendEmail} className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-200">
                  Contact Us
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify.
                </p>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="leading-7 text-sm text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="sender_name"
                        value={sender_name}
                        onChange={handleName}
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-[#1E667C] text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="leading-7 text-sm text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="sendere_email"
                        value={sender_email}
                        onChange={handleEmail}
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-600 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label
                        htmlFor="message"
                        className="leading-7 text-sm text-gray-300"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="your message"
                        value={message}
                        onChange={handleMessage}
                        required
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-600 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex mx-auto text-white bg-[#1E667C] border-0 py-2 px-8 focus:outline-none hover:bg-[#5FD38D] hover:text-gray-800 rounded text-lg"
                    >
                      Send
                    </button>
                  </div>
                  <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    <a className="text-[#5FD38D]">example@email.com</a>
                    <p className="leading-normal my-5">
                      49 Smith St.
                      <br />
                      Saint Cloud, MN 56301
                    </p>
                    <span className="inline-flex">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                      <a className="ml-4 text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      ) : (
        <Gif />
      )}
    </>
  );
}
