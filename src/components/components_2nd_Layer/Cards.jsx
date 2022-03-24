import React from "react";

export default function Cards({ name, img }) {
  return (
    <div
      className="md:mb-10 w-full bg-gray-300 rounded-lg overflow-hidden sm:h-64 lg:aspect-w-1 lg:aspect-h-1 shadow-lg cursor-pointer hover:shadow-2xl hover:scale-[0.85] hover:text-center hover:text-3xl hover:w-full 
      transition-all duration-75 ease-in-out"
    >
      <h1 className="text-xl ml-5 text-blue-900 font-semibold md:text-2xl lg:text-3xl">
        {name}
      </h1>
      <img
        className="w-[300px] sm:w-[500px] md:w-[600px] lg:w-full h-[200px] md:h-full object-center object-cover hover:opacity-25"
        src={img}
        alt={name + " generic " + "image"}
      />
    </div>
  );
}

// export default function Cards({ name, link, img }) {
//   return (
//     <Link to={link}>
//       <div className="flex flex-col justify-center items-center rounded-2xl overflow-hidden shadow-lg cursor-pointer hover:shadow-2xl hover:scale-[0.85] hover:translate-x-3 hover:skew-y-3 transition-all duration-90 ease-in">
//         <h1 className="text-xl text-gray-800 font-semibold md:text-2xl lg:text-3xl">
//           {name}
//         </h1>
//         <img
//           className="w-[200px] h-[200px] rounded-2xl bg-gradient-to-r from-[#b509e0] to-[#7d0cbe] opacity-70 z-1 hover:opacity-20"
//           src={img}
//           alt={name + " generic " + "image"}
//         />

//         <div className="px-6 pt-4 pb-2">
//           <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//             Click to see more
//           </span>
//         </div>
//       </div>
//     </Link>
//   );
// }
