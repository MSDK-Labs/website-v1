'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const links = [
    { href: '/#product', label: 'Product' },
    { href: '/how-it-works/', label: 'How it works' },
    { href: '/use-cases/', label: 'Use cases' },
    { href: '/trust/', label: 'Trust' },
    { href: '/about/', label: 'About' },
  ]

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-left">
            <svg className="nav-logo-svg" width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M0 0H5V5H0V0Z" fill="#14161F"/>
              <path d="M5 5H10V10H5V5Z" fill="#14161F"/>
              <path d="M10 0H15V5H10V0Z" fill="#14161F"/>
              <path d="M10 10H15V15H10V10Z" fill="#14161F"/>
              <path d="M0 10L5 5V10H6.85185L5 11.7593V15H0V10Z" fill="#14161F"/>
            </svg>
            <Link href="/" className="nav-brand">MSDK Labs</Link>
            <div className="nav-divider"></div>
            <span className="nav-product">Aegis Trace</span>
          </div>
          <div className="nav-links">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>
            ))}
            <Link href="/#request-access" className="nav-cta" onClick={closeMenu}>Request access</Link>
          </div>
          <button
            className={`nav-hamburger ${menuOpen ? 'active' : ''}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} onClick={closeMenu}>{l.label}</Link>
        ))}
        <Link href="/#request-access" className="nav-cta" onClick={closeMenu}>Request access</Link>
      </div>
    </>
  )
}
