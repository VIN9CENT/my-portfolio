import React from "react";
import { projects } from "../data/projects";

const Content = () => {

  return (
    <>
      <section
        id="about"
        className="bg-[#F1FAFB] p-6 md:p-10 flex overflow-hidden"
      >
        <div className="flex flex-col md:flex-row justify-start items-start px-6 md:px-16 gap-8">
          <div className="flex-1 flex justify-center items-center">
            <h1 className="ml-6 md:ml-10 mb-10 pt-12 text-3xl md:text-4xl font-bold">
              <span className="text-red-700">Wondering</span> why I’m the right fit for your next
              project?
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            <div className="w-full max-w-[300px] bg-[#1BC8D3] p-6 md:p-10">
              <h1 className="font-bold text-lg mb-4">
                5 star
                <br />
                Experience
              </h1>
              <p className="text-lg">
                I have 5 star experience in crafting highly scalable solutions
                for different industries having been in the field for close to a
                decade.
              </p>
            </div>
            <div className="w-full max-w-[300px] bg-[#1BC8D3] p-6 md:p-10">
              <h1 className="font-bold mb-4 text-lg">
                Track
                <br />
                Record
              </h1>
              <p className="text-lg">
                I have a proven track record of delivering high-quality projects
                on time and within budget, ensuring client satisfaction and
                long-term partnerships.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="w-full max-w-[300px] bg-[#292A2B] text-white p-6 md:p-10">
              <h1 className="font-bold mb-4 text-lg">Client Oriented</h1>
              <p className="text-lg">
                I prioritize client needs and work closely with them to
                understand their requirements, ensuring that the final product
                meets their expectations and business goals.
              </p>
            </div>
            <div className="w-full max-w-[300px] bg-[#292A2B] text-white p-6 md:p-10">
              <h1 className="font-bold mb-4 text-lg">Long-term Support</h1>
              <p className="text-lg">
                I offer ongoing support and maintenance services to ensure that
                your project remains up-to-date, secure, and functional,
                providing peace of mind for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="mt-32 p-6">
        <h1 className="text-right mr-6 md:mr-20 text-4xl md:text-5xl font-bold mb-10">
          Recent Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700">{project.description}</p>
                <p className="text-blue-600">{project.link}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Content;
