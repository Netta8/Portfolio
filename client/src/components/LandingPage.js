import React from "react";
import "../App.css";

export default function LandingPage() {
  return (
    <div>
      <div className=" w-56 ">
        <h5 className=" title-font text-green-400 text-xl mb-4 font-medium typewriter ">
          Hi, my name is
        </h5>
      </div>
      <div className="flex flex-wrap "></div>
      <main>
        <div className="flex flex-col ">
          <h1 className="title-font text-7xl mb-4 font-medium">Netta Barel</h1>
          <h3 className=" text-3xl mb-4 ">A Full-Stack Web Developer</h3>
        </div>
      </main>
    </div>
  );
}
