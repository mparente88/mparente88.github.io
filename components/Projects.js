import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Chewsy",
      description: "A full-stack meal planning and recipe management application that simplifies weekly meal prep with dynamic shopping lists, customizable recipes, and a user-friendly interface.",
      technologies: ["Python", "Django", "PostgreSQL", "Heroku"],
      tags: ["Full-Stack", "Web App"],
      image: "/chewsy_logo.png",
      github: "https://github.com/mparente88/chewsy-app",
      demo: "https://chewsy-02203d702f58.herokuapp.com/",
    },
    {
      title: "Rivals",
      description: "A retro Pokémon game simulation using JavaScript, PokeAPI and A/B decision-making. Made in one week after only two weeks of front-end training.",
      technologies: ["JavaScript", "HTML", "CSS", "Surge"],
      tags: ["Frontend", "Game", "AI Implementation"],
      image: "/rivals_logo.jpeg",
      github: "https://github.com/mparente88/PokemonRivals",
      demo: "https://pokemon-rivals-game.surge.sh/",
    },
    {
      title: "Loom",
      description: "An interactive storytelling app built with Node.js, MongoDB, and Express. Create personalized stuffed animals to protect children from specific fears.",
      technologies: ["Node.js", "Express", "MongoDB", "Heroku"],
      tags: ["Full-Stack", "Story-Telling", "AI Implementation"],
      image: "/loom_logo.jpeg",
      github: "https://github.com/mparente88/loom-companion-app",
      demo: "https://loom-app-621309c042dd.herokuapp.com/",
    },
  ]

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <Image src={project.image} alt={project.title} width={200} height={150} quality={90} priority={index === 0} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="technologies">
                {project.technologies.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <ul className="tags">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
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
