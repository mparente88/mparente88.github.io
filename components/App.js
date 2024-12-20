import dynamic from "next/dynamic"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Hero = dynamic(() => import("./Hero"))
const Wave = dynamic(() => import("./Wave"))

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
