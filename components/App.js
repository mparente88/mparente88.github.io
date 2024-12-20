import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
