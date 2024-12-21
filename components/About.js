import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about-container">
        <Image src="/profile-placeholder.png" alt="Profile" width={150} height={150} className="profile-img" />
        <div className="about-details">
          <h2>About Me</h2>
          <p>Hi! I&apos;m Molly, a software engineer with a background in teaching and a passion for solving complex problems. I recently graduated from General Assembly&apos;s Software Engineering Immersive program, where I honed my skills in full-stack development, building dynamic applications, and collaborating with teams to create impactful solutions.</p>
          <p>
            I specialize in React, JavaScript, and Python, but I&apos;m always exploring new technologies. When I&apos;m not coding, you can find me immersed in tabletop RPGs, learning C#, or watching gripping shows like <em>Severance</em> and <em>Silo</em>.
          </p>
          <p>My career goal is to combine my technical expertise with my creativity to design applications that make a difference in people&apos;s lives. Whether it&apos;s building efficient tools, crafting engaging user experiences, or diving deep into backend logic, I&apos;m always up for a challenge!</p>
          <p>Outside of work, I love creating stories through games, exploring new recipes, and engaging in community events. I&apos;m also an avid learner and am currently diving into game development as my next big project.</p>
          <h3>Core Skills</h3>
          <ul className="skills-list">
            <li>Full-Stack Development</li>
            <li>JavaScript, React, Next.js</li>
            <li>Python, Django, PostgreSQL</li>
            <li>Node.js, Express, MongoDB</li>
            <li>Responsive Design, CSS</li>
            <li>Git, Agile Development</li>
          </ul>
          <h3>Fun Facts</h3>
          <ul className="fun-facts">
            <li>I&apos;ve run a mystery-themed tabletop RPG for my friends for over a year.</li>
            <li>I&apos;m currently working on a game as my first C# project.</li>
            <li>I love experimenting with cooking and have mastered the art of sourdough baking.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
