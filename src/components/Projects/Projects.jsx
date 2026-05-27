import { projectsData } from './projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-neu-black pb-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Selected Works
        </h2>
        <span className="text-lg font-bold text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
          Projects
        </span>
      </div>

      <div className="flex flex-col gap-20">
        {projectsData.map((project, index) => (
          <div key={project.id} className="flex flex-col lg:flex-row gap-10 items-center group">
            
            {/* Minimalist Image Block */}
            <div className={`w-full lg:w-1/2 bg-white border-2 border-neu-black p-4 shadow-neu ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="overflow-hidden border-2 border-neu-black bg-neu-white">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-[350px] object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Content Block */}
            <div className={`w-full lg:w-1/2 flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
              <span className="text-6xl md:text-8xl font-black text-transparent text-stroke-neu opacity-20 mb-[-2rem] pointer-events-none select-none">
                0{index + 1}
              </span>
              
              <div className="bg-white border-2 border-neu-black p-8 shadow-neu relative z-10 max-w-lg w-full">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{project.title}</h3>
                <p className="text-base font-medium font-roboto text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className={`flex flex-wrap gap-2 mb-8 ${index % 2 !== 0 ? 'lg:justify-end' : 'justify-start'}`}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-neu-yellow bg-opacity-40 border border-neu-black px-2 py-1 font-bold text-xs uppercase text-neu-black">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className={`flex gap-4 ${index % 2 !== 0 ? 'lg:justify-end' : 'justify-start'}`}>
                  {(project.liveUrl || project.githubUrl === "") && (
                    <button className="bg-neu-black text-white px-4 py-2 border-2 border-neu-black font-bold uppercase hover:bg-white hover:text-neu-black transition-colors flex items-center justify-center gap-2 text-sm">
                      <FaExternalLinkAlt /> View Live
                    </button>
                  )}
                  {(project.githubUrl || project.liveUrl === "") && (
                    <button className="bg-white text-neu-black px-4 py-2 border-2 border-neu-black font-bold uppercase hover:bg-neu-black hover:text-white transition-colors flex items-center justify-center gap-2 text-sm">
                      <FaGithub /> Source
                    </button>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
      <style jsx>{`
        .text-stroke-neu {
          -webkit-text-stroke: 2px #111111;
        }
      `}</style>
    </section>
  );
};

export default Projects;
