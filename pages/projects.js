import dynamic from "next/dynamic"

const Projects = dynamic(() => import("../components/Projects"))

export default function ProjectsPage() {
  return <Projects />
}
