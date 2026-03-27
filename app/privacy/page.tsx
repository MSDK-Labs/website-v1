import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — MSDK Labs',
  description: 'Privacy Policy for MSDK Labs and Aegis Trace. How we collect, use, and protect your personal data.',
}

export default function Privacy() {
  return (
    <main className="privacy-content">
      <h1>Privacy Policy</h1>
      <p className="privacy-updated">Last updated: March 2026</p>

      <div className="privacy-section">
        <h2>1. Who we are</h2>
        <p>MSDK Labs (trading as Aegis Trace) operates the website msdklabs.com and the Aegis Trace product. We are the data controller for personal data collected through this website. You can contact us at <a href="mailto:info@msdklabs.com">info@msdklabs.com</a>.</p>
      </div>

      <div className="privacy-section">
        <h2>2. What data we collect</h2>
        <ul>
          <li>Email address, submitted via the Request Access form</li>
          <li>Any information you voluntarily provide via email contact</li>
          <li>Standard server logs (IP address, browser type, pages visited) collected by GitHub Pages hosting infrastructure</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>3. Why we collect it</h2>
        <p>We use your data to respond to early access requests and product enquiries, and to communicate about the Aegis Trace programme. We do not use your data for advertising, profiling, or automated decision-making. We do not sell your data to third parties.</p>
      </div>

      <div className="privacy-section">
        <h2>4. Legal basis</h2>
        <p>We process your personal data under the following legal bases as defined by the UK General Data Protection Regulation (UK GDPR):</p>
        <ul>
          <li><strong>Legitimate interest</strong> — responding to inbound product enquiries from prospective clients</li>
          <li><strong>Consent</strong> — where you have explicitly submitted your email address via the request access form</li>
        </ul>
      </div>

      <div className="privacy-section">
        <h2>5. How long we keep it</h2>
        <p>Email enquiry data is retained for up to 24 months from the date of submission, or until you request its deletion — whichever comes first. Server logs are retained by GitHub Pages in accordance with their own privacy policy and data retention practices.</p>
      </div>

      <div className="privacy-section">
        <h2>6. Your rights</h2>
        <p>Under the UK GDPR, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Correct any inaccurate or incomplete data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent at any time</li>
          <li>Object to processing based on legitimate interest</li>
          <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a></li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:info@msdklabs.com">info@msdklabs.com</a>. We will respond within 30 days.</p>
      </div>

      <div className="privacy-section">
        <h2>7. Data storage</h2>
        <p>This website is hosted on GitHub Pages (GitHub, Inc., USA). Email submissions are processed via Formspree and delivered to our team. No personal data is processed by Aegis Trace product infrastructure. Where data is transferred outside the UK, appropriate safeguards are in place in accordance with UK GDPR requirements.</p>
      </div>

      <div className="privacy-section">
        <h2>8. Cookies</h2>
        <p>This website does not use tracking cookies, analytics services, or advertising pixels. GitHub Pages may set minimal technical cookies required for hosting. No third-party tracking is present on this site.</p>
      </div>

      <div className="privacy-section">
        <h2>9. Third parties</h2>
        <p>We do not share your personal data with third parties except where required by law or where necessary to operate the services described above (GitHub Pages for hosting, Formspree for form processing). We do not engage in data brokering or sale of personal information.</p>
      </div>

      <div className="privacy-section">
        <h2>10. Contact</h2>
        <p>To exercise your data rights, ask questions about this policy, or raise a concern, contact us at <a href="mailto:info@msdklabs.com">info@msdklabs.com</a>.</p>
      </div>
    </main>
  )
}
