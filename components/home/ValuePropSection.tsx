export default function ValuePropSection() {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="4" y="6" width="24" height="20" rx="3" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M4 12h24" stroke="#B8956A" strokeWidth="1.5"/>
          <rect x="8" y="16" width="6" height="3" rx="1" fill="#B8956A" opacity="0.4"/>
          <rect x="18" y="16" width="6" height="3" rx="1" fill="#B8956A" opacity="0.4"/>
          <rect x="8" y="21" width="16" height="1.5" rx="0.75" fill="#B8956A" opacity="0.25"/>
        </svg>
      ),
      title: 'Automatic Decision Records',
      desc: 'Every time your AI system makes a recommendation, scores a risk, or approves a transaction, Aegis Trace captures a complete, structured record, including inputs, outputs, model version, and reasoning context, automatically via a single API call.',
      value: 'Your compliance team has complete evidence for every AI decision, without manual documentation.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 4L28 10v12L16 28 4 22V10L16 4z" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M16 4v24M4 10l12 6 12-6" stroke="#B8956A" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="16" cy="16" r="3" fill="#B8956A" opacity="0.3"/>
        </svg>
      ),
      title: 'Tamper-Proof Provenance',
      desc: 'Each decision record is cryptographically signed and stored in a tamper-proof ledger with a defined retention policy. Records cannot be altered, deleted, or backdated. Every record includes a verifiable chain of provenance from input to output.',
      value: 'When a regulator asks "prove this record has not been modified", you can. Mathematically.',
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <rect x="6" y="4" width="20" height="24" rx="2" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M10 10h12M10 14h12M10 18h8" stroke="#B8956A" strokeWidth="1.5" opacity="0.4"/>
          <path d="M20 22l2 2 4-4" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Regulator-Ready Exports',
      desc: 'Export audit trails in formats mapped directly to FCA Consumer Duty, EU AI Act Article 12, and MiFID II requirements. One click generates the evidence package a regulator or auditor expects to see.',
      value: 'Cut audit preparation from weeks to hours.',
    },
  ]

  return (
    <section id="what-it-does">
      <div className="container">
        <div className="section-label reveal"><span>What Aegis Trace Does</span></div>
        <h2 className="section-title reveal">
          From AI decision to regulatory evidence, automatically.
        </h2>
        <div className="value-grid">
          {features.map((f, i) => (
            <div className="value-card reveal" key={i}>
              <div className="value-icon">{f.icon}</div>
              <div className="value-title">{f.title}</div>
              <div className="value-desc">{f.desc}</div>
              <div className="value-highlight">{f.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
