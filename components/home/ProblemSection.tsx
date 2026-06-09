export default function ProblemSection() {
  const problems = [
    {
      title: 'Regulatory expectations are crystallising',
      desc: 'The FCA Mills Review, launched January 2026, is examining how firms govern AI decisions. The Treasury Committee has recommended comprehensive AI guidance by end of 2026. The direction is clear, even if the final rules are not.',
    },
    {
      title: 'EU AI Act enforcement begins 2 August 2026',
      desc: 'High-risk AI systems in financial services must keep automatic records of their decisions. Credit scoring, risk assessment, and algorithmic trading are explicitly listed. The Act sets fines of up to €15 million or 3% of global turnover for record-keeping failures under Article 12.',
    },
    {
      title: 'AI decisions are difficult to reconstruct',
      desc: 'Reconstructing why an AI model made a specific recommendation six months ago is a hard problem. Ordinary system logs were never designed for regulatory evidence. The gap between what firms deploy and what they can evidence is growing.',
    },
    {
      title: 'Manual documentation does not keep pace',
      desc: 'Spreadsheets and email trails cannot match the volume and velocity of AI-driven decisions. Compliance teams need infrastructure, not process. The challenge is structural, not a question of effort.',
    },
  ]

  return (
    <section id="why-now">
      <div className="container">
        <div className="section-label reveal"><span>01 — Why now</span></div>
        <h2 className="section-title reveal">
          AI is making regulated decisions across your firm. The question is whether you can evidence them.
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
