export default function ComplianceSection() {
  return (
    <section id="regulatory">
      <div className="container">
        <div className="section-label reveal"><span>Regulatory Alignment</span></div>
        <h2 className="section-title reveal">Mapped to the regulations governing your AI decisions.</h2>

        {/* Mills Review callout - combines Mills Review + FCA Spotlight into one */}
        <div className="mills-callout reveal">
          <div className="mills-title">The FCA Mills Review and AI Spotlight Programme</div>
          <p className="mills-body">
            The FCA has launched a long-term review into AI in retail financial services, led by Sheldon Mills, with recommendations to the FCA Board in Summer 2026. The Treasury Committee has recommended the FCA publish comprehensive AI guidance by end of 2026. MSDK Labs has been selected for the FCA AI Spotlight programme, which showcases real-world case studies of AI innovation in financial services. Aegis Trace is designed to meet the evidence requirements this regulatory direction implies.
          </p>
        </div>

        <div className="cards-grid-2x3">
          <div className="card reveal"><div className="card-title">FCA PS22/3</div><div className="card-desc">Suitability evidence for consumer investment advice</div></div>
          <div className="card reveal"><div className="card-title">Consumer Duty</div><div className="card-desc">Outcome monitoring for client-appropriate recommendations</div></div>
          <div className="card reveal"><div className="card-title">EU AI Act Art.12</div><div className="card-desc">Automatic logging of high-risk AI system decisions</div></div>
          <div className="card reveal"><div className="card-title">MiFID II</div><div className="card-desc">Audit trail for investment decisions and order execution</div></div>
          <div className="card reveal"><div className="card-title">GDPR Art.25 / Art.30</div><div className="card-desc">PII never leaves your network. Full processing records by design.</div></div>
          <div className="card reveal"><div className="card-title">FCA SYSC 9</div><div className="card-desc">Record retention to reconstruct regulated activities</div></div>
        </div>
      </div>
    </section>
  )
}
