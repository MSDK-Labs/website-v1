import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MSDK Labs | The Team Behind Aegis Trace',
  description: 'Built by practitioners who understand what regulators actually ask for. Domain expertise in regulated financial services, security engineering, compliance architecture, and AI.',
}

export default function Company() {
  const expertise = [
    {
      title: 'Regulated Financial Services Delivery',
      desc: 'Direct enterprise delivery experience across UK wealth managers, FCA-regulated advisory firms, and European financial institutions. The team has worked inside the compliance, risk, and technology functions of firms managing billions in client assets. This is not theoretical knowledge. It comes from building and shipping technology inside regulated environments.',
    },
    {
      title: 'Security and Infrastructure Engineering',
      desc: 'Production experience in security architecture, cryptographic systems, cloud infrastructure, and API platform engineering. The Aegis Trace platform runs on Google Cloud with enterprise-grade Kubernetes orchestration, managed database services, and managed key infrastructure. Built to the standards that enterprise security teams expect.',
    },
    {
      title: 'Compliance and Regulatory Architecture',
      desc: 'First-hand knowledge of FCA examination processes, section 166 skilled person reviews, and the evidence formats compliance teams are required to present. Aegis Trace is designed around the practical reality of regulatory scrutiny, not theoretical compliance frameworks.',
    },
    {
      title: 'AI and Machine Learning Engineering',
      desc: 'Production AI systems, model governance, and the specific challenge of making machine-learning decisions auditable at scale. Experience spans natural language processing, automated PII detection across multiple EU languages, and decision provenance engineering.',
    },
  ]

  return (
    <main>
      {/* ABOUT */}
      <section style={{ paddingTop: '160px' }}>
        <div className="container">
          <div className="section-label reveal"><span>About MSDK Labs</span></div>
          <h2 className="section-title reveal">Built by practitioners who understand what regulators actually ask for.</h2>
          <div className="company-about reveal">
            <p>
              MSDK Labs was founded by engineers and technologists with direct experience inside UK wealth management and regulated fintech. The team has delivered enterprise programmes for some of the UK&#39;s largest financial services firms. We have been in the room when compliance teams cannot answer a regulator&#39;s question about an AI system. We built Aegis Trace because we know what evidence is needed and what happens when it does not exist.
            </p>
            <p>
              Our team combines deep expertise in regulated financial services delivery, production AI engineering, and compliance architecture. We are not generalist AI engineers who discovered financial regulation. We are financial technology specialists who built an AI compliance product.
            </p>
          </div>
        </div>
      </section>

      {/* DOMAIN EXPERTISE */}
      <section>
        <div className="container">
          <h2 className="section-title reveal">Domain Expertise</h2>
          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <div className="card reveal" key={i}>
                <div className="card-title">{e.title}</div>
                <div className="card-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOGNITION */}
      <section>
        <div className="container">
          <div className="section-label reveal"><span>Recognition</span></div>
          <h2 className="section-title reveal">Recognition</h2>
          <div className="recognition-grid">
            <div className="card reveal">
              <div className="card-title">Selected for the FCA AI Spotlight Programme</div>
              <div className="card-desc">MSDK Labs has been selected for the FCA AI Spotlight, which showcases real-world case studies of how firms innovate with AI in financial services. This recognises Aegis Trace as a practical contribution to the FCA&#39;s understanding of AI governance.</div>
            </div>
            <div className="card reveal">
              <div className="card-title">Google Cloud Platform</div>
              <div className="card-desc">Aegis Trace is built on Google Cloud infrastructure with EU data residency.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="section-label reveal"><span>Get in Touch</span></div>
          <h2 className="section-title reveal">Tell us your regulatory context.</h2>
          <p className="cta-sub reveal">We are onboarding a select number of FCA-regulated wealth managers and fintechs.</p>
          <div className="reveal">
            <a href="/request-access/" className="btn-primary" style={{ padding: '14px 32px', fontSize: '15px' }}>
              Request Access &rarr;
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
