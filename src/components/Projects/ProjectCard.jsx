const ProjectCard = ({ project, index, reverse = false }) => {
  return (
    <div 
      className="relative mb-16 last:mb-0 group"
      style={{
        animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
          {/* Image Section */}
          <div className="w-full lg:w-2/5 relative bg-gray-500 dark:bg-gray-900">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-auto lg:h-full object-contain lg:object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-3/5 p-6 md:p-8 flex flex-col justify-between">
            {/* Top accent line */}
            <div className="h-0.5 w-10 bg-blue-600 dark:bg-blue-400 rounded-full mb-4"></div>

            {/* Project Title */}
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>

            {/* Year/Date */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {project.year}
            </p>

            {/* Description */}
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2 uppercase tracking-wide">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Optional: Links Section */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
