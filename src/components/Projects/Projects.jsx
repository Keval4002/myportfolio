import ProjectCard from './ProjectCard';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from './projectsData';

const Projects = () => {

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <SectionHeader 
            title="Projects" 
            subtitle="Featured work and technical achievements" 
          />
        </div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
