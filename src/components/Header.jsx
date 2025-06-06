import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full mb-6 bg-[#cbfbf1] text-blue-700 p-4 fixed top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Vincent Ochieng</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700 focus:outline-none"
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
              <a
                href="#about"
                className="hover:bg-blue-700 hover:text-white transition px-2 py-1 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:bg-blue-700 hover:text-white transition px-2 py-1 rounded"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="hover:bg-blue-700 hover:text-white transition px-2 py-1 rounded"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#about"
                className="block hover:bg-blue-700 hover:text-white transition px-2 py-1 rounded"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:bg-blue-700 hover:text-white transition px-2 py-1 rounded"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contacts"
                className="block hover:bg-blue-700 hover:text-white transition px-2 py-1 rounded"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
