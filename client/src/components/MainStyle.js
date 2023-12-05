// MainStyle.js
import React, { useEffect, useRef } from "react";

export default function MainStyle() {
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
    <div
      ref={heroRef}
      className="hero bg-gray-800 text-white p-4 z-50 h-screen "
    ></div>
  );
}
