import React from "react";
import { projects } from "../data/projects";
import { FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
} from "react-icons/si";
import jefferson from "../images/jefferson.jpg";

const skills = [
  {
    icon: <FaJs className="text-yellow-400 text-3xl" />,
    name: "JavaScript",
    desc: "I use JavaScript to build interactive client-side experiences and add functionality to web applications.",
  },
  {
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
    name: "TypeScript",
    desc: "TypeScript enhances my JavaScript with type safety, helping me write more maintainable and bug-free code.",
  },
  {
    icon: <FaHtml5 className="text-orange-500 text-3xl" />,
    name: "HTML5",
    desc: "I use semantic HTML to structure web content clearly and accessibly.",
  },
  {
    icon: <FaCss3Alt className="text-blue-600 text-3xl" />,
    name: "CSS3",
    desc: "I style responsive layouts and design polished user interfaces using modern CSS.",
  },
  {
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    name: "React.js",
    desc: "React lets me build scalable, component-based UIs for complex frontend applications.",
  },
  {
    icon: <SiRedux className="text-purple-400 text-3xl" />,
    name: "Redux Toolkit / RTK Query",
    desc: "I use Redux Toolkit and RTK Query to manage app state and handle API interactions efficiently.",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
    name: "Node.js",
    desc: "Node.js powers my server-side applications and APIs with JavaScript runtime.",
  },
  {
    icon: <SiExpress className="text-gray-300 text-3xl" />,
    name: "Express.js",
    desc: "Express helps me build robust backend APIs quickly using minimal setup.",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    name: "Tailwind CSS",
    desc: "Tailwind enables me to create modern, responsive designs directly in my markup.",
  },
  {
    icon: <SiMongodb className="text-green-600 text-3xl" />,
    name: "MongoDB",
    desc: "I use MongoDB to model and store data for scalable applications in a flexible NoSQL format.",
  },
  {
    icon: <SiFirebase className="text-yellow-500 text-3xl" />,
    name: "Firebase",
    desc: "Firebase helps me integrate real-time databases and deploy secure, full-featured applications.",
  },
];

const Content = () => {
  return (
    <>
      <section
        id="about-me"
        aria-label="Personal Introduction"
        className="bg-[#180e2a] px-6 py-20 flex items-center"
      >
        <div className="max-w-5xl mx-auto text-white text-center">
          <h1 className="text-4xl font-bold text-amber-300 mb-6">About Me</h1>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <img
              src={jefferson}
              className="w-40 h-40 rounded-full object-cover border-gray-500 shadow-lg"
              alt="Profile"
            />
            <p className="text-lg font-light max-w-3xl">
              I'm a passionate developer who enjoys transforming ideas into
              real-world products. I specialize in full-stack web development,
              working on both the front and back end to create seamless digital
              experiences. My mission is to craft clean, efficient, and scalable
              solutions that empower businesses and users alike.
            </p>
          </div>
        </div>
      </section>

      <section
        id="why-me"
        aria-label="Why choose me"
        className="bg-[#180e2a] px-6 py-20"
      >
        <div className="flex flex-col md:flex-row font-sans justify-start items-start gap-10 max-w-7xl mx-auto w-full">
          <div className="flex-1">
            <h1 className="text-4xl text-amber-300 font-bold mb-6 px-2 leading-snug">
              <span className="text-red-700">Wondering</span> why I’m the right
              fit for your next project?
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-amber-300 text-lg mb-3">
                5 Star Experience
              </h2>
              <p className="font-light line-clamp-3 text-white">
                I have 5 star experience in crafting highly scalable solutions
                for different industries, having been in the field for close to
                a decade.
              </p>
            </div>
            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-amber-300 text-lg mb-3">
                Track Record
              </h2>
              <p className="text-white line-clamp-3 font-light">
                I have a proven track record of delivering high-quality projects
                on time and within budget, ensuring client satisfaction and
                long-term partnerships.
              </p>
            </div>
            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-lg text-amber-300 mb-3">
                Client Oriented
              </h2>
              <p className="font-light line-clamp-3 text-white">
                I prioritize client needs and work closely with them to ensure
                the final product meets their expectations and business goals.
              </p>
            </div>
            <div className="bg-[#12091b] p-6 rounded-lg shadow-md">
              <h2 className="font-bold text-lg text-amber-300 mb-3">
                Long-term Support
              </h2>
              <p className="font-light line-clamp-3 text-white">
                I offer ongoing support and maintenance to ensure your project
                remains up-to-date, secure, and functional for the long term.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="skills"
        aria-label="Technical skills"
        className="bg-[#180e2a] py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-amber-300 text-center mb-12">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-[#12091b] p-6 rounded-lg shadow-md text-white flex flex-col gap-4 items-start"
              >
                <div>{skill.icon}</div>
                <h3 className="text-lg font-bold text-amber-300">
                  {skill.name}
                </h3>
                <p className="font-light">{skill.desc}</p>
              </div>
            ))}
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
                <h2 className="text-xl text-amber-300 font-bold mb-3">
                  {project.title}
                </h2>
                <p className="text-white line-clamp-3 mb-4">
                  {project.description}
                </p>
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
