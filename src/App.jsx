import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Freelance from './pages/Freelance'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-neu-white text-neu-black font-space selection:bg-neu-yellow selection:text-neu-black">
      <Navbar />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Freelance />} />
          <Route path="/developer" element={<Home />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
