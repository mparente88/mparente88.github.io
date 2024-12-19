import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="about-container">
        <Image src="/profile-placeholder.png" alt="Profile" width={150} height={150} className="profile-img" />
        <p>Hi! I’m Molly, a software engineer with a background in teaching and a passion for solving complex problems...</p>
      </div>
    </section>
  )
}
