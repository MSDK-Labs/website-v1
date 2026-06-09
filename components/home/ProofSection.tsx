import Link from 'next/link'
import CertificateMotif from './CertificateMotif'

export default function ProofSection() {
  const stats = [
    { value: '75%', desc: 'of UK financial services firms are already using AI', source: 'Bank of England & FCA Joint Survey, 2024' },
    { value: '59%', desc: 'of institutions report measurable productivity gains from AI, up from 32% a year earlier', source: 'Lloyds Financial Institutions Sentiment Survey, 2025' },
    { value: '1 in 3', desc: 'UK customers use AI weekly to manage their money', source: 'Lloyds, 2025' },
    { value: '2 Aug 2026', desc: 'EU AI Act high-risk enforcement begins. Most firms are not ready.', source: 'European Commission' },
  ]

  return (
    <section id="proof">
      <div className="container">
        <div className="section-label reveal"><span>05 — Proof</span></div>
        <h2 className="section-title reveal">Proof, not promises.</h2>
        <p className="proof-lead reveal">
          Aegis Trace is being built with regulated firms and engaged directly with the regulator. The evidence below is what we can stand behind today.
        </p>

        <div className="proof-row">
          <div className="proof-points reveal">
            <div className="proof-point">
              <div className="proof-point-title">Selected for the FCA AI Spotlight</div>
              <div className="proof-point-desc">
                MSDK Labs has been selected for the FCA AI Spotlight, which showcases real-world case studies of how firms innovate with AI in financial services.
              </div>
            </div>
            <div className="proof-point">
              <div className="proof-point-title">Read the regulatory analysis</div>
              <div className="proof-point-desc">
                Our analysis of the FCA Mills Review and what it means for AI decision governance.
              </div>
              <Link href="/blog/fca-mills-review-ai-decision-governance/" className="proof-point-link">
                The FCA Mills Review &rarr;
              </Link>
            </div>
          </div>
          <div className="reveal">
            <CertificateMotif />
            <p className="certificate-caption">An illustrative certificate. Every sealed decision produces one.</p>
          </div>
        </div>

        <div className="kpi-section reveal" style={{ paddingTop: '48px', paddingBottom: '48px', marginTop: '16px' }}>
          <div className="kpi-stats-grid">
            {stats.map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-desc">{s.desc}</div>
                <div className="stat-source">{s.source}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="infra-line reveal">
          Hosted on Google Cloud, with UK and EU data residency.
        </p>
      </div>
    </section>
  )
}
