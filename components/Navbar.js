import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Navbar() {
  const router = useRouter()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const savedPreference = localStorage.getItem("reduced-motion")
    if (savedPreference) {
      setReducedMotion(JSON.parse(savedPreference))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("reduced-motion", JSON.stringify(reducedMotion))
    document.body.classList.toggle("reduced-motion", reducedMotion)
  }, [reducedMotion])

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link href="/" aria-label="Home">
            <div className={`nav-item ${router.pathname === "/" ? "active" : ""}`}>
              <Image src="/new-house.gif" alt="Home" unoptimized width={50} height={50} />
              <span className="tooltip">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about" aria-label="About Me">
            <div className={`nav-item ${router.pathname === "/about" ? "active" : ""}`}>
              <Image src="/info.gif" alt="About" unoptimized width={50} height={50} />
              <span className="tooltip">About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects" aria-label="Projects">
            <div className={`nav-item ${router.pathname === "/projects" ? "active" : ""}`}>
              <Image src="/portfolio.gif" alt="Projects" unoptimized width={50} height={50} />
              <span className="tooltip">Projects</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/endorsements" aria-label="Endorsements">
            <div className={`nav-item ${router.pathname === "/endorsements" ? "active" : ""}`}>
              <Image src="/friend.gif" alt="Endorsements" unoptimized width={50} height={50} />
              <span className="tooltip">Endorsements</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact" aria-label="Contact Me">
            <div className={`nav-item ${router.pathname === "/contact" ? "active" : ""}`}>
              <Image src="/contact.gif" alt="Contact" unoptimized width={50} height={50} />
              <span className="tooltip">Contact</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
