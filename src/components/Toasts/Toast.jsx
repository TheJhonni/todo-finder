import React from "react";
import { ToastContainer } from "react-toastify";

export default function Toast() {
  return (
    <ToastContainer
      toastStyle={{ backgroundColor: "#1E667C", color: "#FFFFFF" }}
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
}
