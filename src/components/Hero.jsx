import React from 'react'
import jefferson from '../images/jefferson.jpg'

const Hero = () => {
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <>
      <div className="w-full h-screen font-serif bg-gradient-to-r from-blue-500 to-green-500 flex flex-col lg:flex-row justify-between items-center overflow-hidden px-4">
        <div className="max-w-xs ml-6 sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto">
          <img
            src={jefferson}
            alt="Vincent Ochieng"
            width={500}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col justify-center ml-2 mr-16 p-2">
          <h1 className="text-5xl font-bold m-5 p-2">
            Vincent <span className="text-white">Ochieng</span>
          </h1>
          <p className="max-w-96 text-lg m-5 p-2">
            I am a software engineer with a passion for building web
            applications and creating innovative solutions. I specialize in
            Front-End development, with expertise in React. Let's work together
            to bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 m-5 p-2">
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
          <div className="flex flex-col justify-center ml-2 mr-16 p-2">
            <h2 className="text-2xl font-bold text-pink-800 p-2">
              Let's Build Something Awesome
            </h2>
            <p className="max-w-96 p-2 text-lg text-stone-800">
              Whether it's a <span className='text-rose-600'> rough idea </span> or a <span className='text-rose-600'>detailed plan</span>, I’m here to help you bring it to life.
              Let's team up and make something amazing.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;