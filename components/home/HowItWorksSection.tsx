export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Capture',
      desc: 'Your AI system sends a decision payload to a single API endpoint. Python, Node.js, and Java SDKs available. Integration takes less than a day.',
    },
    {
      num: '02',
      title: 'Protect',
      desc: 'Personal data is automatically stripped before it leaves your network. Our redaction engine runs inside your infrastructure, covering names, financial identifiers, and national IDs across 13 EU countries and 9 languages. No personal data ever reaches our servers.',
    },
    {
      num: '03',
      title: 'Seal',
      desc: 'The decision record is cryptographically signed and sealed with a unique certificate. The timestamp, signature, and provenance chain are immutable. Records cannot be altered after sealing.',
    },
    {
      num: '04',
      title: 'Retrieve',
      desc: 'When a regulator, auditor, or internal review requests evidence, retrieve any decision record via API or the compliance dashboard. Export in FCA, EU AI Act, or custom formats.',
    },
  ]

  return (
    <section id="how-it-works">
      <div className="container">
        <div className="section-label reveal"><span>How It Works</span></div>
        <h2 className="section-title reveal">Four steps. One API call. Complete audit coverage.</h2>
        <div className="steps-grid">
          {steps.map((s) => (
            <div className="step-card reveal" key={s.num}>
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        <div className="certificate-card reveal">
          <div className="certificate-header">
            <span className="certificate-header-title">AEGIS TRACE AUDIT RECORD</span>
            <span className="verified-badge">VERIFIED</span>
          </div>
          <div className="certificate-body">
            <div><span className="key">audit_record_id</span>&nbsp;&nbsp;<span className="value">AT-2026-07-14-c3a9f1e</span></div>
            <div><span className="key">agent_id</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">underwriting-model-v3</span></div>
            <div><span className="key">verdict</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value-green">PASS</span></div>
            <div><span className="key">confidence</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">0.9412</span></div>
            <div><span className="key">hmac_signature</span>&nbsp;<span className="value">b7e2d4c8...f19a03e1</span></div>
            <div><span className="key">regulatory_refs</span> <span className="value">FCA PS22/3, MiFID II</span></div>
            <div><span className="key">sealed_at</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="value">2026-07-14T09:31:44Z</span></div>
          </div>
        </div>
        <p className="certificate-caption reveal">
          Example: a sealed audit record for an AI-driven portfolio recommendation. Certificate ID, verdict, regulatory mapping, and cryptographic seal, all retrievable on demand.
        </p>
      </div>
    </section>
  )
}
