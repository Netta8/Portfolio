import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const BurgerMenu = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50">
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none text-2xl m-4"
      >
        ☰
      </button>
      {isOpen && (
        <div className="bg-gray-800/50 fixed top-0 left-0 h-screen w-50 p-4 z-50">
          <nav className="flex flex-col mt-10 text-white">
            <Link
              to="/"
              className="font-mono font-bold my-2 hover:text-green-400 transition duration-300 ease-in-out"
              onClick={closeMenu}
            >
              Netta Barel
            </Link>
            <Link
              to="/about"
              className={`my-2 hover:text-green-400 transition duration-300 ease-in-out ${
                location.pathname === "/about" &&
                "text-white underline decoration-wavy decoration-green-400"
              }`}
              onClick={closeMenu}
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className={`my-2 hover:text-green-400 transition duration-300 ease-in-out ${
                location.pathname === "/projects" &&
                "text-white underline decoration-wavy decoration-green-400"
              }`}
              onClick={closeMenu}
            >
              Latest Projects
            </Link>
            <Link
              to="/skills"
              className={`my-2 hover:text-green-400 transition duration-300 ease-in-out ${
                location.pathname === "/skills" &&
                "text-white underline decoration-wavy decoration-green-400"
              }`}
              onClick={closeMenu}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className={`my-2 hover:text-green-400 transition duration-300 ease-in-out ${
                location.pathname === "/contact" &&
                "text-white underline decoration-wavy decoration-green-400"
              }`}
              onClick={closeMenu}
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
      )}
    </div>
  );
};

export default BurgerMenu;
