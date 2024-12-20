import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link href="/">
            <div className={`nav-item ${router.pathname === "/" ? "active" : ""}`}>
              <Image src="/new-house.gif" alt="Home" unoptimized width={50} height={50} />
              <span className="tooltip">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className={`nav-item ${router.pathname === "/about" ? "active" : ""}`}>
              <Image src="/info.gif" alt="About" unoptimized width={50} height={50} />
              <span className="tooltip">About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className={`nav-item ${router.pathname === "/projects" ? "active" : ""}`}>
              <Image src="/portfolio.gif" alt="Projects" unoptimized width={50} height={50} />
              <span className="tooltip">Projects</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/endorsements">
            <div className={`nav-item ${router.pathname === "/endorsements" ? "active" : ""}`}>
              <Image src="/friend.gif" alt="Endorsements" unoptimized width={50} height={50} />
              <span className="tooltip">Endorsements</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
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
