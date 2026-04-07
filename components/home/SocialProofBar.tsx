export default function SocialProofBar() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="proof-grid">
          <div className="proof-group">
            <div className="proof-group-label">Regulatory Alignment</div>
            <div className="proof-pills">
              <span className="proof-pill">Selected for the FCA AI Spotlight Programme</span>
              <span className="proof-pill">EU AI Act Ready</span>
              <span className="proof-pill">GDPR Art.25 by Architecture</span>
              <span className="proof-pill proof-pill-roadmap">SOC 2 Type II: In Progress</span>
            </div>
          </div>
          <div className="proof-group">
            <div className="proof-group-label">Infrastructure</div>
            <div className="proof-pills">
              <span className="proof-pill">Hosted on Google Cloud Platform</span>
              <span className="proof-pill">EU Data Residency (europe-west2)</span>
              <span className="proof-pill proof-pill-roadmap">ISO 27001: Pursuing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
