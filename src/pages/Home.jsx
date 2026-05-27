import About from '../components/About/About'
import Experience from '../components/Experience/Experience'
import Projects from '../components/Projects/Projects'

const Home = () => {
  return (
    <main className="pt-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col gap-24 pb-24">
      <About />
      <Experience />
      <Projects />
    </main>
  )
}

export default Home
