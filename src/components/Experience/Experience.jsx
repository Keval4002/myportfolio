import ExperienceCard from './ExperienceCard';
import SectionHeader from '../common/SectionHeader';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tauris Media",
      position: "Frontend Developer",
      duration: "November 2025 – January 2026",
      description: "Built high-end portfolio website using React and Framer Motion to strengthen brand presence and drive client outreach. Engineered complex animation systems with layered image stacking, scroll-driven transitions, and narrative-based motion flows. Implemented session-aware media caching to reduce load times and enable seamless navigation for returning users.",
      skills: ["React", "Framer Motion", "Animation Systems", "Performance Optimization", "Media Caching", "Responsive Design", "Scroll Animations"]
    },
    {
      id: 2,
      company: "Glass Factory",
      position: "Freelance Software Developer (Frontend)",
      duration: "September 2025 – October 2025",
      description: "Led complete front-end restructuring and redevelopment using Next.js with focus on scalable architecture. Designed and implemented a Tariff Calculator for estimating international import costs into the U.S. with intuitive UI. Enhanced user experience through performance optimization and responsive engineering.",
      skills: ["Next.js", "Frontend Architecture", "UI/UX Design", "Performance Optimization", "Responsive Design", "Stakeholder Collaboration"]
    },
    {
      id: 3,
      company: "Neural Network Labs",
      position: "Full Stack Intern",
      duration: "June 2025 – August 2025",
      description: "Enhanced AI-powered presentation generation platform, migrating core builder from React to Next.js for improved performance and SEO. Integrated Konva.js for advanced slide editing, automated exports with Puppeteer & LibreOffice, and implemented dynamic themes. Collaborated on agentic AI solutions using Pollination.ai and Google Gemini API.",
      skills: ["Next.js", "React", "Node.js", "Konva.js", "Puppeteer", "REST API", "AI Integration", "LibreOffice"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <SectionHeader 
            title="Experience" 
            subtitle="My professional journey and key accomplishments" 
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Lines on both sides */}
          <div className="absolute left-4 md:left-8 h-full w-0.5 bg-gray-300 dark:bg-gray-700" style={{ zIndex: 0 }}></div>
          <div className="absolute right-4 md:right-8 h-full w-0.5 bg-gray-300 dark:bg-gray-700" style={{ zIndex: 0 }}></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <ExperienceCard 
              key={exp.id} 
              experience={exp} 
              index={index} 
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

export default Experience;
