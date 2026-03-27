import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            <svg className="footer-logo" width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M0 0H5V5H0V0Z" fill="#F2F0EB"/>
              <path d="M5 5H10V10H5V5Z" fill="#F2F0EB"/>
              <path d="M10 0H15V5H10V0Z" fill="#F2F0EB"/>
              <path d="M10 10H15V15H10V10Z" fill="#F2F0EB"/>
              <path d="M0 10L5 5V10H6.85185L5 11.7593V15H0V10Z" fill="#F2F0EB"/>
            </svg>
            <span className="footer-copy">&copy; 2026 MSDK Labs</span>
          </div>
          <div className="footer-links">
            <Link href="/privacy/">Privacy</Link>
            <Link href="/request-access/">Request Docs</Link>
            <a href="mailto:info@msdklabs.com">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
