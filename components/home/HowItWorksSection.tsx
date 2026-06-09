import Link from 'next/link'

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'Capture',
      outcome: 'Personal data is stripped out before anything leaves your systems.',
      desc: 'When your AI makes a decision, the record is captured automatically. Aegis Trace takes a mathematical fingerprint that proves the record is unchanged.',
    },
    {
      num: '02',
      title: 'Seal',
      outcome: 'Sealed so it can never be altered, backdated, or deleted.',
      desc: 'Each record is locked the moment it is created. It is time-stamped by an independent authority, so the date can’t be disputed.',
    },
    {
      num: '03',
      title: 'Retrieve',
      outcome: 'Any decision retrievable in seconds.',
      desc: 'When a regulator, auditor, or internal review asks for evidence, you produce it on demand. Every record comes ready for submission.',
    },
  ]

  return (
    <section id="how-it-works">
      <div className="container">
        <div className="section-label reveal"><span>03 — How it works</span></div>
        <h2 className="section-title reveal">Three steps, from AI decision to evidence a regulator can trust.</h2>
        <div className="layer-grid">
          {steps.map((s) => (
            <div className="layer-card reveal" key={s.num}>
              <div className="layer-num">{s.num}</div>
              <div className="layer-title">{s.title}</div>
              <div className="layer-outcome">{s.outcome}</div>
              <div className="layer-desc">{s.desc}</div>
            </div>
          ))}
        </div>
        <Link href="/how-it-works/" className="onward-link reveal">Read the technical detail &rarr;</Link>
      </div>
    </section>
  )
}
