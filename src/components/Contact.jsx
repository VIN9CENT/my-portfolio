import React, { useEffect, useState } from "react";
import { MdOutlineMail, MdPhone, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("submitted") === "true") {
      setSubmitted(true);
    }
  }, []);

  return (
    <section id="contacts" className="bg-[#180e2a] p-8 rounded-lg shadow-md">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          {submitted && (
            <div className="mb-4 p-4 bg-green-700 text-white rounded text-center">
              Message sent successfully!
            </div>
          )}
          <h2 className="text-3xl text-amber-300 font-bold mb-2">Contact Me</h2>
          <p className="text-white mb-6">Leave me a message</p>
          <form
            action="https://formsubmit.co/ookovincent616@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://vincent-ochieng.netlify.app/?submitted=true"
            />
            <div>
              <label htmlFor="name" className="block text-white mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-2 rounded bg-[#12091b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-2 rounded bg-[#12091b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="8"
                placeholder="Your Message"
                required
                className="w-full p-2 rounded bg-[#12091b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white py-2 rounded hover:bg-red-800 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex-1 text-white space-y-6 mt-6 lg:mt-0">
          <h3 className="text-3xl text-amber-300 font-bold">Contacts Info</h3>
          <p>Feel free to reach out for any enquiries.</p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:ookovincent616@gmail.com"
              title="Email"
              className="p-3 border border-white rounded-full hover:bg-white hover:text-[#180e2a] transition"
            >
              <MdOutlineMail className="text-2xl" />
            </a>
            <span>Email Me</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+254727664787"
              title="Call"
              className="p-3 border border-white rounded-full hover:bg-white hover:text-[#180e2a] transition"
            >
              <MdPhone className="text-2xl" />
            </a>
            <span>Call Me</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 border border-white rounded-full">
              <MdLocationOn className="text-2xl" />
            </div>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
