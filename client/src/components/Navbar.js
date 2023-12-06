import React from "react";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-transparent fixed left-0 top-0 h-full z-10 p-4">
      <div className="flex flex-col items-center">
        <nav className="flex flex-col items-center text-base">
          <Link
            to="/"
            className=" font-mono font-bold my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2"
          >
            Netta Barel
          </Link>
          <Link
            to="/about"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2  ${
              location.pathname === "/about"
                ? "text-white underline decoration-wavy decoration-green-400"
                : "text-gray-400"
            }`}
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2 ${
              location.pathname === "/projects"
                ? "text-white  underline decoration-wavy decoration-green-400"
                : "text-gray-400"
            }`}
          >
            Latest Projects
          </Link>
          <Link
            to="/skills"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2 ${
              location.pathname === "/skills"
                ? "text-white underline decoration-wavy decoration-green-400"
                : "text-gray-400"
            }`}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={`my-2 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 rounded-full p-2 ${
              location.pathname === "/contact"
                ? "text-white underline decoration-wavy decoration-green-400"
                : "text-gray-400"
            }`}
          >
            Contact Me
          </Link>
        </nav>
        <div className="fixed bottom-4 flex space-x-4 mb-4">
          <div className="hover:text-green-400 transition duration-300 ease-in-out">
            <a
              href="https://www.linkedin.com/in/netta-barel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="hover:text-green-400 transition duration-300 ease-in-out">
            <a
              href="https://github.com/Netta8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div className="hover:text-green-400 transition duration-300 ease-in-out">
            <a href="mailto:netta7398@gmail.com" rel="noopener noreferrer">
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
