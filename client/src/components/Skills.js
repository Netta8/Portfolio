import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <div className="component-wrapper">
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className=" flex flex-wrap  ">
              <h1 className="text-lg mb-3 typewriter">
                {" "}
                Skills &amp; Technologies
              </h1>
            </div>
            <p className="mb-8 tracking-wide leading-relaxed">
              Over the past year, I have diligently cultivated a diverse set of
              skills that have not only expanded my professional capabilities
              but have also fueled my passion for continuous growth. allowing me
              to navigate and contribute effectively in dynamic environments.
              What sets me apart is not just the knowledge I've gained, but also
              my unwavering enthusiasm for learning. I am open to embracing new
              challenges, languages, and methodologies, as I firmly believe that
              adaptability is the key to success in today's rapidly evolving
              landscape. This mindset has not only defined my past achievements
              but also propels me forward in pursuit of further excellence.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill.title} className="p-2 sm:w-1/5 w-full">
                <div className="bg-transparent rounded flex p-4 h-full items-center transform transition duration-300 ease-in-out hover:shadow-lg">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-10 h-10 object-cover object-center rounded-full"
                  />
                  <span className="title-font font-medium text-white ml-3">
                    {skill.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
