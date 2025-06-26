import React from "react";
import { projects } from "../data/projects";

const Content = () => {
  return (
    <>
      <section
        id="about"
        aria-label="About me"
        className="bg-[#180e2a] py-20 px-6"
      >
        <div className="flex flex-col md:flex-row font-sans justify-start items-start gap-10 max-w-7xl mx-auto">
          <div className="flex-1">
            <h1 className="text-4xl  text-amber-300 font-bold mb-6 px-2">
              <span className="text-red-700">Wondering</span> why I’m the right
              fit for your next project?
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold  text-amber-300  text-lg mb-3">
                5 Star Experience
              </h2>
              <p className="font-light text-white">
                I have 5 star experience in crafting highly scalable solutions
                for different industries, having been in the field for close to
                a decade.
              </p>
            </div>

            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold  text-amber-300  text-lg mb-3">
                Track Record
              </h2>
              <p className=" text-white font-light">
                I have a proven track record of delivering high-quality projects
                on time and within budget, ensuring client satisfaction and
                long-term partnerships.
              </p>
            </div>

            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-lg  text-amber-300 mb-3">
                Client Oriented
              </h2>
              <p className="font-light text-white">
                I prioritize client needs and work closely with them to ensure
                the final product meets their expectations and business goals.
              </p>
            </div>

            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-lg  text-amber-300 mb-3">
                Long-term Support
              </h2>
              <p className="font-light text-white">
                I offer ongoing support and maintenance to ensure your project
                remains up-to-date, secure, and functional for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-[#180e2a] px-6">
        <h1 className="text-4xl text-amber-300 font-bold text-center mb-12 px-2">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <article
              key={project.id}
              className="bg-[#12091b] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl text-amber-300 font-bold mb-3">{project.title}</h2>
                <p className="text-white mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Content;
