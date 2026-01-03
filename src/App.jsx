import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 font-rubik">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Experience Section */}
      <Experience />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section & Footer */}
      <Contact />
    </div>
  )
}

export default App
