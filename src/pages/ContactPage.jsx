import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const ContactPage = () => {
  return (
    <main className="pt-24 px-4 sm:px-8 max-w-5xl mx-auto min-h-screen pb-24 flex flex-col justify-center">
      <h1 className="text-5xl md:text-8xl font-black mb-12 uppercase">
        <span className="bg-neu-yellow px-4 border-4 border-neu-black shadow-neu inline-block -rotate-2">Let's</span>
        <br />
        <span className="bg-neu-blue text-white px-4 border-4 border-neu-black shadow-neu inline-block mt-4 rotate-2">Talk.</span>
      </h1>
      
      <p className="text-2xl font-bold mb-12 max-w-2xl border-l-8 border-neu-brown pl-6">
        Ready to build what makes you impossible to ignore? Drop a message or connect on socials.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <a href="mailto:your-email@example.com" className="bg-white border-4 border-neu-black p-8 shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all group flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black uppercase mb-2">Email</h3>
            <p className="font-bold font-roboto">Mail me directly</p>
          </div>
          <FaEnvelope className="text-5xl text-neu-brown group-hover:scale-110 transition-transform" />
        </a>

        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="bg-neu-blue text-white border-4 border-neu-black p-8 shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all group flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black uppercase mb-2">LinkedIn</h3>
            <p className="font-bold font-roboto">Professional network</p>
          </div>
          <FaLinkedin className="text-5xl group-hover:scale-110 transition-transform" />
        </a>

        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="bg-neu-black text-white border-4 border-neu-black p-8 shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all group flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black uppercase mb-2">GitHub</h3>
            <p className="font-bold font-roboto">Check my code</p>
          </div>
          <FaGithub className="text-5xl group-hover:scale-110 transition-transform" />
        </a>

        <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="bg-neu-yellow border-4 border-neu-black p-8 shadow-neu hover:shadow-neu-hover hover:-translate-y-1 transition-all group flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black uppercase mb-2">Twitter</h3>
            <p className="font-bold font-roboto">Thoughts & drops</p>
          </div>
          <FaTwitter className="text-5xl group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </main>
  )
}

export default ContactPage
