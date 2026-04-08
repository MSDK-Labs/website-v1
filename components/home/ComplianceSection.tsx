export default function ComplianceSection() {
  return (
    <section id="regulatory">
      <div className="container">
        <div className="section-label reveal"><span>Regulatory Alignment</span></div>
        <h2 className="section-title reveal">Mapped to the regulations governing your AI decisions.</h2>

        <div className="cards-grid-2x3">
          <div className="card reveal"><div className="card-title">FCA PS22/3</div><div className="card-desc">Suitability evidence for consumer investment advice. Aligned with the evidence direction signalled by the FCA Mills Review (January 2026).</div></div>
          <div className="card reveal"><div className="card-title">Consumer Duty</div><div className="card-desc">Outcome monitoring for client-appropriate recommendations. The Treasury Committee has recommended comprehensive AI guidance under Consumer Duty by end of 2026.</div></div>
          <div className="card reveal"><div className="card-title">EU AI Act Art.12</div><div className="card-desc">Automatic logging of high-risk AI system decisions. Enforcement begins August 2026.</div></div>
          <div className="card reveal"><div className="card-title">MiFID II</div><div className="card-desc">Audit trail for investment decisions and order execution.</div></div>
          <div className="card reveal"><div className="card-title">GDPR Art.25 / Art.30</div><div className="card-desc">PII never leaves your network. Full processing records by design.</div></div>
          <div className="card reveal"><div className="card-title">FCA SYSC 9</div><div className="card-desc">Record retention to reconstruct regulated activities. Seven-year retention aligned to SYSC 9 requirements.</div></div>
        </div>
      </div>
    </section>
  )
}
