import Eyebrow from '../Eyebrow'

export default function IndustrySection() {
  const industries = [
    {
      title: 'Financial Services (Wealth Management & Investment)',
      desc: "Your AI suitability engine recommended selling a client's position. Six months later, the FCA asks why. Aegis Trace provides the signed, tamper-proof record of every factor the model considered, retrievable in seconds.",
      regs: 'FCA Consumer Duty, MiFID II, FCA PS22/3',
    },
    {
      title: 'Financial Services (Credit & Lending)',
      desc: 'Your credit scoring model declined an application. The applicant requests an explanation under GDPR Article 22. Aegis Trace provides the complete decision record, including what the model assessed and why, structured for regulatory submission.',
      regs: 'EU AI Act, GDPR Art.22, FCA CONC',
    },
    {
      title: 'Insurance & Underwriting',
      desc: 'Your automated underwriting model assessed a commercial policy and declined it. Aegis Trace captures the full decision record, so you can demonstrate fair treatment and satisfy FCA ICOBS requirements.',
      regs: 'FCA ICOBS, Solvency II, GDPR Art.22',
    },
    {
      title: 'Healthcare & Life Sciences',
      desc: 'A clinical decision support system flagged a drug interaction. Aegis Trace records the complete recommendation, for MHRA compliance and patient safety audit.',
      regs: 'MHRA AI Guidance, EU MDR, NHS AI Framework',
    },
    {
      title: 'HR & Workforce AI',
      desc: 'AI screening tools, performance scoring, and compensation models are classified as high-risk under EU AI Act Annex III. Aegis Trace provides the automatic record-keeping these systems require.',
      regs: 'EU AI Act Annex III, UK Equality Act',
    },
    {
      title: 'Any Regulated Industry',
      desc: 'Custom redaction profiles. Custom regulatory mappings. If your industry uses AI to make decisions that carry legal, financial, or safety consequences, Aegis Trace provides the evidence infrastructure.',
      regs: 'Custom regulatory mapping',
    },
  ]

  return (
    <section className="section section--ruled" id="industries">
      <div className="container">
        <div className="grid12">
          <div className="b4-eyebrow reveal">
            <Eyebrow n="04">Where it applies</Eyebrow>
          </div>
          <h2 className="statement b4-statement reveal">
            Built for regulated industries{' '}
            <span className="tone2">where AI decisions carry consequences.</span>
          </h2>
        </div>
        <div className="dgrid">
          {industries.map((ind, i) => (
            <div
              className="dcell reveal"
              key={i}
              style={{ transitionDelay: `${Math.min((i % 3) * 70, 350)}ms` }}
            >
              <div className="cell-title">{ind.title}</div>
              <p className="body-sm dcell-body">{ind.desc}</p>
              <div className="mono-caption dcell-tags">{ind.regs}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
