import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const heroRef = useRef(null);

  const updateMousePosition = (ev) => {
    if (!heroRef.current) return;
    const { clientX, clientY } = ev;
    heroRef.current.style.setProperty("--x", `${clientX}px`);
    heroRef.current.style.setProperty("--y", `${clientY}px`);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <main
      ref={heroRef}
      className="hero bg-gray-800 text-white p-4 z-50 h-screen "
    >
      <div className="flex flex-col">
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default Layout;
