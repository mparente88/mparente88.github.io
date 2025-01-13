import { useRouter } from "next/router"

export default function Hero() {
  const router = useRouter()

  return (
    <section className="hero">
      <h1>Hi, I&apos;m Molly</h1>
      <p>A Software Engineer passionate about creating efficient, user-centric applications.</p>
      <span>
        <a href="/MollyParenteResume.pdf" download className="btn">
          Download My Resume
        </a>
      </span>
      <div>
        <button onClick={() => router.push("/projects")}>View Projects</button>
        <button onClick={() => router.push("/contact")}>Contact Me</button>
      </div>
    </section>
  )
}
