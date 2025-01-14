import React, { useEffect, useRef } from "react"
import Typed from "typed.js"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Hero() {
  const typedRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    const options = {
      strings: ["Software Engineer", "Problem Solver", "Creative Thinker"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    }
    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="hero">
      <div className="profile-picture">
        <Image src="/profilePicture.png" alt="Molly's Profile Picture" width={150} height={150} className="profile-img" />
      </div>

      <h1>Hi, I&apos;m Molly</h1>
      <p className="typed-container">
        <span ref={typedRef}></span>
      </p>
      <div>
        <button>
          <a href="/MollyParenteResume.pdf" download className="btn">
            Download My Resume
          </a>
        </button>
      </div>
      <div>
        <button onClick={() => router.push("/projects")}>View Projects</button>
        <button onClick={() => router.push("/contact")}>Contact Me</button>
      </div>
    </section>
  )
}
