import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:5000/contact/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Message sent successfully:", data);
        alert("Message sent!");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Error sending message.");
      });
  }
  return (
    <section
      id="contact"
      className="container px-5 py-10 mx-auto text-center lg:px-40"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap component-wrapper">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <div className="map">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Berlin,+Germany&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <div className="addressAnsEmail-contact bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                <a className="text-green-400 leading-relaxed">
                  13587, Berlin Germany
                </a>
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-green-400 leading-relaxed">
                netta7398@gmail.com
              </a>
            </div>
          </div>
        </div>
        <form
          action="http://localhost:5000/contact/create"
          method="POST"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className=" sm:text-4xl text-3xl mb-1 font-medium title-font typewriter">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">
            Have a question or want to work together? Send me an a Message
            through this form
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-400 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className=" text-white bg-blue-500 border-0 py-2 px-6 text-center focus:outline-none hover:bg-green-400 hover:text-black rounded text-lg"
          >
            Submit
          </button>
          <p className="leading-relaxed mt-5 ">You can also find me here:</p>
          <p className="leading-relaxed mb-5">netta7398@gmail.com</p>
          <div className="flex justify-center space-x-4 mb-4">
            <div className="hover:text-green-400 transition duration-300 ease-in-out">
              <a
                href="https://www.linkedin.com/in/netta-barel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="hover:text-green-400 transition duration-300 ease-in-out">
              <a
                href="https://github.com/Netta8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="hover:text-green-400 transition duration-300 ease-in-out">
              <a href="mailto:netta7398@gmail.com" rel="noopener noreferrer">
                <EmailIcon />
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
