import Link from 'next/link'
import { HalftoneField } from './Textures'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="texture">
        <HalftoneField
          opacity={0.05}
          width={900}
          height={520}
          style={{ position: 'absolute', top: 0, right: 0 }}
        />
      </div>

      <div className="container">
        <div className="grid12 footer-grid">
          <div className="footer-col">
            <div className="eyebrow eyebrow--plain eyebrow--on-band footer-colhead">Product</div>
            <Link href="/#product" className="footer-link">Product Overview</Link>
            <Link href="/how-it-works/" className="footer-link footer-link--sub">How it works</Link>
            <Link href="/use-cases/" className="footer-link footer-link--sub">Use cases</Link>
            <Link href="/trust/" className="footer-link footer-link--sub">Trust</Link>
          </div>
          <div className="footer-col">
            <div className="eyebrow eyebrow--plain eyebrow--on-band footer-colhead">Company</div>
            <Link href="/about/" className="footer-link">About</Link>
            <Link href="/blog/" className="footer-link">Insights</Link>
            <a href="mailto:info@msdklabs.com" className="footer-link">Contact</a>
          </div>
          <div className="footer-col">
            <div className="eyebrow eyebrow--plain eyebrow--on-band footer-colhead">Resources</div>
            <Link href="/developers/" className="footer-link">Developers</Link>
          </div>
          <div className="footer-col">
            <div className="eyebrow eyebrow--plain eyebrow--on-band footer-colhead">Legal</div>
            <Link href="/privacy/" className="footer-link">Privacy</Link>
          </div>
        </div>

        <div className="mono-caption mono-caption--on-band footer-badges">
          SOC 2 Type II: In Progress · ISO 27001: Pursuing · UK GDPR aligned · Built for EU AI Act Article 12
        </div>
        <div className="mono-caption mono-caption--on-band footer-legal">
          © 2026 MSDK Labs. Aegis Trace is a product of MSDK Labs. All rights reserved. &nbsp;·&nbsp;{' '}
          <Link href="/privacy/">Privacy</Link>
        </div>

        <div className="wordmark-wrap">
          <div className="wordmark-giant" aria-hidden="true">AEGIS TRACE</div>
        </div>
      </div>
    </footer>
  )
}
