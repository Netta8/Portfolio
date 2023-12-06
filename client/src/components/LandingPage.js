import React from "react";
import "../App.css";

export default function LandingPage() {
  return (
    <div>
      <div className="flex flex-wrap ">
        <h5 className="title-font text-green-400 text-xl mb-4 font-medium typewriter ">
          Hi, my name is
        </h5>
      </div>
      <main>
        <div className="flex flex-col ">
          <h1 className="title-font text-9xl mb-4 font-medium">Netta Barel</h1>
          <h3 className=" text-4xl mb-4 ">A Full-Stack Web Developer</h3>
        </div>
      </main>
    </div>
  );
}
