import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-transparent fixed left-0 top-0 h-full z-10 p-4">
      <div className="flex flex-col items-center">
        <nav className="flex flex-col items-center text-base">
          <Link
            to="/about"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2  ${
              location.pathname === "/about"
                ? "text-white underline decoration-wavy"
                : "text-gray-400"
            }`}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2 ${
              location.pathname === "/projects"
                ? "text-white  underline decoration-wavy"
                : "text-gray-400"
            }`}
          >
            Past Work
          </Link>
          <Link
            to="/skills"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2 ${
              location.pathname === "/skills"
                ? "text-white underline decoration-wavy"
                : "text-gray-400"
            }`}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2 ${
              location.pathname === "/contact"
                ? "text-white underline decoration-wavy"
                : "text-gray-400"
            }`}
          >
            Contact Me
          </Link>
        </nav>
      </div>
    </header>
  );
}
