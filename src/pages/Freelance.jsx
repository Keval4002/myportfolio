import { useState } from 'react';

const Freelance = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Web Applications',
    customService: '',
    referenceLinks: '',
    needs: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Web Applications',
    'Mobile Applications',
    'Social Media & Boosting',
    'Advertisement Handling',
    'SEO Services',
    'Automations',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: 'Web Applications',
          customService: '',
          referenceLinks: '',
          needs: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <main className="pt-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen pb-24">
      <div className="mb-12 border-b-4 border-neu-black pb-8 text-center flex flex-wrap justify-center items-center gap-4 sm:gap-6">
        <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter bg-neu-brown text-white px-5 py-2 border-4 border-neu-black shadow-neu inline-block -rotate-1">
          Ktech
        </span>
        <span className="text-2xl md:text-4xl font-black uppercase tracking-tight bg-white text-neu-black px-5 py-2 border-4 border-neu-black shadow-neu inline-block rotate-1">
          Freelance Services
        </span>
      </div>
      
      {/* Clients Worked With */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-gray-500 text-center">Clients</h2>
        <div className="bg-white border-2 border-neu-black p-6 shadow-neu flex flex-wrap justify-center items-center gap-8">
          <a href="https://www.pbnifc.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/flogo1.png" alt="PBN IFC Logo" className="h-12 md:h-16 object-contain transition-all hover:scale-105" />
          </a>
          <a href="https://www.glassfactory.info/" target="_blank" rel="noopener noreferrer">
            <img src="/images/flogo2.png" alt="Glass Factory Logo" className="h-12 md:h-16 object-contain transition-all hover:scale-105" />
          </a>
          <a href="https://taurismedia.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/flogo3.png" alt="Tauris Media Logo" className="h-12 md:h-16 object-contain transition-all hover:scale-105" />
          </a>
        </div>
      </section>

      {/* Demo Videos */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-gray-500 text-center">Demos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="aspect-video bg-gray-100 border-2 border-neu-black flex items-center justify-center relative overflow-hidden shadow-neu">
             <video controls autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover z-10">
                <source src="/videos/taurismedia.webm" type="video/webm" />
                <source src="/videos/taurismedia.mp4" type="video/mp4" />
             </video>
          </div>
          <div className="aspect-video bg-gray-100 border-2 border-neu-black flex items-center justify-center relative overflow-hidden shadow-neu">
             <video controls autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover z-10">
                <source src="/videos/pbnifc.webm" type="video/webm" />
                <source src="/videos/pbnifc.mp4" type="video/mp4" />
             </video>
          </div>
          <div className="aspect-video bg-gray-100 border-2 border-neu-black flex items-center justify-center relative overflow-hidden shadow-neu">
             <video controls autoPlay loop muted playsInline preload="auto" className="w-full h-full object-cover z-10">
                <source src="/videos/glassfactory.webm" type="video/webm" />
                <source src="/videos/glassfactory.mp4" type="video/mp4" />
             </video>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4 uppercase tracking-widest text-gray-500 text-center">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Web Applications', desc: 'Custom, scalable web platforms.' },
            { title: 'Mobile Applications', desc: 'Native & cross-platform solutions.' },
            { title: 'Social Media & Boosting', desc: 'Growth strategies & execution.' },
            { title: 'Advertisement Handling', desc: 'Targeted ad campaigns.' },
            { title: 'SEO Services', desc: 'Search engine optimization.' },
            { title: 'Automations', desc: 'Workflow & process automation.' }
          ].map((service, i) => (
            <div key={i} className="bg-white border border-neu-black p-6 flex flex-col items-start shadow-[2px_2px_0_0_rgba(17,17,17,0.1)]">
              <h3 className="text-lg font-black uppercase mb-2">{service.title}</h3>
              <p className="text-sm font-roboto text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* My Work Section */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-8 uppercase tracking-widest text-gray-500 text-center">My Work</h2>
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {/* Punjabi By Nature IFC */}
          <div className="bg-white border-4 border-neu-black p-8 shadow-neu hover:-translate-y-1 hover:shadow-neu-hover transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 border-b-2 border-neu-black pb-4">
              <div>
                <h3 className="text-2xl font-black uppercase">Punjabi By Nature IFC</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider font-roboto mt-1">
                  A restaurant website that helps customers find the menu and book a table
                </p>
              </div>
              <a href="https://www.pbnifc.com/" target="_blank" rel="noopener noreferrer" className="bg-neu-yellow text-neu-black border-2 border-neu-black px-4 py-1.5 font-bold uppercase text-xs shadow-neu hover:shadow-neu-hover hover:-translate-y-0.5 transition-all text-center self-start sm:self-auto">
                Live Site
              </a>
            </div>
            
            <p className="text-base font-roboto leading-relaxed text-gray-800 mb-6">
              Punjabi By Nature IFC is a Punjabi & Mughlai restaurant in Gurgaon. I designed and built their website so that anyone visiting can quickly see beautiful photos of the food and restaurant, look at the full menu, and book a table — all without picking up the phone. I also connected the site to WhatsApp and Instagram, so guests can message the restaurant directly in one click.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-xs font-black uppercase text-gray-500 mb-3 tracking-widest">What I Did:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-sm font-roboto font-bold text-gray-700">
                  <li>Designed how the website looks and feels — clean, simple, and easy to use on a phone</li>
                  <li>Built the menu page and the table-booking page from scratch</li>
                  <li>Set up one-click WhatsApp, calling, and Instagram links for the restaurant</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-neu-black p-4">
                <h4 className="text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Why it matters:</h4>
                <p className="text-sm font-roboto leading-relaxed text-gray-800">
                  Customers can decide what to eat and book a table in under a minute, which means fewer phone calls for the restaurant and a more professional first impression.
                </p>
              </div>
            </div>
          </div>

          {/* Tauris Media */}
          <div className="bg-white border-4 border-neu-black p-8 shadow-neu hover:-translate-y-1 hover:shadow-neu-hover transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 border-b-2 border-neu-black pb-4">
              <div>
                <h3 className="text-2xl font-black uppercase">Tauris Media</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider font-roboto mt-1">
                  A brand look and website for a marketing agency
                </p>
              </div>
              <a href="https://taurismedia.com/" target="_blank" rel="noopener noreferrer" className="bg-neu-blue text-white border-2 border-neu-black px-4 py-1.5 font-bold uppercase text-xs shadow-neu hover:shadow-neu-hover hover:-translate-y-0.5 transition-all text-center self-start sm:self-auto">
                Live Site
              </a>
            </div>
            
            <p className="text-base font-roboto leading-relaxed text-gray-800 mb-6">
              Tauris Media is a marketing agency in Kolkata that helps other businesses grow online. My job was to give them a strong, confident brand — including their bull mascot logo — and then build a website that shows off what they do and convinces new clients to work with them.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-xs font-black uppercase text-gray-500 mb-3 tracking-widest">What I Did:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-sm font-roboto font-bold text-gray-700">
                  <li>Created their brand identity, including their logo and overall look</li>
                  <li>Designed and built their website from the ground up</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-neu-black p-4">
                <h4 className="text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Why it matters:</h4>
                <p className="text-sm font-roboto leading-relaxed text-gray-800">
                  A marketing agency's own website is its first sales pitch — it needed to look as polished and convincing as the brands it promises to build for its clients.
                </p>
              </div>
            </div>
          </div>

          {/* Glass Factory */}
          <div className="bg-white border-4 border-neu-black p-8 shadow-neu hover:-translate-y-1 hover:shadow-neu-hover transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 border-b-2 border-neu-black pb-4">
              <div>
                <h3 className="text-2xl font-black uppercase">Glass Factory</h3>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider font-roboto mt-1">
                  A website that connects fashion brands with factories
                </p>
              </div>
              <a href="https://www.glassfactory.info/" target="_blank" rel="noopener noreferrer" className="bg-neu-brown text-white border-2 border-neu-black px-4 py-1.5 font-bold uppercase text-xs shadow-neu hover:shadow-neu-hover hover:-translate-y-0.5 transition-all text-center self-start sm:self-auto">
                Live Site
              </a>
            </div>
            
            <p className="text-base font-roboto leading-relaxed text-gray-800 mb-6">
              Glass Factory is a platform that helps fashion brands find trustworthy factories to manufacture their clothing, anywhere in the world. It's been featured in Vogue Business, WIRED, and Esquire for making the usually secretive world of clothing manufacturing easier to understand. I worked on the parts of the website that let brands search for factories and manufacturers sign up to be listed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
              <div>
                <h4 className="text-xs font-black uppercase text-gray-500 mb-3 tracking-widest">What I Did:</h4>
                <ul className="list-disc pl-5 space-y-1.5 text-sm font-roboto font-bold text-gray-700">
                  <li>Designed and built the factory search tool that brands use to find a match</li>
                  <li>Built the sign-up process for factories wanting to join the platform</li>
                </ul>
              </div>
              <div className="bg-gray-50 border border-neu-black p-4">
                <h4 className="text-xs font-black uppercase text-gray-500 mb-2 tracking-widest">Why it matters:</h4>
                <p className="text-sm font-roboto leading-relaxed text-gray-800">
                  It turns a slow, word-of-mouth process — finding a reliable factory — into something a brand can do online in minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quotation & Inquiry Section */}
      <section className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 uppercase tracking-widest text-gray-500 text-center">
          Get a Quote
        </h2>
        
        <div className="max-w-2xl mx-auto bg-white border-4 border-neu-black p-8 shadow-neu">
          {status === 'success' && (
            <div className="mb-6 bg-neu-blue text-white border-2 border-neu-black p-4 font-bold shadow-neu">
              🎉 Inquiry sent successfully! I'll get back to you within 24 hours.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 bg-neu-brown text-white border-2 border-neu-black p-4 font-bold shadow-neu">
              ❌ {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-gray-700">Your Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow transition-colors" 
                  required 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-gray-700">Your Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow transition-colors" 
                  required 
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-gray-700">Company Name</label>
                <input 
                  type="text" 
                  name="company" 
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow transition-colors" 
                  placeholder="Optional"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase mb-2 text-gray-700">Project Type *</label>
                <select 
                  name="projectType" 
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow cursor-pointer"
                  required
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>
            </div>

            {formData.projectType === 'Other' && (
              <div className="animate-fadeIn">
                <label className="block text-xs font-black uppercase mb-2 text-gray-700 font-bold">Custom Service Type *</label>
                <input 
                  type="text" 
                  name="customService" 
                  value={formData.customService}
                  onChange={handleChange}
                  className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow transition-colors"
                  placeholder="e.g. Design Consulting, Cyber Security"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-black uppercase mb-2 text-gray-700">Reference Links</label>
              <input 
                type="url" 
                name="referenceLinks" 
                value={formData.referenceLinks}
                onChange={handleChange}
                className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow transition-colors" 
                placeholder="e.g. https://inspiration-site.com"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase mb-2 text-gray-700">Project Needs / Description *</label>
              <textarea 
                name="needs" 
                value={formData.needs}
                onChange={handleChange}
                rows="5" 
                className="w-full border-2 border-neu-black p-3 bg-neu-white font-bold focus:outline-none focus:bg-neu-yellow transition-colors" 
                required
                placeholder="Tell me about your product, what problems it solves, timeline, budget, etc."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full bg-neu-black text-white border-4 border-neu-black py-4 text-lg font-black uppercase hover:bg-white hover:text-neu-black shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending Inquiry...' : 'Submit Inquiry'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Freelance;
