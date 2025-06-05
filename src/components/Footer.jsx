import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <section
        id="contacts"
        className="bg-gray-900 text-gray-300 py-8 px-6 mt-12"
      >
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <p className="text-lg">Feel free to reach out through any of the platforms below:</p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Vincent Ochieng. All rights
            reserved.
          </div>
          <div className="flex space-x-6 text-2xl">
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
      </section>
    </footer>
  );
};

export default Footer;
