const projects = [
  {
    title: "Rivals",
    description: "A retro Pokémon game simulation using JavaScript and PokeAPI.",
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/yourusername/rivals",
    demo: "https://rivals-demo.com",
  },
  {
    title: "Loom",
    description: "An interactive storytelling app built with Node.js, MongoDB, and Express.",
    technologies: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername/loom",
    demo: "https://loom-demo.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div>
              <a href={project.github}>GitHub</a>
              <a href={project.demo}>Live Demo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
