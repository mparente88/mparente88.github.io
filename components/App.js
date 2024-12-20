import dynamic from "next/dynamic"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Hero = dynamic(() => import("./Hero"))
const About = dynamic(() => import("./About"))
const Projects = dynamic(() => import("./Projects"))
const Contact = dynamic(() => import("./Contact"))
const Wave = dynamic(() => import("./wave"))

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {}
        <Hero />
      </main>
      <Wave />
      <Footer />
    </div>
  )
}

export default App
