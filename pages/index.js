import dynamic from "next/dynamic"

const Hero = dynamic(() => import("../components/Hero"))

export default function HomePage() {
  return <Hero />
}
