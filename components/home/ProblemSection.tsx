export default function ProblemSection() {
  const problems = [
    {
      title: 'The FCA is watching',
      desc: 'The Mills Review launched January 2026 asks how firms govern AI decisions. The Treasury Committee has recommended the FCA publish comprehensive AI guidance by end of 2026. Firms that cannot demonstrate AI governance will face regulatory scrutiny.',
    },
    {
      title: 'EU AI Act enforcement: August 2026',
      desc: 'High-risk AI systems in financial services must maintain automatic logging of decisions. Credit scoring, risk assessment, and algorithmic trading are explicitly listed. Enforcement begins in four months.',
    },
    {
      title: 'Your AI decisions disappear',
      desc: 'Most firms cannot reconstruct why an AI model made a specific recommendation six months ago. When a client complains or a regulator asks, the evidence does not exist.',
    },
    {
      title: 'Manual compliance cannot scale',
      desc: 'Documenting AI decisions manually through spreadsheets and emails creates gaps, inconsistencies, and personal liability for compliance officers. Every undocumented decision is exposure.',
    },
  ]

  return (
    <section id="why-now">
      <div className="container">
        <div className="section-label reveal"><span>Why Now</span></div>
        <h2 className="section-title reveal">
          AI is making regulated decisions across your firm. Can you prove any of them were appropriate?
        </h2>
        <div className="problem-grid">
          {problems.map((p, i) => (
            <div className="card reveal" key={i}>
              <div className="card-title">{p.title}</div>
              <div className="card-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
