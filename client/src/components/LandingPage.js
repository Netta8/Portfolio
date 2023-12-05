import React from "react";
import "../App.css";

export default function LandingPage() {
  return (
    <div>
      <main>
        <div className="flex flex-col">
          <h5 className="title-font sm:text-sm text-3xl mb-4 font-medium">
            Hi, my name is
            <br className="hidden lg:inline-block" />
          </h5>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Netta Barel
            <br className="hidden lg:inline-block" />
          </h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            A Full-Stack Web Developer
          </h1>
        </div>
      </main>
    </div>
  );
}
