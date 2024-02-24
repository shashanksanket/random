import { useState } from "react";

export default function Navbar() {
  const [tab, setTab] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="fixed w-full bg-slate-100 backdrop-blur-md bg-opacity-50 z-10 flex justify-between px-4 md:px-20 py-4">
      <img src="/images/logo.png" className="w-16 md:w-32" alt="Logo" />
      <div className="hidden md:flex gap-x-16 items-center">
        <p
          className={`hover:border-b cursor-pointer ${
            tab === 1 ? "text-blue-800" : ""
          } `}
          onClick={() => setTab(1)}
        >
          Home
        </p>
        <p
          className={`hover:border-b cursor-pointer ${
            tab === 2 ? "text-blue-800" : ""
          }`}
          onClick={() => setTab(2)}
        >
          Products
        </p>
        <p
          className={`hover:border-b cursor-pointer ${
            tab === 3 ? "text-blue-800" : ""
          }`}
          onClick={() => setTab(3)}
        >
          Blogs
        </p>
        <p
          className={`hover:border-b cursor-pointer ${
            tab === 4 ? "text-blue-800" : ""
          }`}
          onClick={() => setTab(4)}
        >
          Contact Us
        </p>
      </div>
      <div className="md:hidden">
        <button
          className="text-blue-800 focus:outline-none"
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                showMenu
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
        {showMenu && (
          <div className="absolute right-0 mt-16 bg-white border shadow-md rounded-md p-2 space-y-2">
            <p
              className="hover:text-blue-800 cursor-pointer"
              onClick={() => {
                setTab(1);
                setShowMenu(false);
              }}
            >
              Home
            </p>
            <p
              className="hover:text-blue-800 cursor-pointer"
              onClick={() => {
                setTab(2);
                setShowMenu(false);
              }}
            >
              Products
            </p>
            <p
              className="hover:text-blue-800 cursor-pointer"
              onClick={() => {
                setTab(3);
                setShowMenu(false);
              }}
            >
              Blogs
            </p>
            <p
              className="hover:text-blue-800 cursor-pointer"
              onClick={() => {
                setTab(4);
                setShowMenu(false);
              }}
            >
              Contact Us
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
