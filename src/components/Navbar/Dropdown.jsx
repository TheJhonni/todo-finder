import React, { createRef, useState } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from "react-router-dom";

const Dropdown = ({ color }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = createRef();
  const popoverDropdownRef = createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-blueGray-700")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={
                "text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
                bgColor
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Help the Traveller
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
            >
              <Link to="/games">
                <p
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  Games
                </p>
              </Link>
              <Link to="/culture">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  Culture
                </a>
              </Link>
              <Link to="/food">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  Food
                </a>
              </Link>
              <Link to="/movies">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  Movies
                </a>
              </Link>
              <Link to="/news">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  News
                </a>
              </Link>
              <Link to="/welness">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  Welness
                </a>
              </Link>
              <div className="h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-25" />
              <Link to="/">
                <a
                  href="#pablo"
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent " +
                    (color === "white" ? " text-blueGray-700" : "text-white")
                  }
                >
                  Homepage
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="teal" />
    </>
  );
}
