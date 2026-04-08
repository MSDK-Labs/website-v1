import DashboardMockup from './DashboardMockup'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text-block">
          <div className="hero-badge reveal">
            FCA Mills Review &middot; EU AI Act August 2026 &middot; Compliance deadline approaching
          </div>
          <h1 className="reveal">
            Prove every AI decision is compliant. Before the regulator asks.
          </h1>
          <p className="hero-sub reveal">
            Aegis Trace gives wealth managers and regulated fintechs a tamper-proof audit trail for every AI-driven recommendation, credit decision, and portfolio action. When the FCA requests evidence, you have it.
          </p>
          <div className="hero-ctas reveal">
            <a href="/request-access/" className="btn-primary">Request Early Access &rarr;</a>
            <a href="#how-it-works" className="btn-secondary">See How It Works</a>
          </div>
          <div className="trust-bar reveal">
            FCA Consumer Duty &middot; EU AI Act Art.12 &middot; GDPR Art.25 &middot; UK Data Residency &middot; Hosted on Google Cloud
          </div>
        </div>
        <div className="hero-dashboard reveal">
          <DashboardMockup />
          <p className="dashboard-caption">
            The Aegis Trace compliance dashboard. Real-time visibility into every AI decision across your organisation.
          </p>
        </div>
      </div>
    </section>
  )
}
