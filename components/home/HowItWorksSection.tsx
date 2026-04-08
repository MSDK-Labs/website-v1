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
        <div className="outcome-card reveal">
          <div className="outcome-header">
            <span className="outcome-verified">
              <span className="outcome-verified-dot" />
              VERIFIED
            </span>
            <span className="outcome-verdict outcome-verdict-pass">PASS</span>
          </div>
          <div className="outcome-body">
            <div className="outcome-row">
              <span className="outcome-key">Certificate</span>
              <span className="outcome-val outcome-val-mono">AT-2026-07-14-c3a9f1e</span>
            </div>
            <div className="outcome-row">
              <span className="outcome-key">Agent</span>
              <span className="outcome-val">suitability-engine-v3</span>
            </div>
            <div className="outcome-row">
              <span className="outcome-key">Sealed</span>
              <span className="outcome-val">14 Jul 2026, 09:31 UTC</span>
            </div>
            <div className="outcome-row">
              <span className="outcome-key">Regulatory</span>
              <span className="outcome-val">FCA Consumer Duty &middot; MiFID II</span>
            </div>
            <div className="outcome-row">
              <span className="outcome-key">Retention</span>
              <span className="outcome-val">7 years (until Jul 2033)</span>
            </div>
          </div>
          <div className="outcome-footer">
            Integrity verified. Tamper-proof. Retrievable.
          </div>
        </div>
      </div>
    </section>
  )
}
