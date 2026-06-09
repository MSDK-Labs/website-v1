import Link from 'next/link'
import Eyebrow from '../Eyebrow'

export default function ProofSection() {
  const stats = [
    { value: '75%', desc: 'of UK financial services firms are already using AI', source: 'Bank of England & FCA Joint Survey, 2024' },
    { value: '59%', desc: 'of institutions report measurable productivity gains from AI, up from 32% a year earlier', source: 'Lloyds Financial Institutions Sentiment Survey, 2025' },
    { value: '1 in 3', desc: 'UK customers use AI weekly to manage their money', source: 'Lloyds, 2025' },
    { value: '2 Aug 2026', desc: 'EU AI Act high-risk enforcement begins. Most firms are not ready.', source: 'European Commission' },
  ]

  return (
    <section className="section section--ruled" id="proof">
      <div className="container">
        <div className="grid12">
          <div className="b5-eyebrow reveal">
            <Eyebrow n="05">Proof</Eyebrow>
          </div>
          <h2 className="statement b5-statement reveal">
            Proof, <span className="tone2">not promises.</span>
          </h2>
          <p className="body b5-lead reveal">
            Aegis Trace is being built with regulated firms and engaged directly with the regulator. The evidence below is what we can stand behind today.
          </p>
        </div>

        <div className="stats-row">
          {stats.map((s, i) => (
            <div className="stat-cell reveal" key={i} style={{ transitionDelay: `${Math.min(i * 70, 350)}ms` }}>
              <div className="stat-numeral">{s.value}</div>
              <p className="body-sm stat-desc">{s.desc}</p>
              <div className="mono-caption stat-source">{s.source}</div>
            </div>
          ))}
        </div>

        <div className="prows">
          <div className="prow grid12 reveal">
            <div className="mono-caption prow-label">Selected for the FCA AI Spotlight</div>
            <div className="prow-body">
              <p className="body">MSDK Labs has been selected for the FCA AI Spotlight, which showcases real-world case studies of how firms innovate with AI in financial services.</p>
            </div>
          </div>
          <div className="prow grid12 reveal">
            <div className="mono-caption prow-label">Read the regulatory analysis</div>
            <div className="prow-body">
              <p className="body">Our analysis of the FCA Mills Review and what it means for AI decision governance.</p>
              <Link href="/blog/fca-mills-review-ai-decision-governance/" className="link-arrow">The FCA Mills Review</Link>
            </div>
          </div>
          <div className="prow grid12 reveal">
            <div className="mono-caption prow-label">Google Cloud</div>
            <div className="prow-body">
              <p className="body">Hosted on Google Cloud, with UK and EU data residency.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
