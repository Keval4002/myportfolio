import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Freelance from './pages/Freelance'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-neu-white text-neu-black font-space selection:bg-neu-yellow selection:text-neu-black">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
