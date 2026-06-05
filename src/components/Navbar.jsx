import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Howl, Howler } from 'howler';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [howlInstance, setHowlInstance] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Initialize Audio
  useEffect(() => {
    let hasInteracted = false;

    const sound = new Howl({
      src: ['/audio/intro.mp3'],
      html5: true,
      onplay: () => setIsMuted(false)
    });
    
    setHowlInstance(sound);

    // Try to play immediately (browsers often block this)
    sound.play();

    // Fallback: Play on very first interaction
    const playOnFirstInteraction = () => {
      if (!hasInteracted && !sound.playing()) {
        sound.play();
        hasInteracted = true;
      }
      
      document.removeEventListener('click', playOnFirstInteraction);
      document.removeEventListener('touchstart', playOnFirstInteraction);
      document.removeEventListener('scroll', playOnFirstInteraction);
      document.removeEventListener('keydown', playOnFirstInteraction);
    };

    document.addEventListener('click', playOnFirstInteraction);
    document.addEventListener('touchstart', playOnFirstInteraction);
    document.addEventListener('scroll', playOnFirstInteraction, { once: true });
    document.addEventListener('keydown', playOnFirstInteraction);

    return () => {
      document.removeEventListener('click', playOnFirstInteraction);
      document.removeEventListener('touchstart', playOnFirstInteraction);
      document.removeEventListener('scroll', playOnFirstInteraction);
      document.removeEventListener('keydown', playOnFirstInteraction);
      sound.unload();
    };
  }, []);

  const toggleMute = () => {
    if (!howlInstance) return;

    if (isMuted) {
      // If it was muted, unmute it, and restart if it's not currently playing
      Howler.mute(false);
      setIsMuted(false);
      if (!howlInstance.playing()) {
         howlInstance.play();
      }
    } else {
      // Mute global howler
      Howler.mute(true);
      setIsMuted(true);
    }
  };

  const handleNavClick = (hash) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neu-yellow border-b-4 border-neu-black shadow-[0_4px_0_0_rgba(17,17,17,1)] transition-colors duration-300 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="text-3xl font-black uppercase tracking-tighter hover:scale-105 transition-transform bg-white px-2 py-1 border-4 border-neu-black shadow-neu flex items-center gap-4">
            PORTFOLIO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-bold text-lg uppercase">
            <Link to="/" className="hover:-translate-y-1 hover:shadow-neu transition-all bg-neu-blue text-white px-3 py-1 border-4 border-neu-black shadow-neu">
              Freelance
            </Link>
            <Link to="/developer" className="hover:-translate-y-1 hover:shadow-neu transition-all bg-neu-yellow text-neu-black px-3 py-1 border-4 border-neu-black shadow-neu">
              Know the developer
            </Link>
            <Link to="/contact" className="hover:-translate-y-1 hover:shadow-neu transition-all bg-neu-brown text-white px-3 py-1 border-4 border-neu-black shadow-neu">
              Contact Me
            </Link>
            
            {/* Audio Toggle */}
            <button 
              onClick={toggleMute}
              className={`p-2 border-2 border-neu-black rounded-full shadow-neu transition-all hover:scale-110 ${!isMuted ? 'bg-neu-blue text-white' : 'bg-neu-black text-white'}`}
              title={isMuted ? "Unmute Intro" : "Mute Intro"}
            >
              {!isMuted ? <FaVolumeUp size={18} /> : <FaVolumeMute size={18} />}
            </button>
          </div>

          {/* Mobile menu button and Audio Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleMute}
              className={`p-2 border-2 border-neu-black rounded-full shadow-neu transition-all ${!isMuted ? 'bg-neu-blue text-white' : 'bg-neu-black text-white'}`}
            >
              {!isMuted ? <FaVolumeUp size={18} /> : <FaVolumeMute size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 border-4 border-neu-black bg-white shadow-neu hover:shadow-neu-hover transition-all"
            >
              {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-neu-white border-b-4 border-neu-black shadow-neu flex flex-col p-4 space-y-4 font-bold text-xl uppercase z-40">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="bg-neu-blue text-white border-4 border-neu-black p-2 text-center shadow-neu">Freelance</Link>
            <Link to="/developer" onClick={() => setIsMenuOpen(false)} className="bg-neu-yellow text-neu-black border-4 border-neu-black p-2 text-center shadow-neu">Know the developer</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-neu-brown text-white border-4 border-neu-black p-2 text-center shadow-neu">Contact Me</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
