import Eyebrow from '../Eyebrow'

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
    <section className="section section--ruled" id="why-now">
      <div className="container">
        <div className="grid12">
          <div className="b1-eyebrow reveal">
            <Eyebrow n="01">Why now</Eyebrow>
          </div>
          <h2 className="statement b1-statement reveal">
            AI is making regulated decisions across your firm.{' '}
            <span className="tone2">The question is whether you can evidence them.</span>
          </h2>
        </div>
        <div className="problem-grid">
          {problems.map((p, i) => (
            <div
              className="problem-point reveal"
              key={i}
              style={{ transitionDelay: `${Math.min(i * 70, 350)}ms` }}
            >
              <div className="cell-title">{p.title}</div>
              <p className="body body--muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
