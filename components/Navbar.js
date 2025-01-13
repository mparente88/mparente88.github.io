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
          <Link href="/" prefetch aria-label="Home" tabIndex={-1}>
            <div className={`nav-item ${router.pathname === "/" ? "active" : ""}`} tabIndex={0}>
              <Image src="/new-house.gif" alt="Home" unoptimized width={50} height={50} />
              <span className="tooltip">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about" prefetch aria-label="About Me" tabIndex={-1}>
            <div className={`nav-item ${router.pathname === "/about" ? "active" : ""}`} tabIndex={0}>
              <Image src="/info.gif" alt="About" unoptimized width={50} height={50} />
              <span className="tooltip">About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects" prefetch aria-label="Projects" tabIndex={-1}>
            <div className={`nav-item ${router.pathname === "/projects" ? "active" : ""}`} tabIndex={0}>
              <Image src="/portfolio.gif" alt="Projects" unoptimized width={50} height={50} />
              <span className="tooltip">Projects</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/endorsements" prefetch aria-label="Endorsements" tabIndex={-1}>
            <div className={`nav-item ${router.pathname === "/endorsements" ? "active" : ""}`} tabIndex={0}>
              <Image src="/friend.gif" alt="Endorsements" unoptimized width={50} height={50} />
              <span className="tooltip">Endorsements</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact" prefetch aria-label="Contact Me" tabIndex={-1}>
            <div className={`nav-item ${router.pathname === "/contact" ? "active" : ""}`} tabIndex={0}>
              <Image src="/contact.gif" alt="Contact" unoptimized width={50} height={50} />
              <span className="tooltip" tabIndex={-1}>
                Contact
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
