export default function Projects() {
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

  return (
    <section className="projects">
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
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
