import { Link } from 'react-router-dom';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neu-yellow border-t-4 border-neu-black py-8 px-4 shadow-[0_-4px_0_0_rgba(17,17,17,1)] mt-auto font-space">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="text-2xl font-black uppercase tracking-tighter hover:scale-105 transition-transform bg-white px-3 py-1 border-4 border-neu-black shadow-neu inline-block">
            PORTFOLIO
          </Link>
          <p className="mt-3 text-sm font-bold font-roboto text-gray-700">
            Building digital experiences that outlast the moment.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 font-bold uppercase text-sm">
          <Link to="/" className="hover:underline hover:text-neu-blue transition-colors">
            Freelance
          </Link>
          <Link to="/developer" className="hover:underline hover:text-neu-blue transition-colors">
            Know the Developer
          </Link>
          <Link to="/contact" className="hover:underline hover:text-neu-blue transition-colors">
            Contact Me
          </Link>
          <a href="/docs/Keval_Ambani_Resume1.pdf" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-neu-blue transition-colors">
            Resume
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="mailto:ambanikeval2@gmail.com" 
            className="p-2 border-2 border-neu-black bg-white rounded-full shadow-neu hover:-translate-y-1 hover:shadow-neu-hover hover:bg-neu-brown hover:text-white transition-all"
            title="Email"
          >
            <FaEnvelope size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/keval-ambani-9ba99532a" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 border-2 border-neu-black bg-white rounded-full shadow-neu hover:-translate-y-1 hover:shadow-neu-hover hover:bg-neu-blue hover:text-white transition-all"
            title="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="https://github.com/Keval4002" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 border-2 border-neu-black bg-white rounded-full shadow-neu hover:-translate-y-1 hover:shadow-neu-hover hover:bg-neu-black hover:text-white transition-all"
            title="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://x.com/@ambanikeval2" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 border-2 border-neu-black bg-white rounded-full shadow-neu hover:-translate-y-1 hover:shadow-neu-hover hover:bg-neu-blue hover:text-white transition-all"
            title="Twitter / X"
          >
            <FaTwitter size={18} />
          </a>
          <a 
            href="/docs/Keval_Ambani_Resume1.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 border-2 border-neu-black bg-white rounded-full shadow-neu hover:-translate-y-1 hover:shadow-neu-hover hover:bg-neu-brown hover:text-white transition-all"
            title="Resume PDF"
          >
            <FaFilePdf size={18} />
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t-2 border-neu-black flex justify-center text-xs font-bold font-roboto text-gray-700">
        <p>© {currentYear} Keval Ambani. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
