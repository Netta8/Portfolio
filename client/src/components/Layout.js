import React, { useRef, useEffect, useState } from "react";
import Navbar from "./Navbar";
import BurgerMenu from "./BurgerMenu";

const Layout = ({ children }) => {
  const heroRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateMousePosition = (ev) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = ev;
    heroRef.current.style.setProperty("--x", `${clientX}px`);
    heroRef.current.style.setProperty("--y", `${clientY}px`);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      ref={heroRef}
      className="hero bg-gray-800 text-white p-4 z-50 h-screen "
    >
      <div className="flex flex-col">
        {isSmallScreen ? <BurgerMenu /> : <Navbar />}
        {children}
      </div>
    </main>
  );
};

export default Layout;
