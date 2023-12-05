import React from "react";

export default function About() {
  return (
    <div className="component-wrapper">
      <section id="about">
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className=" flex flex-wrap ">
              <h1 className="text-lg typewriter">Some Info about me</h1>
            </div>
            <p className="mb-8 leading-relaxed">
              At the age of 16, influenced by my mother's career as a
              Kindergarten teacher, I initially chose to follow a similar path.
              However, as time progressed, I began to feel that my ambitions
              were outgrowing that career trajectory. Seeking greater
              challenges, I pursued studies in Business Administration, leading
              me to discover my affinity for the IT domain, specifically in
              Programming. My most recent technical journey involved a
              comprehensive Weiterbildung as a Full Stack Web Developer at the
              Digital Career Institute in Berlin.
            </p>
            <p className="mb-8 leading-relaxed">
              This experience has endowed me with proficiency in a range of
              technologies, including HTML, CSS, JavaScript, Bootstrap, React,
              Node.js, Express.js, MongoDB, Git, Linux, Windows, as well as
              tools like VS Code and MS Office. I possess practical experience
              in developing web-based software and possess a strong command of
              git-based versioning systems.
            </p>
            <p className="mb-8 leading-relaxed">
              Furthermore, my background in Kindergarten teaching has nurtured
              my ability to work collaboratively, showcasing my adeptness at
              multitasking, always maintaining a comprehensive perspective, and
              embodying qualities such as patience and empathy – traits that
              enable me to efficiently solve problems and contribute effectively
              to a team.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 hover:text-black rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-200 hover:text-black rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
