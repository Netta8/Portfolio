import React from "react";
import "../App.css";

export default function LandingPage() {
  return (
    <div className="landing-page-container flex justify-center items-center h-screen">
      <div>
        <div className="w-fit">
          <h5 className="title-font text-green-400 text-xl mb-4 font-medium typewriter">
            Hi, my name is
          </h5>
        </div>
        <div>
          <h1 className="title-font text-7xl mb-4 font-medium">Netta Barel</h1>
          <h3 className="text-3xl mb-4">I'm a Full-Stack Web Developer</h3>
        </div>
      </div>
    </div>
  );
}
