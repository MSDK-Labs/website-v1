export default function IndustrySection() {
  const industries = [
    {
      title: 'Financial Services (Wealth Management & Investment)',
      desc: "Your AI suitability engine recommended selling a client's position. Six months later, the FCA asks why. Aegis Trace provides the signed, tamper-proof record of every factor the model considered, retrievable in seconds.",
      regs: 'FCA Consumer Duty, MiFID II, FCA PS22/3',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="8" y="12" width="32" height="24" rx="3" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M8 20h32" stroke="#B8956A" strokeWidth="1" opacity="0.3"/>
          <rect x="12" y="24" width="10" height="8" rx="1.5" stroke="#B8956A" strokeWidth="1" fill="none" opacity="0.5"/>
          <path d="M14 28h6M14 30h4" stroke="#B8956A" strokeWidth="1" opacity="0.3"/>
          <circle cx="34" cy="28" r="4" stroke="#22C55E" strokeWidth="1.5" fill="none"/>
          <path d="M32 28l1.5 1.5L36 27" stroke="#22C55E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      title: 'Financial Services (Credit & Lending)',
      desc: 'Your credit scoring model declined an application. The applicant requests an explanation under GDPR Article 22. Aegis Trace provides the complete decision record, including inputs, risk factors, and outcome, structured for regulatory submission.',
      regs: 'EU AI Act, GDPR Art.22, FCA CONC',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="10" y="8" width="28" height="32" rx="3" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M16 16h16M16 21h12M16 26h14" stroke="#B8956A" strokeWidth="1" opacity="0.3"/>
          <path d="M16 32l3 3 7-7" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        </svg>
      ),
    },
    {
      title: 'Insurance & Underwriting',
      desc: 'Your automated underwriting model assessed a commercial policy and declined it. Aegis Trace captures the full decision provenance, including risk score, contributing factors, and model version, so you can demonstrate fair treatment and satisfy FCA ICOBS requirements.',
      regs: 'FCA ICOBS, Solvency II, GDPR Art.22',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 6L38 14v12c0 8-6 14-14 18C16 40 10 34 10 26V14L24 6z" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M19 24l3.5 3.5L29 21" stroke="#B8956A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
        </svg>
      ),
    },
    {
      title: 'Healthcare & Life Sciences',
      desc: 'A clinical decision support system flagged a drug interaction. Aegis Trace records the complete recommendation chain, including model version, input data hash, output, and confidence, for MHRA compliance and patient safety audit.',
      regs: 'MHRA AI Guidance, EU MDR, NHS AI Framework',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="18" y="10" width="12" height="28" rx="2" stroke="#B8956A" strokeWidth="1.5" fill="none" opacity="0.5"/>
          <rect x="10" y="18" width="28" height="12" rx="2" stroke="#B8956A" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      ),
    },
    {
      title: 'HR & Workforce AI',
      desc: 'AI screening tools, performance scoring, and compensation models are classified as high-risk under EU AI Act Annex III. Aegis Trace provides the automatic logging these systems require.',
      regs: 'EU AI Act Annex III, UK Equality Act',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="16" r="6" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#B8956A" strokeWidth="1.5" fill="none" opacity="0.5"/>
        </svg>
      ),
    },
    {
      title: 'Any Regulated Industry',
      desc: 'Custom redaction profiles. Custom regulatory mappings. If your industry uses AI to make decisions that carry legal, financial, or safety consequences, Aegis Trace provides the evidence infrastructure.',
      regs: 'Custom regulatory mapping',
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="14" stroke="#B8956A" strokeWidth="1.5" fill="none"/>
          <path d="M24 10v28M10 24h28" stroke="#B8956A" strokeWidth="1" opacity="0.3"/>
          <circle cx="24" cy="24" r="6" stroke="#B8956A" strokeWidth="1" fill="none" opacity="0.5"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="industries">
      <div className="container">
        <div className="section-label reveal"><span>Who It&#39;s For</span></div>
        <h2 className="section-title reveal">Built for regulated industries where AI decisions carry consequences.</h2>
        <div className="industry-grid">
          {industries.map((ind, i) => (
            <div className="industry-card reveal" key={i}>
              <div className="industry-icon">{ind.icon}</div>
              <div className="industry-title">{ind.title}</div>
              <div className="industry-desc">{ind.desc}</div>
              <div className="industry-regs">{ind.regs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
