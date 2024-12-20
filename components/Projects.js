export default function Projects() {
  const projects = [
    {
      title: "Chewsy",
      description: "A full-stack meal planning and recipe management application that simplifies weekly meal prep with dynamic shopping lists, customizable recipes, and a user-friendly interface.",
      technologies: ["Python", "Django", "PostgreSQL"],
      image: "/chewsy.png",
      github: "https://github.com/yourusername/chewsy",
      demo: "https://chewsy-demo.com",
    },
    {
      title: "Rivals",
      description: "A retro Pokémon game simulation using JavaScript and PokeAPI.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/rivals.png", // Example image
      github: "https://github.com/yourusername/rivals",
      demo: "https://rivals-demo.com",
    },
    {
      title: "Loom",
      description: "An interactive storytelling app built with Node.js, MongoDB, and Express.",
      technologies: ["Node.js", "Express", "MongoDB"],
      image: "/loom.png", // Example image
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
            <div className="project-image">
              <image src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="technologies">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
