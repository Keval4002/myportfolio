import { MdBusinessCenter, MdWorkOutline, MdDateRange } from 'react-icons/md';

const ExperienceCard = ({ experience, index }) => {
  return (
    <div 
      className="relative mb-16 last:mb-0 group px-8 md:px-20"
      style={{ minHeight: '200px' }}
    >
      {/* Card - Left aligned for better readability */}
      <div className="relative z-10">
        <div 
          className="w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 p-6 group-hover:scale-[1.02] group-hover:-translate-y-1 backdrop-blur-sm"
          style={{
            animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`
          }}
        >
          {/* Top accent line */}
          <div className="h-0.5 w-10 bg-blue-600 dark:bg-blue-400 rounded-full mb-4"></div>
          
          {/* Company Name with Icon */}
          <div className="flex items-center gap-2.5 mb-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <MdBusinessCenter className="text-xl text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.company}
            </h3>
          </div>
          
          {/* Position with Icon */}
          <div className="flex items-center gap-2 mb-2">
            <MdWorkOutline className="text-base text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <h4 className="text-base font-semibold text-blue-600 dark:text-blue-400">
              {experience.position}
            </h4>
          </div>
          
          {/* Duration with Icon */}
          <div className="flex items-center gap-2 mb-4 text-gray-500 dark:text-gray-400">
            <MdDateRange className="text-sm flex-shrink-0" />
            <p className="text-xs font-medium">
              {experience.duration}
            </p>
          </div>
          
          {/* Description */}
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          {/* Skills - Compact */}
          <div className="flex flex-wrap gap-1.5">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
