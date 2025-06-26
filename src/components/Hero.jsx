import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import profile from "../images/profile.jpg";

const Hero = () => {
  return (
    <>
      <div id="hero" className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full px-4 pt-20 sm:pt-28 text-center font-sans text-white gap-4">
        <div className="w-40 h-40">
          <img
            src={profile}
            alt="profile picture"
            className="w-full h-full rounded-full border-gray-200 border-4 shadow-lg object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center p-4">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I am <span className="text-amber-500">Vincent Ochieng</span>
          </h1>

          <p className="max-w-prose text-xl font-light mb-2">
            I am a software engineer with a passion for building responsive web
            applications and creating innovative solutions. I specialize in
            Front-End development, with expertise in React. Let's work together
            to bring your ideas to life!
          </p>

          <div className="flex space-x-6 mt-1 text-2xl">
            <a
              href="https://github.com/vin9cent"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://linkedin.com/in/vincent-ochieng-406076257"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:your.ookovincent616@gmail.com"
              aria-label="Email"
              className="hover:text-white transition"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
