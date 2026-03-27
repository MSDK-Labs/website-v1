'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <svg className="nav-logo-svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M0 0H5V5H0V0Z" fill="#F2F0EB"/>
              <path d="M5 5H10V10H5V5Z" fill="#F2F0EB"/>
              <path d="M10 0H15V5H10V0Z" fill="#F2F0EB"/>
              <path d="M10 10H15V15H10V10Z" fill="#F2F0EB"/>
              <path d="M0 10L5 5V10H6.85185L5 11.7593V15H0V10Z" fill="#F2F0EB"/>
            </svg>
            <Link href="/" className="nav-brand">MSDK Labs</Link>
            <div className="nav-divider"></div>
            <span className="nav-product">Aegis Trace</span>
          </div>
          <div className="nav-links">
            <Link href="/#platform">Platform</Link>
            <Link href="/#solutions">Use Cases</Link>
            <Link href="/regulatory/">Compliance</Link>
            <Link href="/#developers">Developers</Link>
            <Link href="/request-access/" className="nav-cta">Get Started</Link>
          </div>
          <button
            className={`nav-hamburger ${menuOpen ? 'active' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <Link href="/#platform" onClick={closeMenu}>Platform</Link>
        <Link href="/#solutions" onClick={closeMenu}>Use Cases</Link>
        <Link href="/regulatory/" onClick={closeMenu}>Compliance</Link>
        <Link href="/#developers" onClick={closeMenu}>Developers</Link>
        <Link href="/request-access/" className="nav-cta" onClick={closeMenu}>Get Started</Link>
      </div>
    </>
  )
}
