import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Section - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Keval Ambani
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
              Software Engineer | Developer
            </p>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/keval-ambani-9ba99532a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/@ambanikeval2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                aria-label="Twitter"
              >
                <FaTwitter className="w-8 h-8" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Keval4002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/images/hero_img.jpg"
                alt="Keval Ambani"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl ring-4 ring-gray-200 dark:ring-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
