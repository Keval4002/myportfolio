import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import SectionHeader from './common/SectionHeader';

const Contact = () => {
  const contactLinks = [
    {
      id: 1,
      icon: FaEnvelope,
      label: "Email",
      value: "ambanikeval2@gmail.com",
      href: "mailto:ambanikeval2@gmail.com",
      color: "text-red-600 dark:text-red-400"
    },
    {
      id: 2,
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Keval Ambani",
      href: "https://www.linkedin.com/in/keval-ambani-9ba99532a",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      id: 3,
      icon: FaGithub,
      label: "GitHub",
      value: "@Keval4002",
      href: "https://github.com/Keval4002",
      color: "text-gray-800 dark:text-gray-200"
    },
    {
      id: 4,
      icon: FaTwitter,
      label: "Twitter",
      value: "@ambanikeval2",
      href: "https://x.com/@ambanikeval2",
      color: "text-blue-400 dark:text-blue-300"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 px-4 bg-gray-50 dark:bg-gray-900 flex items-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* Header */}
          <div className="mb-16">
            <SectionHeader 
              title="Get In Touch" 
              subtitle="Feel free to reach out through any of these channels"
            />
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {contactLinks.map((contact) => (
              <a
                key={contact.id}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`${contact.color} transition-transform duration-300 group-hover:scale-110`}>
                    <contact.icon className="w-20 h-20" />
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {contact.label}
                </h3>

                {/* Value */}
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Keval Ambani. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
