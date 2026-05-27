import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center scroll-mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            I'm <span className="bg-neu-blue text-white px-2 border-2 border-neu-black shadow-neu inline-block rotate-2">Keval</span>
          </h1>
          <div className="bg-white border-2 border-neu-black p-6 shadow-neu hover:-translate-y-1 hover:shadow-neu-hover transition-all mb-8 max-w-xl">
            <p className="text-base md:text-lg font-bold font-roboto leading-relaxed text-gray-800">
              A software developer driven by the belief that what you build should outlast the moment it's made. I design and develop modern digital experiences that don't just launch, but scale without breaking and create genuine impact. You'll also find freelance work here — projects that took my passion out of the editor and into the real world, solving real problems for real clients. Take a look around. Welcome to my portfolio. 
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-2">
             <a href="#projects" className="bg-neu-yellow text-neu-black border-2 border-neu-black shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all px-6 py-2.5 font-bold uppercase text-sm md:text-base cursor-pointer">
                View Work
             </a>
             <Link to="/freelance" className="bg-neu-blue text-white border-2 border-neu-black shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all px-6 py-2.5 font-bold uppercase text-sm md:text-base cursor-pointer">
                Freelance
             </Link>
             <Link to="/contact" className="bg-neu-black text-white border-2 border-neu-black shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all px-6 py-2.5 font-bold uppercase text-sm md:text-base cursor-pointer">
                Contact
             </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative max-w-sm md:max-w-md mx-auto md:ml-auto w-full">
          <div className="aspect-square bg-neu-brown border-2 border-neu-black shadow-neu relative overflow-hidden group">
             {/* Replace this with an actual img tag if needed */}
             <img src="/images/about-img.jpeg" alt="Keval" className="w-full h-full object-cover transition-all duration-500" />
             <div className="absolute inset-0 bg-neu-blue opacity-10 mix-blend-multiply group-hover:opacity-0 transition-opacity"></div>
          </div>
          {/* Decorative shapes */}
          <div className="absolute -top-4 -right-4 w-10 h-10 bg-neu-yellow border-2 border-neu-black rounded-full shadow-neu z-10 animate-bounce"></div>
          <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-white border-2 border-neu-black shadow-neu -rotate-12 flex items-center justify-center font-black text-lg z-10">HI!</div>
        </div>
      </div>
    </section>
  );
};

export default About;
