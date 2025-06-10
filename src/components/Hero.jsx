import React from "react";
import jefferson from "../images/jefferson.jpg";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen pt-24 sm:pt-28 font-serif bg-gradient-to-r from-blue-500 to-green-500 flex flex-col lg:flex-row items-center gap-x-32 px-4">
      <div className="flex max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto">
        <img
          src={jefferson}
          alt="Vincent Ochieng"
          width={500}
          className="w-full h-auto object-contain rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>

      <div className="flex flex-col justify-center p-4">
        <h1 className="text-5xl font-bold mb-4">
          Vincent <span className="text-white">Ochieng</span>
        </h1>

        <p className="max-w-prose text-lg mb-6 text-white">
          I am a software engineer with a passion for building web applications
          and creating innovative solutions. I specialize in Front-End
          development, with expertise in React. Let's work together to bring
          your ideas to life!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Recent work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
          >
            Learn more
          </button>
        </div>

        <div className="p-4 bg-white bg-opacity-20 rounded-lg">
          <h2 className="text-2xl font-bold text-pink-800 mb-2">
            Let's Build Something Awesome
          </h2>
          <p className="max-w-prose text-lg text-stone-800">
            Whether it's a <span className="text-rose-600">rough idea</span> or
            a <span className="text-rose-600">detailed plan</span>, I’m here to
            help you bring it to life. Let's team up and make something amazing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
