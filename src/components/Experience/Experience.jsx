const Experience = () => {
  const experiences = [
    {
      id: 0,
      company: "PBNIFC",
      position: "Freelance Software Developer",
      duration: "Mar 2026 – Apr 2026",
      description: "Developed a comprehensive restaurant display website featuring dynamic menu displays, an integrated booking system, mail and SMS integrations, and Role-Based Access Control (RBAC).",
      skills: ["Full Stack Development", "RBAC", "Mail & SMS APIs", "Booking Systems"],
    },
    {
      id: 1,
      company: "Tauris Media",
      position: "Frontend Developer",
      duration: "Nov 2025 – Jan 2026",
      description: "Built high-end portfolio website using React and Framer Motion to strengthen brand presence and drive client outreach. Engineered complex animation systems with layered image stacking, scroll-driven transitions, and narrative-based motion flows.",
      skills: ["React", "Framer Motion", "Animation Systems", "Performance Optimization"],
    },
    {
      id: 2,
      company: "Glass Factory",
      position: "Freelance Software Developer",
      duration: "Sep 2025 – Oct 2025",
      description: "Led complete front-end restructuring and redevelopment using Next.js with focus on scalable architecture. Designed and implemented a Tariff Calculator for estimating international import costs into the U.S.",
      skills: ["Next.js", "Frontend Architecture", "UI/UX Design"],
    },
    {
      id: 3,
      company: "Neural Network Labs",
      position: "Full Stack Intern",
      duration: "Jun 2025 – Aug 2025",
      description: "Migrated core builder from React to Next.js. Integrated Konva.js for advanced slide editing, automated exports with Puppeteer & LibreOffice, and collaborated on agentic AI solutions.",
      skills: ["Next.js", "Node.js", "Konva.js", "Puppeteer", "AI Integration"],
    }
  ];

  return (
    <section id="experience" className="min-h-[80vh] py-20 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b-2 border-neu-black pb-4">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
          Experience
        </h2>
        <span className="text-lg font-bold text-gray-500 uppercase tracking-widest mt-4 md:mt-0">
          My Journey
        </span>
      </div>

      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Side: Duration & Company */}
            <div className="lg:col-span-3 flex flex-col pt-1">
              <span className="text-sm font-bold font-roboto bg-neu-yellow px-2 py-1 border-2 border-neu-black inline-block w-max mb-3">
                {exp.duration}
              </span>
              <h3 className="text-2xl font-black uppercase group-hover:text-neu-blue transition-colors">{exp.company}</h3>
            </div>

            {/* Right Side: Details */}
            <div className="lg:col-span-9 bg-white border-2 border-neu-black p-6 shadow-neu transition-all">
              <h4 className="text-xl font-bold uppercase mb-4 border-b-2 border-neu-black pb-2 inline-block">
                {exp.position}
              </h4>
              <p className="text-lg font-medium font-roboto text-gray-800 leading-relaxed mb-6">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="bg-gray-100 border border-neu-black px-3 py-1 font-bold text-xs uppercase text-gray-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
