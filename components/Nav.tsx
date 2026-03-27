'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const closeMenu = () => setMenuOpen(false)

  const scrollToSection = useCallback((id: string) => {
    closeMenu()

    const doScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // Clean URL without hash
        window.history.replaceState(null, '', '/')
      }
    }

    if (pathname !== '/') {
      router.push('/')
      // Wait for navigation then scroll
      setTimeout(doScroll, 100)
    } else {
      doScroll()
    }
  }, [pathname, router])

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
            <button type="button" onClick={() => scrollToSection('problem')}>Problem</button>
            <button type="button" onClick={() => scrollToSection('how-it-works')}>How It Works</button>
            <Link href="/use-cases/" onClick={closeMenu}>Use Cases</Link>
            <button type="button" onClick={() => scrollToSection('regulatory')}>Regulatory</button>
            <button type="button" onClick={() => scrollToSection('team')}>Team</button>
            <button type="button" className="nav-cta" onClick={() => scrollToSection('request-access')}>Request Access</button>
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
        <button type="button" onClick={() => scrollToSection('problem')}>Problem</button>
        <button type="button" onClick={() => scrollToSection('how-it-works')}>How It Works</button>
        <Link href="/use-cases/" onClick={closeMenu}>Use Cases</Link>
        <button type="button" onClick={() => scrollToSection('regulatory')}>Regulatory</button>
        <button type="button" onClick={() => scrollToSection('team')}>Team</button>
        <button type="button" className="nav-cta" onClick={() => scrollToSection('request-access')}>Request Access</button>
      </div>
    </>
  )
}
