import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinkClass =
    "cursor-pointer hover:bg-amber-300 hover:text-[#180e2a] transition px-2 py-1 rounded";
  const activeClass = "bg-amber-300 text-[#180e2a]";

  return (
    <header className="w-full mb-6 bg-[#180e2a] text-white p-4 fixed top-0 z-50">
      <div className="flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center"
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <Link
                to="about-me"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="why-me"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
              >
                Why Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="about-me"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="why-me"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Why Me
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contacts"
                smooth={true}
                offset={-100}
                duration={500}
                spy={true}
                activeClass={activeClass}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
