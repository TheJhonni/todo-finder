// import React from "react";
// import { FaTrash } from "react-icons/fa";
// import { useSelector, useDispatch } from "react-redux";
// import { removeFromSaved } from "../redux/savedReducer";

// export default function Saved({ savedPosts }) {
//   const dispatch = useDispatch();
//   return (
//     <div className="img-textLeft h-full w-full">
//       <h1 className="text-centern py-5 shadow-xl text-2xl my-4">
//         THE NUMBER OF YOUR SAVED POSTS IS : {savedPosts.length}
//       </h1>
//       <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
//         {savedPosts &&
//           savedPosts.map((savedPost, i) => (
//             <div key={i} className="group relative">
//               <div className="relative w-full rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
//                 <img
//                   src={savedPost.img1}
//                   alt={savedPost.title + "image"}
//                   className="w-full h-full object-center object-cover"
//                 />
//               </div>
//               <h3 className="mt-6 text-sm text-gray-400">
//                 <a href="#">
//                   <span className="absolute inset-0 "></span>
//                   {savedPost.title}
//                 </a>
//               </h3>
//               <p className="text-base font-semibold text-white ">
//                 {savedPost.p}
//               </p>
//               <div className="flex space-x-3 justify-center align-center px-6 pt-4 pb-3">
//                 <button
//                   onClick={() => dispatch(removeFromSaved(savedPost.asin))}
//                 >
//                   <FaTrash className="cursor-pointer text-red-700" />
//                 </button>
//                 <span className="inline-block bg-gray-200 rounded-full px-3 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   {savedPost.category}
//                 </span>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
