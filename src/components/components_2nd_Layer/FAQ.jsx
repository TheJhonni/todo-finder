import React from "react";

export default function FAQ({ index, f, q, a, toggleFaq }) {
  return (
    <div
      key={index}
      className={
        "mt-[20px] mx-12 p-[20px] bg-gray-300 shadow-xl rounded cursor-pointer transition-all duration-[0.4s] ease " +
        (f.open ? "open" : "")
      }
      onClick={() => toggleFaq(index)}
    >
      <div
        id="faq-q"
        className="relative text-blue-800 text-xl pr-[80px] transition-all duration-[0.4s] ease"
      >
        {q}
      </div>
      <div
        className={
          "max-h-0 overflow-y-hidden transition-all duration-[0.4s] ease " +
          (f.open ? "q-open" : "")
        }
      >
        {a}
      </div>
    </div>
  );
}
