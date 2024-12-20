import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link href="/">
            <div className="nav-item">
              <Image src="/new-house.gif" alt="Home" unoptimized width={50} height={50} />
              <span className="tooltip">Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <div className="nav-item">
              <Image src="/info.gif" alt="About" unoptimized width={50} height={50} />
              <span className="tooltip">About</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <div className="nav-item">
              <Image src="/portfolio.gif" alt="Projects" unoptimized width={50} height={50} />
              <span className="tooltip">Projects</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <div className="nav-item">
              <Image src="/contact.gif" alt="Contact" unoptimized width={50} height={50} />
              <span className="tooltip">Contact</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
