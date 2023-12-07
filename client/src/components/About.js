import React from "react";
import MyResumePDF from "../CV_Netta _Barel_English.pdf";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

export default function About() {
  const downloadResumeEnglish = () => {
    const link = document.createElement("a");
    link.href = MyResumePDF;
    link.download = "CV_Netta _Barel_English.pdf";
    link.click();
  };

  const downloadResumeGerman = () => {
    const link = document.createElement("a");
    link.href = MyResumePDF;
    link.download = "Resume_Netta_Barel_Deutsch.pdf";
    link.click();
  };

  return (
    <div className="component-wrapper">
      <section id="about">
        <div className="container px-5 py-10 mx-auto md:mx-auto md:w-full lg:w-full lg:mx-auto lg:max-w-screen-md lg:pl-8">
          <div className="lg:flex-grow md:w-full lg:pr-24 md:pr-16 md:ml-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className=" flex flex-wrap  ">
              <h1 className="text-lg mb-3 typewriter">Some Info about me:</h1>
            </div>

            <p className="mb-8 tracking-wide leading-relaxed">
              At the age of 16, influenced by my mother's career as a
              Kindergarten teacher, I initially chose to follow a similar path.
              However, as time progressed, I began to feel that my ambitions
              were outgrowing that career trajectory. Seeking greater
              challenges, I pursued studies in{" "}
              <strong>Business Administration at The Open University</strong>,
              leading me to discover my affinity for the IT domain, specifically
              in Programming. My most recent technical journey involved a
              comprehensive Weiterbildung as a{" "}
              <strong>
                Full Stack Web Developer at the Digital Career Institute
              </strong>{" "}
              in Berlin.
            </p>
            <p className="mb-8 tracking-wide leading-relaxed">
              This experience has endowed me with proficiency in a range of
              technologies, including HTML, CSS, JavaScript, Bootstrap, React,
              Node.js, Express.js, MongoDB, Git, Linux, Windows, as well as
              tools like VS Code and MS Office. I possess practical experience
              in developing web-based software and possess a strong command of
              git-based versioning systems.
            </p>

            <div className="flex space-x-4">
              <div className="flex justify-center mt-8">
                <button
                  onClick={downloadResumeEnglish}
                  className="text-green-400 border-2 border-green-400 rounded-3xl py-1 px-2 sm:px-3 md:px-4 lg:px-5 hover:text-black rounded text-xs sm:text-sm md:text-base lg:text-lg transition-all hover:duration-300 ease-in-out"
                >
                  English Résumé <FileDownloadIcon />
                </button>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={downloadResumeGerman}
                  className="text-green-400 border-2 border-green-400 rounded-3xl py-1 px-2 sm:px-3 md:px-4 lg:px-5 hover:text-black rounded text-xs sm:text-sm md:text-base lg:text-lg transition-all hover:duration-300 ease-in-out"
                >
                  Deutsch Résumé <FileDownloadIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
