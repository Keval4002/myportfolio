const Freelance = () => {
  return (
    <main className="pt-24 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen pb-24">
      <h1 className="text-5xl md:text-7xl font-black mb-12 uppercase border-b-2 border-neu-black pb-4 text-center">
        Freelance Services
      </h1>
      
      {/* Services List - Muted and Minimalistic */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-500 text-center">What I Do</h2>
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

      {/* Clients Worked With */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-500 text-center">Clients</h2>
        <div className="bg-white border-2 border-neu-black p-12 shadow-neu flex flex-wrap justify-center items-center gap-12">
          <img src="/images/flogo1.png" alt="Client Logo 1" className="h-16 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="/images/flogo2.png" alt="Client Logo 2" className="h-16 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          <img src="/images/flogo3.png" alt="Client Logo 3" className="h-16 md:h-20 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
        </div>
      </section>

      {/* Demo Videos */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-500 text-center">Demos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-video bg-gray-100 border-2 border-neu-black flex items-center justify-center relative overflow-hidden shadow-neu">
             <p className="text-gray-400 text-xl font-bold z-10">[ Video Placeholder ]</p>
             <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
          </div>
          <div className="aspect-video bg-gray-100 border-2 border-neu-black flex items-center justify-center relative overflow-hidden shadow-neu">
             <p className="text-gray-400 text-xl font-bold z-10">[ Video Placeholder ]</p>
             <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
          </div>
        </div>
      </section>

      {/* Quotation Form - Centered */}
      <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-500 text-center">Get a Quote</h2>
        <form 
          action="mailto:ambanikeval2@gmail.com" 
          method="POST" 
          encType="text/plain"
          className="bg-white border-2 border-neu-black p-8 shadow-neu max-w-2xl w-full"
        >
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 uppercase text-gray-700">Your Name</label>
            <input type="text" name="name" className="w-full border-2 border-neu-black p-3 bg-neu-white focus:outline-none focus:bg-neu-yellow focus:bg-opacity-20 transition-colors" required />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2 uppercase text-gray-700">Project Needs</label>
            <textarea name="needs" rows="4" className="w-full border-2 border-neu-black p-3 bg-neu-white focus:outline-none focus:bg-neu-yellow focus:bg-opacity-20 transition-colors" required></textarea>
          </div>
          <button type="submit" className="w-full bg-neu-black text-white border-2 border-neu-black px-8 py-4 text-lg font-bold uppercase hover:bg-white hover:text-neu-black transition-colors">
            Send Inquiry
          </button>
        </form>
      </section>
    </main>
  )
}

export default Freelance
