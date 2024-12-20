import dynamic from "next/dynamic"

const About = dynamic(() => import("../components/About"))

export default function AboutPage() {
  return <About />
}
