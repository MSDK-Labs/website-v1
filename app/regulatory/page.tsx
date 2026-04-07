import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Regulatory Compliance , Aegis Trace | MSDK Labs',
  description: 'Aegis Trace audit records are mapped to FCA PS22/3, Consumer Duty, EU AI Act Art.12, MiFID II, GDPR Art.25, GDPR Art.30, and FCA SYSC 9.',
}

export default function Regulatory() {
  return (
    <main>
      <section style={{ paddingTop: '160px' }} id="compliance">
        <div className="container">
          <div className="section-label reveal"><span>Compliance</span></div>
          <h2 className="section-title reveal">Mapped to the regulations governing AI-driven decisions.</h2>
          <div className="cards-grid-2x3">
            <div className="card reveal"><div className="card-title">FCA PS22/3</div><div className="card-desc">Suitability evidence for consumer investment advice</div></div>
            <div className="card reveal"><div className="card-title">Consumer Duty</div><div className="card-desc">Outcome monitoring for client-appropriate recommendations</div></div>
            <div className="card reveal"><div className="card-title">EU AI Act Art.12</div><div className="card-desc">Automatic logging of high-risk AI system decisions</div></div>
            <div className="card reveal"><div className="card-title">MiFID II</div><div className="card-desc">Audit trail for investment decisions and order execution</div></div>
            <div className="card reveal"><div className="card-title">GDPR Art.30</div><div className="card-desc">Records of automated processing involving personal data</div></div>
            <div className="card reveal"><div className="card-title">FCA SYSC 9</div><div className="card-desc">Record retention to reconstruct regulated activities</div></div>
          </div>
          <div className="guarantee-card reveal">
            <div className="card-badge">Architecture Guarantee</div>
            <div className="card-title">GDPR Art.25</div>
            <div className="card-desc">PII redaction runs entirely inside the client network. Aegis Trace never receives raw personal data. Verified by automated network isolation tests on every build.</div>
          </div>
        </div>
      </section>
    </main>
  )
}
