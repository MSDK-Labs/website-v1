import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-columns">
          <div className="footer-col">
            <div className="footer-col-title">Product</div>
            <Link href="/">Product Overview</Link>
            <Link href="/use-cases/">Use Cases</Link>
            <Link href="/developers/">Developers</Link>
            <Link href="/request-access/">Request Access</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <Link href="/company/">About</Link>
            <Link href="/blog/">Blog</Link>
            <a href="mailto:info@msdklabs.com">Contact</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Legal &amp; Trust</div>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/#trust">Security</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Compliance</div>
            <div className="footer-badges">
              <span className="footer-badge footer-badge-roadmap">SOC 2 In Progress</span>
              <span className="footer-badge footer-badge-roadmap">ISO 27001 Pursuing</span>
              <span className="footer-badge">GDPR Compliant</span>
              <span className="footer-badge">EU AI Act Ready</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <svg className="footer-logo" width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M0 0H5V5H0V0Z" fill="#F2F0EB"/>
              <path d="M5 5H10V10H5V5Z" fill="#F2F0EB"/>
              <path d="M10 0H15V5H10V0Z" fill="#F2F0EB"/>
              <path d="M10 10H15V15H10V10Z" fill="#F2F0EB"/>
              <path d="M0 10L5 5V10H6.85185L5 11.7593V15H0V10Z" fill="#F2F0EB"/>
            </svg>
            <span className="footer-copy">&copy; 2026 MSDK Labs. Aegis Trace is a product of MSDK Labs. All rights reserved.</span>
          </div>
          <div className="footer-bottom-right">
            Hosted on Google Cloud Platform &middot; EU Data Residency &middot; London, UK
          </div>
        </div>
      </div>
    </footer>
  )
}
