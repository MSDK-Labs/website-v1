import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Aegis Trace | MSDK Labs',
  description: 'MSDK Labs is formed by engineers and delivery specialists with direct experience of FCA-regulated environments, audit processes, and section 166 reviews.',
}

export default function Team() {
  return (
    <main>
      <section style={{ paddingTop: '160px' }} id="team">
        <div className="container">
          <div className="section-label reveal"><span>The team</span></div>
          <h2 className="section-title reveal">Built by practitioners from regulated financial environments.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
            <div className="reveal" style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted)', lineHeight: 1.85 }}>
              <p>MSDK Labs is formed by engineers and delivery specialists with direct experience of FCA-regulated environments, audit processes, and section 166 reviews. The product is designed to meet the practical requirements of evidencing AI-driven decisions under regulatory scrutiny.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="card reveal">
                <div className="card-title">Regulated financial services</div>
                <div className="card-desc">Enterprise delivery at wealth managers across the UK and EU and FCA and EU-regulated firms. We understand compliance requirements from the inside.</div>
              </div>
              <div className="card reveal">
                <div className="card-title">Production AI systems</div>
                <div className="card-desc">Production AI systems, API architecture, and the engineering required to make machine-learning decisions auditable at scale.</div>
              </div>
              <div className="card reveal">
                <div className="card-title">Compliance architecture</div>
                <div className="card-desc">FCA examination processes, section 166 reviews, and the evidence formats compliance teams are required to present.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
