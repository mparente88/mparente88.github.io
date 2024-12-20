import dynamic from "next/dynamic"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Hero = dynamic(() => import("./Hero"))
const About = dynamic(() => import("./About"))
const Projects = dynamic(() => import("./Projects"))
const Contact = dynamic(() => import("./Contact"))

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {}
        <Hero />
      </main>
      <Footer />
    </div>
  )
}

export default App
