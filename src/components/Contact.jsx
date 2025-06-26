import React, { useState, useEffect } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="contacts"
      className="relative flex flex-col md:flex-row bg-[#180e2a] p-8 rounded-lg gap-8 shadow-md scroll-mt-20"
      role="region"
      aria-labelledby="contact-heading"
    >
      <div className="flex-1">
        <h2
          id="contact-heading"
          className="text-3xl text-amber-300 font-bold mb-2"
        >
          Contact Me
        </h2>
        <p className="text-white mb-6" id="contact-description">
          Leave me a message using the form below.
        </p>

        <form
          className="space-y-4"
          action="https://formsubmit.co/ookovincent616@gmail.com"
          method="POST"
          aria-describedby="contact-description"
        >
          <div>
            <label className="block text-white mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#12091b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#12091b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded bg-[#12091b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-red-700 text-white py-3 rounded hover:bg-red-800 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <div
        className="flex-1 mt-10 md:mt-0 text-white"
        role="contentinfo"
        aria-label="Contact details"
      >
        <h3 className="text-amber-300 font-bold text-3xl mb-4">Contact Info</h3>
        <p className="mb-6">Feel free to reach out for any enquiries</p>

        <a
          href="mailto:ookovincent616@gmail.com"
          className="relative group flex items-center gap-4 mb-6 focus:outline-none"
          aria-label="Email me"
        >
          <MdOutlineMail className="text-3xl border p-2 rounded-full" />
          <span>Email Me</span>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition">
            Click to email me
          </span>
        </a>

        <a
          href="tel:+254712345678"
          className="relative group flex items-center gap-4 mb-6 focus:outline-none"
          aria-label="Call me"
        >
          <FiPhoneCall className="text-3xl border p-2 rounded-full" />
          <span>Call Me</span>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition">
            Click to call me
          </span>
        </a>

        <div
          className="relative group flex items-center gap-4 focus:outline-none"
          tabIndex="0"
          aria-label="Located in Nairobi, Kenya"
        >
          <GoLocation className="text-3xl border p-2 rounded-full" />
          <span>Nairobi, Kenya</span>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition">
            My location
          </span>
        </div>
      </div>
      {showTopBtn && (
        <a
          href="#"
          className="fixed bottom-16 right-6 z-50 bg-amber-300 text-[#180e2a] px-4 py-2 rounded-full shadow-lg hover:bg-amber-400 transition duration-300"
          aria-label="Back to top"
        >
          ↑ Top
        </a>
      )}
    </section>
  );
};

export default Contact;
