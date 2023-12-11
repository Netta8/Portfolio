import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <div className="component-wrapper">
      <section id="projects">
        <div className="container px-4 sm:px-8 py-10 mx-auto">
          <div className="md:w-full lg:mx-auto lg:max-w-screen-md lg:pl-8">
            <div className="lg:flex-grow md:w-full lg:pr-4 sm:pr-2 md:pr-2 md:ml-4 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
              <div className="flex flex-wrap">
                <h1 className="text-lg mb-3 typewriter"> Apps I've Built</h1>
              </div>
              <p className="mb-6 tracking-wide leading-relaxed">
                Here are the latest projects I've been working on. Each project
                is a reflection of my coding and design skills, as well as a
                journey of problem-solving, collaboration, and ongoing learning.
                Take a moment to explore this collection of projects, each with
                its distinct challenges and successes.
              </p>
              <div className="flex flex-wrap -m-2 sm:-m-0">
                {projects.map((project) => (
                  <a
                    href={project.link}
                    key={project.image}
                    className="project-header sm:w-1/2 md:w-1/3 p-2 relative overflow-hidden"
                  >
                    <div className="relative flex flex-col items-center">
                      <img
                        alt="gallery"
                        className="project-image w-full h-full object-cover object-center"
                        src={project.image}
                      />
                    </div>
                    <div className="p-2 bg-transparent text-white text-center">
                      <h2 className="tracking-widest text-sm font-medium text-green-400 mb-1">
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium mb-2">
                        {project.title}
                      </h1>
                      <p className="leading-relaxed project-description">
                        {project.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
