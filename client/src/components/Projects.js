import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="component-wrapper">
      <section id="projects">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className=" flex flex-wrap  ">
              <h1 className="text-lg typewriter"> Apps I've Built</h1>
            </div>
            <p className="mb-8 tracking-wide leading-relaxed">
              Here are the latest projects I've been working on. Each project is
              a reflection of my coding and design skills, as well as a journey
              of problem-solving, collaboration, and ongoing learning. Take a
              moment to explore this collection of projects, each with its
              distinct challenges and successes.
            </p>
            <div className="flex flex-wrap -m-4">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="sm:w-1/2 w-100 p-4"
                >
                  <div className="flex relative">
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-64 object-cover object-center"
                      src={project.image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
